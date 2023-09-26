'use client'

import { ApiService } from "./api/http"
import { Designer } from "./api/inteface/designer.interface"
import { Order } from "./api/inteface/order.interface"

export enum LocalStorageKey {
  Token = "designer",
  Id = 'tls',
  Order = "order"
}

class LocalStorageService {
  private token: string = ""
  private order: Array<Order> = []
  public user_id: number = 0
  private designer: Designer = Designer.createObj()
  public is_login: boolean = false
  constructor() {

    if (typeof window === "undefined") {
      return
    }
    if (localStorage.getItem(LocalStorageKey.Token) === null) {
      localStorage.setItem(LocalStorageKey.Token, "")
    }
    if (localStorage.getItem(LocalStorageKey.Order) === null) {
      localStorage.setItem(LocalStorageKey.Order, JSON.stringify([]))
    }
    if (localStorage.getItem(LocalStorageKey.Id) === null) {
      localStorage.setItem(LocalStorageKey.Id, "")
    }
    this.token = localStorage.getItem(LocalStorageKey.Token) ?? ""
    this.order = JSON.parse(localStorage.getItem(LocalStorageKey.Order) ?? "[]")
    this.user_id = parseInt(localStorage.getItem(LocalStorageKey.Id) ?? '0')
    if (this.token !== "") {
      ApiService.setAuthorization(this.token)
      ApiService.getDesigner().then((response) => {
        if (response.status === 200) {
          this.is_login = true
          this.designer = response.data.payload
          this.user_id = response.data.payload.id
        }

      })
    }

  }


  public getToken(): string {
    return this.token
  }

  public getOrder(): Array<Order> {
    return this.order
  }


  public setStorage(token: string, user_id: number, order?: any): void {
    if (typeof window === "undefined") {
      return
    }
    localStorage.setItem(LocalStorageKey.Token, token)
    localStorage.setItem(LocalStorageKey.Id, `${user_id}`)
  }



}

export const localStorageService = new LocalStorageService()