export class Transation {
      id: string = ""
      user_id: string = ""
      old_wallet: number = 0
      new_wallet: number = 0
      money: number = 0
      note: string = ""
      static createObj = (src?: Partial<Transation>): Transation => {
            const obj = new Transation();

            return {
                  ...obj,
                  ...src,
            };
      };
}