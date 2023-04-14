import AppDataSource from "../../data-source";
import Address from "../../entities/address";
import { AppError } from "../../errors/AppError";
import { IAddressReq, IAddressRes } from "../../interfaces/address";
import { AddressSchemaRet } from "../../schemas/address";

export const createAddressService = async (
  data: IAddressReq
): Promise<IAddressRes> => {
  const { street } = data;

  const addressRepository = AppDataSource.getRepository(Address);

  const findAddress = await addressRepository.findOneBy({ street: street });

  if (findAddress) {
    throw new AppError("Existing address", 409);
  }

  const addressCreate = addressRepository.create(data);

  await addressRepository.save(addressCreate);

  const validAddress = await AddressSchemaRet.validate(addressCreate, {
    stripUnknown: true,
  });

  return validAddress;
};
export default createAddressService;
