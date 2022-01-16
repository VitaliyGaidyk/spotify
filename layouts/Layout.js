import Sidebar from "../components/Sidebar";
import Player from "../components/Player";
import Head from "next/head";

const Layout = ({children, title = 'App'}) => {

    return (
        <div className="bg-black h-screen overflow-hidden">
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="mask-icon" href="../public/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
                <title>Spotify - {title}</title>
            </Head>
            <main className='flex'>
                <Sidebar/>
                {children}
            </main>
            <div className='sticky bottom-0 z-4'>
                <Player/>
            </div>
        </div>
);
};
export default Layout