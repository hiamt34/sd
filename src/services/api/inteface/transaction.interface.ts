export interface CreateTransactionDto {
      money: number
      bank_number: string
      bank_username: string
      bank: {
            id: number
      }
}