export class Designer {
      id: string = ""
      fistName: string = ""
      lastName: string = ""
      avatar: string = ""
      role: string = ""
      static createObj = (src?: Partial<Designer>): Designer => {
            const obj = new Designer();

            return {
                  ...obj,
                  ...src,
            };
      };
}