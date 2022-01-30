import Layout from "../layouts/Layout";
import HeaderCenter from "../components/HeaderCenter";
import useSpotify from "../hooks/useSpotify";
import {useSession} from "next-auth/react";
import {useRecoilState, useRecoilValue} from "recoil";
import {trackState} from "../atoms/trackAtom";
import {useEffect} from "react";
import Track from "../components/Track";
import HeaderSongs from "../components/HeaderSongs";

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
                <HeaderCenter title='Liked Songs' colors='from-indigo-500' image={true}/>
                <HeaderSongs/>
                {trackList?.items.map((track, index) => (
                    <Track key={track.track.id}
                           track={track}
                           order={index}
                    />
                ))}
            </div>
        </Layout>
    );
};

export default LikedSongs;