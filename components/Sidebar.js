import IconButton from "./IconButton";
import Playlist from "./Playlist";
import Line from "./Line";
import Logo from "./Logo";
import usePlaylist from "../hooks/usePlaylist";

const Sidebar = () => {
    const playlist = usePlaylist()

    return (
        <div className='text-gray-500 p-5 text-xs lg:text-sm border-r border-gray-900
            overflow-y-scroll scrollbar-hide h-screen sm:max-w-[12rem] lg:w-1/3 md:w-1/3
            hidden md:inline-flex pb-36'
        >
            <div className="space-y-4">
                <div className='mb-8'>
                    <Logo id="logo"/>
                </div>
                <IconButton id="home"/>
                <IconButton id="search"/>
                <IconButton id="library"/>
                <Line/>
                <IconButton id="playlist"/>
                <IconButton id="heart"/>
                <IconButton id="rss"/>
                <Line/>
                <Playlist playlists={playlist}/>
            </div>
        </div>
    );
};

export default Sidebar;