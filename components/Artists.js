import {useEffect, useState} from "react";
import useSpotify from "../hooks/useSpotify";
import {useSession} from "next-auth/react";
import {useRecoilValue} from "recoil";
import {artistId} from "../atoms/artistAtom";
import Artist from "./Artist";

const Artists = () => {
    const spotifyApi = useSpotify()
    const {data: session} = useSession()
    const [artist, setArtist] = useState('')
    const artistNumber = useRecoilValue(artistId)
    // console.log(artist)

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
    }, [spotifyApi, session, artistNumber])

    return (
        <>
            <h2 className='text-3xl font-bold text-white mt-5 mb-5'>
                Top result
            </h2>
            <div className='p-5 cursor-pointer bg-[#181818] hover:bg-[#282828] transition-colors duration-300 rounded-lg w-1/3'>
                <Artist artist={artist}/>
            </div>
        </>
    );
};

export default Artists;