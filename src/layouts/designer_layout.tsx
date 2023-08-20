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

interface LayoutProps {
      children: React.ReactNode
      is_no_footer?: boolean
      type_class?: string
      is_login: boolean
}
const DesignerLayout: React.FC<LayoutProps> = ({ children, is_no_footer = false, type_class = 'no-bottom', is_login = false }) => {



      // const isLoad = isLoadCategory || isLoadInstagram || isLoadPost || isLoadTag

      useEffect(() => {
            LoadSyncJs()
      }, [])
      return (
            <>
                  {is_login ?
                        <div id="wrapper">
                              <div className={type_class} id="">
                                    <div id="top" />
                                    {children}
                              </div>
                              <a href="#" id="back-to-top" />

                        </div> :
                        <div id="wrapper">
                              <Header is_designer={true} />
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