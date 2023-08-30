export class Designer {
      id: number = 0
      email: string = ""
      provider: string = ""
      fistName: string = ""
      lastName: string = ""
      photo: string = ""
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
export interface Role {
      id: number
      name: string
      __entity: string
}

export interface Status {
      id: number
      name: string
      __entity: string
}