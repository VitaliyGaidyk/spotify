import Sidebar from "../components/Sidebar";
import Player from "../components/Player";
import Head from "next/head";

const Layout = ({children, title = 'App'}) => {

    return (
        <>
            <Head>
                <title>Spotify - {title} </title>
            </Head>
            <div className="bg-black h-screen overflow-hidden">
                <main className='flex'>
                    <Sidebar/>
                    {children}
                </main>

                <div className='sticky bottom-0'>
                    <Player/>
                </div>
            </div>
        </>

    );
};
export default Layout