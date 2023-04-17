import AppDataSource from "../../data-source";
import Address from "../../entities/address";
import User from "../../entities/user";
import { IAddressReq, IAddressRes } from "../../interfaces/address";
import { AddressSchemaRet } from "../../schemas/address";

const updateAddressService = async (
  id: string,
  body: IAddressReq
): Promise<IAddressRes> => {
  const addressRepository = AppDataSource.getRepository(Address);
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: {
      id: id,
    },
    relations: { address: true },
  });

  const { address } = findUser;

  const updateAddress = addressRepository.create({
    ...address,
    ...body,
  });

  const updateUser = userRepository.create({
    ...findUser,
    address: address,
  });

  await addressRepository.save(updateAddress);
  await userRepository.save(updateUser);

  const validAddress = await AddressSchemaRet.validate(updateAddress, {
    stripUnknown: true,
  });

  return validAddress;
};
export default updateAddressService;
