import Axios from "axios";
import { Designer, LoginDto } from "./inteface/designer.interface";
Axios.defaults.baseURL = process.env.baseUrl ?? "http://localhost:4000"
Axios.interceptors.response.use(
      (value) => value,
      (err) => console.log(err)
      //todo: Hiện toast err
)
export class Api {
      static getOneProductDesign = async (_id: string): Promise<Designer> => await Axios.get(Url.getOneProductDesign(_id))

      static login = async (data: LoginDto): Promise<{ token: string, user: Designer }> => await Axios.post(Url.loginDesign, data)
}


export class Url {
      static getOneProductDesign = (id: string): string => `designs/items/${id}`


      static registerDesign = "api/v1/auth/email/register"
      static loginDesign = "api/v1/auth/email/login"
}