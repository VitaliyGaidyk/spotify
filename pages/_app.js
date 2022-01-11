import '../styles/globals.css'
import {SessionProvider} from "next-auth/react";
import Recoil, {RecoilRoot} from "recoil";
import Layout from "../Layouts/Layout";

function MyApp({Component, pageProps: {session, ...pageProps}}) {
    return (
        <SessionProvider session={session}>
            <RecoilRoot>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </RecoilRoot>
        </SessionProvider>
    )
}

export default MyApp
