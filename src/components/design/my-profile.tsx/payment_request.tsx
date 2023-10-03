import { ApiService } from "@/services/api/http"
import { Bank } from "@/services/api/inteface/bank.interface"
import { Autocomplete, TextField, makeStyles, withStyles } from "@mui/material"
import { useEffect, useState } from "react"
import { ButtonBase, LinearProgress } from "@mui/material"
import { CreateTransactionDto } from "@/services/api/inteface/transaction.interface"
interface Props {
      onSubmit: (data: Bank) => void
      curentMoney: number
}
interface State {
      list: Array<Bank>,
      curent: Bank,
      onSubmit: string,
      bankAccountNumber: string
      bankAccountName: string
      money: string
      validBank: string
      validBankNumber: string
      validBankName: string
      validMoney: string
      validSubmit: string

}

export const RequestPayment = (props: Props) => {
      const [state, setState] = useState<State>({
            list: [],
            curent: {
                  code: "",
                  id: 1,
                  logo: '',
                  short_name: 'Chọn ngân hàng',
                  name: ''
            },
            onSubmit: "Gửi yêu cầu",
            bankAccountNumber: "",
            bankAccountName: "",
            money: "",
            validBank: "",
            validBankNumber: "",
            validBankName: "",
            validMoney: "",
            validSubmit: ""
      })
      useEffect(() => {
            ApiService.getBanks().then((response) => {
                  if (response.data.status === 200) {

                        setState({
                              ...state,
                              list: response.data.payload
                        })
                  }
            })
      }, [])
      const onSubmit = () => {
            console.log(state);

            setState({
                  ...state,
                  validSubmit: "",
                  onSubmit: 'Đang gửi yêu cầu'
            })

            if (state.curent.name === "") {
                  setState({
                        ...state,
                        validBank: "Vui lòng chọn ngân hàng"
                  })
                  return
            }
            if (state.bankAccountNumber === "") {
                  setState({
                        ...state,
                        validBankNumber: 'Vui lòng nhập số tài khoản'
                  })
                  return
            }
            if (state.bankAccountName === "") {
                  setState({
                        ...state,
                        validBankName: "Vui lòng nhậP người thụ hưởng"
                  })
                  return
            }
            if (state.money === "") {
                  setState({
                        ...state,
                        validMoney: "Vui lòng nhập số tiền bạn muốn rút"
                  })
                  return
            }
            if (parseInt(state.money) > props.curentMoney) {
                  setState({
                        ...state,
                        validMoney: "Vượt quá số tiền bạn có"
                  })
                  return
            }
            const dataCreate: CreateTransactionDto = {
                  money: parseInt(state.money),
                  bank_username: state.bankAccountName,
                  bank_number: state.bankAccountNumber,
                  bank: {
                        id: state.curent.id
                  }
            }
            ApiService.createTransation(dataCreate).then((response) => {
                  if (response.data?.status === 201) {
                        setState({
                              ...state,
                              money: "",
                              onSubmit: "Gửi yêu cầu thành công"
                        })
                        return
                  }
                  setState({
                        ...state,
                        validSubmit: "Gửi yêu cầu thất bại, vui lòng thử lại trong ít phút",
                        onSubmit: "Gửi yêu cầu"
                  })
            })
      }
      return (
            <div className="form-border">
                  <h3>Yêu cầU rút tiềN</h3>
                  Ví hiện tại <b>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.curentMoney)}</b>
                  <br />
                  <br />
                  <h5>Tài khoản nhận</h5>
                  <div >
                        <div >Ngân hàng</div>
                        <div className="d-flex">
                              <Autocomplete

                                    getOptionLabel={(option) => option.short_name}
                                    options={state.list}
                                    value={state.curent}
                                    defaultValue={state.curent}
                                    onChange={(event, newValue) => {
                                          if (newValue) {
                                                setState({
                                                      ...state,
                                                      curent: newValue,
                                                      validSubmit: "",
                                                      validBank: ""
                                                })
                                                props.onSubmit(newValue)
                                          }
                                    }}
                                    clearIcon={false}
                                    sx={{ width: 205 }}
                                    renderInput={(params) =>
                                          <div ref={params.InputProps.ref}>
                                                <input style={{ paddingLeft: 10, border: 'solid 1px rgba(0, 0, 0, .2)', borderRadius: '10px', height: '40px', width: '100%' }} {...params.inputProps} />
                                          </div>}
                              />

                              {
                                    state.curent.logo !== "" &&
                                    <img src={state.curent.logo} style={{ height: '40px', width: '100px', marginLeft: 20 }} />
                              }


                        </div>
                        <div style={{ color: "red", marginLeft: 3, fontSize: '14px' }}>{state.validBank}</div>

                  </div>
                  <div className="" style={{ marginTop: 10 }}>
                        <div>Số tài khoản</div>
                        <div>
                              <input
                                    type="number"
                                    onChange={(event) => setState({
                                          ...state,
                                          validBankNumber: "",
                                          validSubmit: "",
                                          bankAccountNumber: event.currentTarget.value
                                    })}
                                    style={{ paddingLeft: 10, border: 'solid 1px rgba(0, 0, 0, .2)', borderRadius: '10px', height: '40px', width: '100%' }}
                                    className="hide-spinner"
                              />
                              <div style={{ color: "red", marginLeft: 3, fontSize: '14px' }}>{state.validBankNumber}</div>
                        </div>

                  </div>
                  <div className="" style={{ marginTop: 10 }}>
                        <div>Tên người thụ hưởng</div>
                        <div>
                              <input
                                    style={{ paddingLeft: 10, border: 'solid 1px rgba(0, 0, 0, .2)', borderRadius: '10px', height: '40px', width: '100%' }}
                                    onChange={(event) => setState({
                                          ...state,
                                          validBankName: "",
                                          validSubmit: "",
                                          bankAccountName: event.currentTarget.value
                                    })}
                              />
                              <div style={{ color: "red", marginLeft: 3, fontSize: '14px' }}>{state.validBankName}</div>
                        </div>

                  </div>
                  <div className="" style={{ marginTop: 10 }}>
                        <div>Số tiền rút</div>
                        <div>
                              <input
                                    type=""
                                    style={{ paddingLeft: 10, border: 'solid 1px rgba(0, 0, 0, .2)', borderRadius: '10px', height: '40px', width: '100%' }}
                                    className="hide-spinner"
                                    onChange={(event) => {
                                          setState({
                                                ...state,
                                                validMoney: "",
                                                validSubmit: "",
                                                money: event.currentTarget.value.replace(/\./g, '')
                                          })
                                    }}

                                    value={parseFloat(state.money.replace(/\./g, '') === "" ? "0" : state.money.replace(/\./g, '')).toLocaleString('vi-VN')}
                              />
                              <div style={{ color: "red", marginLeft: 3, fontSize: '14px' }}>{state.validMoney}</div>
                        </div>

                  </div>
                  <div className="spacer-single" />
                  <div style={{ color: "red", marginLeft: 3, fontSize: '14px' }}>{state.validSubmit}</div>
                  <ButtonBase
                        style={{ borderRadius: 5, backgroundColor: 'black' }}
                        onClick={() => onSubmit()}
                  > {state.onSubmit}</ButtonBase>
                  {
                        state.onSubmit === "Đang gửi yêu cầu" &&
                        <LinearProgress
                              color='info'
                              style={{ width: '95%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        />
                  }
            </div>

      )
}