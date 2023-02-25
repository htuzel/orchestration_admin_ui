import '@/styles/globals.scss'
import {Provider} from "react-redux";
import configureStore from './../redux/store';

const store = configureStore()

export default function App({Component, pageProps}) {
    return <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
}
