import useSpotify from "./useSpotify";
import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";

const usePlaylist = () => {
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

    return playlists
};

export default usePlaylist;