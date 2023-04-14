import AppDataSource from "../../data-source";
import Address from "../../entities/address";
import User from "../../entities/user";
import { AppError } from "../../errors/AppError";
import { IAddressReq } from "../../interfaces/address";
import { AddressSchemaRet } from "../../schemas/address";

const updateAddressService = async (body: IAddressReq) => {
  const { street } = body;
  const addressRepository = AppDataSource.getRepository(Address);
  const userRepository = AppDataSource.getRepository(User);

  const findAddress = await userRepository.findOne({
    where: {
      address: {
        street: street,
      },
    },
    relations: { address: true },
  });

  if (!findAddress) {
    throw new AppError("Address not found", 404);
  }

  const { address } = findAddress;

  const updateAddress = addressRepository.create({
    ...address,
    ...body,
  });

  await addressRepository.save(updateAddress);

  const validAddress = await AddressSchemaRet.validate(updateAddress, {
    stripUnknown: true,
  });

  return validAddress;
};
export default updateAddressService;
