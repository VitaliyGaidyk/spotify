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
        default:
            return null;
    }
};

export default IconButton;