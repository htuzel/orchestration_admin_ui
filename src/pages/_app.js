import '@/styles/globals.scss'
import {Provider} from "react-redux";
import configureStore from './../redux/store';
import ProtectedLayout from "@/layouts/protectedLayout";

const store = configureStore()

export default function MyApp({Component, pageProps}) {
    const Layout = Component.getLayout || ((page) => <ProtectedLayout>{page}</ProtectedLayout>)

    return <Provider store={store}>
        {Layout(<Component {...pageProps} />)}
    </Provider>
}