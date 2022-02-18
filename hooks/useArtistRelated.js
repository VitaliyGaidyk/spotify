import {useRecoilValue} from "recoil";
import {artistId} from "../atoms/artistAtom";
import {useEffect, useState} from "react";
import useSpotify from "./useSpotify";

const UseArtistRelated = () => {
    const spotifyApi = useSpotify()
    const artistNumber = useRecoilValue(artistId)
    const [artistRelated, setArtistRelated] = useState('')

    useEffect(() => {
        if (spotifyApi.getAccessToken()) {
            if (artistNumber) {
                spotifyApi.getArtistAlbums('')
                    .then(
                        (data) => {
                            console.log(data.body)
                        },
                        (err) => {
                            console.log(err)
                        }
                    )
            }
        }
    }, [spotifyApi])
    return artistRelated
};

export default UseArtistRelated;