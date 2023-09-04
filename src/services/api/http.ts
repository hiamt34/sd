import Axios, { AxiosResponse } from "axios";
import { ConfirmEmailDto, Designer, LoginDto, RegisterDto } from "./inteface/designer.interface";
Axios.defaults.baseURL = process.env.baseUrl ?? "https://hiamt9a.online/"
Axios.interceptors.response.use(
      (value) => value,
      (err) => err.response
      //todo: Hiện toast err
)

export class ApiService {
      static setAuthorization = (token: string) => { Axios.defaults.headers.common.Authorization = `Bearer ${token}` }

      static getOneProductDesign = (_id: string): Promise<Designer> => Axios.get(Url.getOneProductDesign(_id))

      static login = (data: LoginDto): Promise<AxiosResponse<{ status: string, payload: { token: string, user: Designer }, errors?: any }>> => Axios.post(Url.loginDesign, data)
      static register = (data: RegisterDto): Promise<AxiosResponse> => Axios.post(Url.registerDesign, data)
      static confirmEmail = (data: ConfirmEmailDto): Promise<AxiosResponse> => Axios.post(Url.confirmEmail, data)
      static getDesigner = (): Promise<AxiosResponse> => Axios.get(Url.getDesign)
}


export class Url {
      public static getOneProductDesign = (id: string): string => `designs/items/${id}`


      public static registerDesign = "api/v1/auth/email/register"
      public static loginDesign = "api/v1/auth/email/login"
      public static confirmEmail = "api/v1/auth/email/confirm"
      public static getDesign = "api/v1/auth/me"
}
