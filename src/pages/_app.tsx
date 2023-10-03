import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import type { AppProps } from 'next/app'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { RootState, store } from '../store/store'
import React, { useEffect } from 'react'
import { designerAction } from '@/store/designer/designerSlice'
import { InitState } from '@/components/initState/initState'
import { LoadSyncJs } from '@/ultis/load-sync-js'

function MyApp({ Component, pageProps }: AppProps) {
    return (

        <ThemeProvider theme={AppTheme} >
            <Provider store={store}>
                <InitState />
                <CssBaseline />
                <Component {...pageProps} />

            </Provider>
        </ThemeProvider>



    )
}

export default MyApp


export const AppTheme = createTheme({
    spacing: 12,

    typography: {
        h1: {
            fontFamily: "Lato",
            fontWeight: 900,
            fontSize: "48px",
            lineHeight: "58px",
            color: "#000000",
        },
        h2: {
            fontFamily: "Lato",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "29px",
            color: "#000000",
        },
        h3: {
            fontFamily: "Lato",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "29px",
            color: "#000000",
        },
        h4: {
            fontFamily: "Lato",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "14px",
            color: "#000000",
        },
        body1: {
            fontFamily: "Lato",
            fontSize: "18px",
            lineHeight: "24px",
            letterSpacing: "-0.01em",
            color: "#494949",
        },
        body2: {
            fontFamily: "Lato",
            fontSize: "18px",
            lineHeight: "24px",
            color: "#494949",
        },
        caption: {
            fontFamily: "Lato",
            fontSize: "18px",
            fontStyle: "italic",
            color: "gray",
        },
    },
    palette: {
        primary: {
            main: "#86a0c1",
            contrastText: "#fff",
        },
        secondary: {
            main: "#EF1515",
            contrastText: "#fff",
        }
    },
    components: {
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    minHeight: '30px',
                    backgroundColor: "",
                    color: 'white',
                    minWidth: '100%',

                    lineHeight: '1.2em',
                    textAlign: 'center',
                    outline: '0',
                    fontWeight: '800',
                    fontSize: '14px'
                },
            }

        },
    }
    // overrides: {
    //     MuiContainer: {
    //         maxWidthLg: {
    //             maxWidth: "1620px !important"
    //         }
    //         // maxWidthLg: {
    //         //     // maxWidth: "1420px !important",
    //         //     minWidth: "1200px !important",
    //         //     paddingLeft: 200,
    //         //     paddingRight: 200
    //         // },
    //     },
    //     MuiButton: {
    //         root: {
    //             textTransform: "none",
    //             fontFamily: "Lato",
    //             fontSize: "18px",
    //             lineHeight: "24px",
    //         },
    //     },
    //     MuiInput: {
    //         input: {
    //             paddingTop: 6,
    //             paddingBottom: 6,
    //             paddingLeft: 6,
    //             margin: 2,
    //         },
    //     },
    //     MuiSelect: {
    //         outlined: {
    //             fontWeight: "bold",
    //             padding: 0,
    //             paddingLeft: 12,
    //             paddingTop: 6,
    //             paddingBottom: 6,
    //             paddingRight: 0,
    //             backgroundColor: "white"
    //         },
    //     },
    //     MuiOutlinedInput: {
    //         root: {
    //             borderRadius: 8,
    //         },
    //     },
    //     MuiPaper: {
    //         root: {
    //             backgroundColor: "#f4f4f4"
    //         }
    //     },
    //     MuiCardContent: {
    //         root: {
    //             padding: 24,
    //         }
    //     }
    // },
});
