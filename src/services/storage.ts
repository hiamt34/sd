'use client'
import { Api } from "@/api/http"
import { Order } from "@/api/inteface/order.interface"

export enum LocalStorageKey {
  Token = "designer",
  Order = "order"
}

class LocalStorageService {
  private token: string = ""
  private order: Array<Order> = []
  constructor() {

    if (typeof window === "undefined") {
      return
    }
    console.log('Khởi tạo instance localstorage')
    if (localStorage.getItem(LocalStorageKey.Token) === null) {
      localStorage.setItem(LocalStorageKey.Token, "")
    }
    if (localStorage.getItem(LocalStorageKey.Order) === null) {
      localStorage.setItem(LocalStorageKey.Order, JSON.stringify([]))
    }
    this.token = localStorage.getItem(LocalStorageKey.Token) ?? ""
    this.order = JSON.parse(localStorage.getItem(LocalStorageKey.Order) ?? "[]")
    console.log(`Loclstorage có token:${this.token}, order:${this.order}`);

  }

  public getToken(): string {
    return this.token
  }

  public getOrder(): Array<Order> {
    return this.order
  }

  public setToken(token: string): void {
    if (typeof window === "undefined") {
      return
    }
    localStorage.setItem(LocalStorageKey.Token, token)
  }


  public getApiLogin() {
    this.token


    return false

  }
}

export const localStorageService = new LocalStorageService()