
import { designerAction } from "@/store/designer/designerSlice"
import { RootState } from "@/store/store"
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import { useRef } from 'react';
import { ApiService } from "@/services/api/http"
import CircularProgress from '@mui/material/CircularProgress';
import { Button, ButtonBase } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress';
import OtpInput from 'react18-input-otp';
import { AxiosResponse } from "axios"
import { Designer } from "@/services/api/inteface/designer.interface"
import { LoadSyncJs } from "@/ultis/load-sync-js"


export const InitState = () => {
    const designerState = useSelector((state: RootState) => state.designer)
    const dispatch = useDispatch()
    useEffect(() => {
        ApiService.setAuthorization(designerState.token)
        ApiService.getDesigner().then((response: AxiosResponse<{ payload: Designer }>) => {
            if (response.status === 200) {
                console.log(response);

                dispatch(designerAction.loginInit(response.data.payload))
                return
            }
            dispatch(designerAction.loginExpire())

        })
        setTimeout(() => {
            dispatch(designerAction.loadingApp())
        }, 3000);

    }, [])
    return (
        <></>
    )
}
