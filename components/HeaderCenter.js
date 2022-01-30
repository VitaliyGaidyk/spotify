import {signOut, useSession} from "next-auth/react";
import {ChevronDownIcon} from "@heroicons/react/outline";
import {useRecoilState, useRecoilValue} from "recoil";
import {useEffect, useState} from "react";
import {trackIdState, trackState} from "../atoms/trackAtom";
import useSpotify from "../hooks/useSpotify";
import {Images} from "./Images";

const HeaderCenter = ({colors, image, title}) => {
    const spotifyApi = useSpotify()
    const {data: session} = useSession()
    const [likedSongs, setLikedSongs] = useRecoilState(trackState)
    const trackId = useRecoilValue(trackIdState)

    useEffect(() => {
        spotifyApi.getMySavedTracks(trackId)
            .then((data) => {
                setLikedSongs(data.body)
            })
            .catch(err => console.log('some error', err))
    }, [spotifyApi, trackId])

    return (
        <>
            <header className="absolute top-5 right-8">
                <div className='flex items-center bg-black
                space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 text-white'
                     onClick={signOut}
                >
                    <img className='rounded-full w-10 h-10' src={session?.user?.image} alt=""/>
                    <h2>{session?.user.name}</h2>
                    <ChevronDownIcon className='w-5 h-5'/>
                </div>
            </header>
            <section className={`flex items-end space-x-7 
                bg-gradient-to-b to-black ${colors} h-80 text-white p-8`}>
                {
                    image ? <img className='h-44 w-44 shadow-2xl'
                                 src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png" alt=""/> :
                        <div className='rounded-lg p-14 bg-[#006450] shadow-lg shadow-black-500/50'>
                            <Images id={'rss'}/>
                        </div>
                }
                <div>
                    <p>Playlist</p>
                    <h1 className='text-2xl mb:text-3xl xl:text-5xl font-bold'>
                        {title}
                    </h1>
                    <p className='mt-3'>
                        {session?.user.name}
                    </p>
                </div>
            </section>
        </>
    );
};

export default HeaderCenter;