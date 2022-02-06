import {useEffect, useState} from "react";
import useSpotify from "../hooks/useSpotify";
import {useSession} from "next-auth/react";
import Song from "./Song";
import Playlist from "./Playlist";
import SearchPlaylist from "./SearchPlaylist";

const TopGenres = () => {
    const spotifyApi = useSpotify()
    const {data: session, status} = useSession()
    const [playlist, setPlaylist] = useState([])
    // console.log(playlist)

    useEffect(() => {
        if (spotifyApi.getAccessToken()) {
            spotifyApi.getPlaylistsForCategory('party', {
                country: 'UA',
                limit: 4,
                offset: 0
            })
                .then(
                    (data) => {
                        setPlaylist(data.body)
                    },
                    (err) => {
                        console.log(err)
                    }
                )
        }
    }, [spotifyApi, session])

    return (
        <>
             <h2 className='text-xl text-white mt-5 mb-5'>
                 Your top playlists
             </h2>
            <div className='grid grid-rows-1 grid-cols-4 gap-10 w-full'>
                {playlist.playlists?.items.map((playlist, index) => (
                   <SearchPlaylist playlist={playlist} key={playlist.id}/>
                ))}
            </div>
        </>
    );
};

export default TopGenres;