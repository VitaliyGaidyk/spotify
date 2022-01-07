import
{
    HeartIcon, HomeIcon, LibraryIcon, PlusCircleIcon, RssIcon, SearchIcon
} from "@heroicons/react/outline";
import {signOut} from "next-auth/react";

const SidebarButton = ({id}) => {
    switch (id) {
        case 'home':
            return (
                <button className="flex items-center space-x-2 hover:text-white">
                    <HomeIcon className="h-5 w-5"/>
                    <p>Home</p>
                </button>
            )
        case 'search':
            return (
                <button className="flex items-center space-x-2 hover:text-white">
                    <SearchIcon className="h-5 w-5"/>
                    <p>Search</p>
                </button>
            )
        case 'library':
            return (
                <button className="flex items-center space-x-2 hover:text-white">
                    <LibraryIcon className="h-5 w-5"/>
                    <p>Your library</p>
                </button>
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
                <button className="flex items-center space-x-2 hover:text-white">
                    <HeartIcon className="h-5 w-5"/>
                    <p>Liked Songs</p>
                </button>
            )
        case 'rss':
            return (
                <button className="flex items-center space-x-2 hover:text-white">
                    <RssIcon className="h-5 w-5"/>
                    <p>Your Episodes</p>
                </button>
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

export default SidebarButton;