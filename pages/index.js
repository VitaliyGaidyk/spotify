import Center from "../components/Center";
import {getSession} from "next-auth/react";
import Layout from "../layouts/Layout";

export default function Home() {
    return (
            <Layout title={'Web Player'}>
                <Center/>
            </Layout>
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
