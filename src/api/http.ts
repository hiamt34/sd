import Axios from "axios";
import { Designer } from "./inteface/designer.interface";
Axios.defaults.baseURL = process.env.baseUrl ?? "http://localhost:4000"
Axios.interceptors.response.use(
      (value) => value,
      (err) => console.log(err)
      //todo: Hiện toast err
)
export class Api {
      static getOneProductDesign = async (_id: string): Promise<Designer> => await Axios.get(Url.getOneProductDesign(_id))


}


export class Url {
      static getOneProductDesign = (id: string): string => `designs/items/${id}`
}