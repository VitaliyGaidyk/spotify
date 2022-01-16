import Link from 'next/link'
import IconButton from "../components/IconButton";

const ErrorPage = () => {
    return (
        <section className='bg-black h-screen overflow-hidden text-white'>
            <head>
                <title>Page not found</title>
            </head>
            <div className='flex flex-col items-center min-h-screen w-full justify-center '>
                <IconButton id='404'/>
                <h1 className='text-5xl	font-bold mt-8 mb-5'>Page not found</h1>
                <p className='mb-4'>We can’t seem to find the page you are looking for.</p>
                <Link href='/'>
                    <button className='padding-button mb-8 rounded-full bg-white text-black text-lg font-bold'>
                        Home
                    </button>
                </Link>
                <Link href="https://support.spotify.com/us/">
                    <button className='font-bold'>
                        Help
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default ErrorPage;