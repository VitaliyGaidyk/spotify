import Center from "../components/Center";
import {getSession} from "next-auth/react";

export default function Home() {
    return (
            <Center/>
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
