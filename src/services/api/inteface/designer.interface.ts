export class Designer {
      id: number = 0
      email: string = ""
      provider: string = ""
      firstName: string = ""
      photo: string = ""
      banner: string = ""
      bio: string = ""
      photo_avatar_default: string = ""
      photo_banner_default: string = ""
      role: Role = {
            id: 0,
            name: "",
            __entity: ""
      }
      status: Status = {
            id: 0,
            name: "",
            __entity: ""
      }
      static createObj = (src?: Partial<Designer>): Designer => {
            const obj = new Designer();

            return {
                  ...obj,
                  ...src,
            };
      };
}

export interface LoginDto {
      email: string
      password: string
}

export interface RegisterDto extends LoginDto {
      firstName: string
}
export interface Role {
      id: number
      name: string
      __entity: string
}
export interface ConfirmEmailDto {
      email: string
      code: string
}
export interface Status {
      id: number
      name: string
      __entity: string
}