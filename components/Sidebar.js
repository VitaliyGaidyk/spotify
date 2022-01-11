import React, {useEffect, useState} from 'react';
import SidebarButton from "./SidebarButton";
import {useSession} from "next-auth/react";
import useSpotify from "../hooks/useSpotify";
import Playlist from "./Playlist";
import Line from "./Line";
import Logo from "./Logo";

const Sidebar = () => {
    const spotifyApi = useSpotify()
    const {data: session, status} = useSession()
    const [playlists, setPlaylists] = useState([])

    useEffect(() => {
        if (spotifyApi.getAccessToken()) {
            spotifyApi.getUserPlaylists().then((data) => {
                setPlaylists(data.body.items)
            })
        }
    }, [session, spotifyApi])

    return (
        <div className='text-gray-500 p-5 text-xs lg:text-sm border-r border-gray-900
            overflow-y-scroll scrollbar-hide h-screen sm:max-w-[12rem] lg:max-w-[15rem]
            hidden md:inline-flex pb-36'
        >
            <div className="space-y-4">
                <div className='mb-8'>
                    <Logo id="logo"/>
                </div>
                <SidebarButton id="home"/>
                <SidebarButton id="search"/>
                <SidebarButton id="library"/>
                <Line/>
                <SidebarButton id="playlist"/>
                <SidebarButton id="heart"/>
                <SidebarButton id="rss"/>
                <Line/>
                <Playlist playlists={playlists}/>
            </div>
        </div>
    );
};

export default Sidebar;