/* eslint-disable @next/next/no-before-interactive-script-outside-document */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-css-tags */
import Head from 'next/head'
import Script from "next/script"

import React, { useEffect } from 'react'
import { useAppSelector } from '../store/hooks'
import Header from '@/components/head'
import Footer from '@/components/footer'
import { LoadSyncJs } from '@/ultis/load-sync-js'
import { useDispatch, useSelector } from 'react-redux'
import { designerAction } from '@/store/designer/designerSlice'
import { RootState } from '@/store/store'
import { ApiService } from '@/services/api/http'
import { AxiosResponse } from 'axios'
import { Designer } from '@/services/api/inteface/designer.interface'

interface LayoutProps {
      children: React.ReactNode
      is_no_footer?: boolean
      type_class?: string
      is_login: boolean
}
const DesignerLayout: React.FC<LayoutProps> = ({ children, is_no_footer = false, type_class = 'no-bottom', is_login = false }) => {

      useEffect(() => {
            LoadSyncJs()
      }, [])
      return (
            <>
                  {is_login ?
                        <div id="wrapper">
                              <Header is_designer={true} is_login={true} />
                              <div className={type_class} id="content">
                                    <div id="top" />
                                    {children}
                              </div>
                              <a href="#" id="back-to-top" />

                        </div> :
                        <div id="wrapper">
                              <Header is_designer={true} is_login={false} />
                              <div className={type_class} id="content">
                                    <div id="top" />
                                    {children}
                              </div>
                              <a href="#" id="back-to-top" />


                        </div>
                  }

            </>
      )
}


export default DesignerLayout