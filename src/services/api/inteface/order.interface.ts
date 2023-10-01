export class Bill {
      id: number = 0
      total_price: number = 0
      status: BillStatus = BillStatus.new
      name: string = ""
      phone: string = ""
      address: string = ""
      province: {
            name: string
      } = {} as any
      district: {
            name: string
      } = {} as any
      ward: {
            name: string
      } = {} as any
      orders: Order[] = []


      static createObj = (src?: Partial<Bill>): Bill => {
            const obj = new Bill();

            return {
                  ...obj,
                  ...src,
            };
      };
}
export enum BillStatus {
      new = "PENDING",
      intransit = "INTRANSIT",
      done = "SUCCESS",
      reject = "FAIL"


}
export enum OrderStatus {
      pending = "PENDING",
      success = "SUCCESS"
}
export class Order {
      id = 0
      bill_id = ""
      price = 0
      product_detail_id = ""
      quantity = 0
      size = ""


      product_detail: {
            status: OrderStatus,
            product_id: number
            photo_befor: {
                  id: number
                  path: string
                  user_id: string
            }

            photo_after: {
                  id: number
                  path: string
                  user_id: string
            }
            photo_design_befor: {
                  id: number
                  path: string
                  user_id: string
            }
            photo_design_after: {
                  id: number
                  path: string
                  user_id: string
            }
      } = {} as any

}