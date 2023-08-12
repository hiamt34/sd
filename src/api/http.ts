import Axios from "axios";
import { Product } from "./inteface/product.inteface";
Axios.defaults.baseURL = process.env.baseUrl ?? "http://localhost:4000"
Axios.interceptors.response.use(
      (value) => value,
      (err) => console.log(err)
      //todo: Hiện toast err
)
export class Api {
      static getOneProductDesign = async (id: string): Promise<Product> => await Axios.get(Url.getOneProductDesign(id))

}


export class Url {
      static getOneProductDesign = (id: string): string => `designs/items/${id}`
}