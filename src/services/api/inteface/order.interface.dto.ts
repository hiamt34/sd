export interface CreateOrderDto {

      orders: Array<{
            product_detail_id: number
            quantity: number
            size: string
      }>
      address: string,
      note: string
      payment_type: string
      province_id: number,
      district_id: number,
      ward_id: number,
      phone: string,
      name: string


}