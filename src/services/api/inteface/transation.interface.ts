import { Order } from "./order.interface"
import { GetProductDto } from "./product.inteface"

export class Transaction {
      id: string = ""
      money: number = 0
      note: string = null as any
      order_id: string = null as any
      status: TransactionStatus = TransactionStatus.Pending
      type: TransactionType = TransactionType.Cashout
      user_id: number = 0
      bank: {
            id: number
      } = {
                  id: 0
            }
      bank_id: number = 0
      bank_username: string = ""
      order: Order = {} as any
      createdAt: string = ""
      static createObj = (src?: Partial<Transaction>): Transaction => {
            const obj = new Transaction();

            return {
                  ...obj,
                  ...src,
            };
      };
}
export interface GetTranSactionDto extends GetProductDto {

}
export enum TransactionStatus {
      Pending = "PENDING",
      Success = "SUCCESS"
}
export enum TransactionType {
      Cashout = "CASHOUT"
}