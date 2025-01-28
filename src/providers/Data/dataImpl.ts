import { LoginUser, RegisterUser } from "../../models";
import { DataContextType } from "./Context";
import PocketBase from "pocketbase";

export const pocketBaseImpl: () => DataContextType = () => {
  const pb = new PocketBase("http://127.0.0.1:8090");
  return {
    async registerUser(req: RegisterUser) {
      const record: any = await pb.collection("users").create({
        ...req,
        emailVisibility: true,
      });
      return {
        id: record.id,
        name: record.name,
        email: record.email,
      };
    },
    async loginUser(req: LoginUser) {
      const response = await pb
        .collection("users")
        .authWithPassword(req.email, req.password);
      return {
        id: response.record.id,
        name: response.record.name,
        email: response.record.email,
      };
    },
  };
};
