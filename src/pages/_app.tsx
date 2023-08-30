import type { AppProps } from 'next/app'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { RootState, store } from '../store/store'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
