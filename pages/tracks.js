import Layout from "../layouts/Layout";
import HeaderCenter from "../components/HeaderCenter";
import useSpotify from "../hooks/useSpotify";
import {useSession} from "next-auth/react";
import {useRecoilState, useRecoilValue} from "recoil";
import {trackState} from "../atoms/trackAtom";
import {useEffect} from "react";
import Track from "../components/Track";
import Line from "../components/Line";

const LikedSongs = () => {
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

    const trackList = useRecoilValue(trackState)

    return (
        <Layout title='Tracks'>
            <div className='flex-grow h-screen overflow-y-scroll scrollbar-hide'>
                <HeaderCenter/>
                <div className='grid grid-cols-4 grid-rows-2 text-gray-500  pl-5 pr-10'>
                        <span  className='col-end-1'>#</span>
                        <p className='ml-5'>Title</p>
                        <p className='col-start-3'>Album</p>
                        <p className='text-right'>Time</p>
                </div>
                {trackList?.items.map((track, index) => (
                    <Track key={index} track={track} order={index}/>
                ))}
            </div>
        </Layout>
    );
};

export default LikedSongs;