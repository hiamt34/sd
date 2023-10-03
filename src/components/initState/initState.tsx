
import { ApiService } from "@/services/api/http"
import { Designer } from "@/services/api/inteface/designer.interface"
import { designerAction } from "@/store/designer/designerSlice"
import { RootState } from "@/store/store"
import { AxiosResponse } from "axios"
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"


export const InitState = () => {
    const designerState = useSelector((state: RootState) => state.designer)
    const dispatch = useDispatch()
    useEffect(() => {
        ApiService.setAuthorization(designerState.token)
        Promise.all([ApiService.getDesigner().then((response1: AxiosResponse<{ payload: Designer }>) => {
            if (response1.status === 200) {
                ApiService.getProduct({ page: 1, pageSize: 20, filter: [`user_id=${response1.data.payload.id}`] }).then((response2) => {
                    dispatch(designerAction.loginInit({ designer: response1.data.payload, categories: undefined, product: response2?.data?.payload?.data }))
                })

                return
            }
            dispatch(designerAction.loginExpire())
        }),
        ApiService.getCategory().then((response) => {
            if (response.data.status === 200) {
                dispatch(designerAction.loginInit({ designer: undefined, categories: response.data.payload.map((x) => x.name), product: undefined }))
            }
        }),

        ])


        setTimeout(() => {
            dispatch(designerAction.loadingApp())
        }, 1000);


    }, [])
    return (
        <></>
    )
}
