import useSpotify from "./useSpotify";
import {useSession} from "next-auth/react";
import {useRecoilState} from "recoil";
import {trackState} from "../atoms/trackAtom";
import {useEffect} from "react";

const UseLikedSongs = () => {
    const spotifyApi = useSpotify()
    const {data: session} = useSession()
    const [likedSongs, setLikedSongs] = useRecoilState(trackState)

    useEffect(() => {
        if (spotifyApi.getAccessToken()) {
            spotifyApi.getMySavedTracks()
                .then((data) => {
                    setLikedSongs(data.body)
                })
                .catch(err => console.log('some error', err))
        }
    }, [session, spotifyApi])

    return likedSongs
};

export default UseLikedSongs;