import Link from 'next/link'
import SidebarButton from "../components/SidebarButton";

const ErrorPage = () => {
    return (
        <>
            <head>
                <title>Page not found</title>
            </head>
            <div>
                <SidebarButton id='404'/>
                <h1>Page not found</h1>
                <p>We can’t seem to find the page you are looking for.</p>
            </div>
            <div>
                <Link href='/'>
                    <button >
                        Home
                    </button>
                </Link>
                <Link href="https://support.spotify.com/us/">
                    Help
                </Link>
            </div>
        </>
    );
};

export default ErrorPage;