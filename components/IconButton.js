import
{
    HeartIcon,
    HomeIcon,
    LibraryIcon,
    PlusCircleIcon,
    RssIcon,
    SearchIcon
} from "@heroicons/react/outline";
import {signOut} from "next-auth/react";
import Link from 'next/link'

const IconButton = ({id}) => {
    switch (id) {
        case 'home':
            return (
                <Link href='/'>
                    <button className="flex items-center space-x-2 hover:text-white">
                        <HomeIcon className="h-5 w-5"/>
                        <p>Home</p>
                    </button>
                </Link>
            )
        case 'search':
            return (
                <Link href="/search">
                    <button className="flex items-center space-x-2 hover:text-white">
                        <SearchIcon className="h-5 w-5"/>
                        <p>Search</p>
                    </button>
                </Link>
            )
        case 'library':
            return (
                <Link href="/library">
                    <button className="flex items-center space-x-2 hover:text-white">
                        <LibraryIcon className="h-5 w-5"/>
                        <p>library</p>
                    </button>
                </Link>

            )
        case 'playlist':
            return (
                <button className="flex items-center space-x-2 hover:text-white">
                    <PlusCircleIcon className="h-5 w-5"/>
                    <p>Create Playlist</p>
                </button>
            )
        case 'heart':
            return (
                <Link href="/tracks">
                    <button className="flex items-center space-x-2 hover:text-white">
                        <HeartIcon className="h-5 w-5"/>
                        <p>Liked Songs</p>
                    </button>
                </Link>
            )
        case 'rss':
            return (
                <Link href="/episodes">
                    <button className="flex items-center space-x-2 hover:text-white">
                        <RssIcon className="h-5 w-5"/>
                        <p>Episodes</p>
                    </button>
                </Link>

            )
        case 'logout':
            return (
                <button onClick={() => signOut()} className="flex items-center space-x-2 hover:text-white">
                    <HomeIcon className="h-5 w-5"/>
                    <p>Log out</p>
                </button>
            )
        case 'form-search':
            return (
                <svg role="img" height="24" width="24" className='absolute inset-y-8 left-2 flex items-center'
                     aria-hidden="true" viewBox="0 0 24 24">
                    <path
                        d="M16.387 16.623A8.47 8.47 0 0019 10.5a8.5 8.5 0 10-8.5 8.5 8.454 8.454 0 005.125-1.73l4.401 5.153.76-.649-4.399-5.151zM10.5 18C6.364 18 3 14.636 3 10.5S6.364 3 10.5 3 18 6.364 18 10.5 14.636 18 10.5 18z">
                    </path>
                </svg>
            )
        default:
            return null;
    }
};

export default IconButton;