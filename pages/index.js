import Center from "../components/Center";
import {getSession} from "next-auth/react";
import Layout from "../layouts/Layout";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Spotify - Web Player</title>
            </Head>
            <Layout>
                <Center/>
            </Layout>
        </>

    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context)

    return {
        props: {
            session
        }
    }
}
