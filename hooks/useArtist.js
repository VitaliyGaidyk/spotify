import useSpotify from "./useSpotify";
import {useRecoilValue} from "recoil";
import {artistId} from "../atoms/artistAtom";
import {useEffect, useState} from "react";

const UseArtist = () => {
    const spotifyApi = useSpotify()
    const [artist, setArtist] = useState('')
    const artistNumber = useRecoilValue(artistId)
    console.log(artistNumber)

    useEffect(() => {
        if (spotifyApi.getAccessToken()) {
            if (artistNumber) {
                spotifyApi.getArtist(artistNumber)
                    .then(
                        (data) => {
                            setArtist(data.body)
                        },
                        (err) => {
                            console.log(err)
                        }
                    )
            } else {
                setArtist('')
            }
        }
    }, [spotifyApi,artistNumber])

    return artist
};

export default UseArtist;