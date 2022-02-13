import useSpotify from "../hooks/useSpotify";
import {useSession} from "next-auth/react";
import {useRecoilState} from "recoil";
import {currentTrackIdState, isPlayingState} from "../atoms/songAtom";
import {useCallback, useEffect, useState} from "react";
import useSongInfo from "../hooks/useSongInfo";
import {SwitchHorizontalIcon} from "@heroicons/react/outline";
import {
    FastForwardIcon,
    PauseIcon,
    PlayIcon,
    ReplyIcon,
    RewindIcon,
    VolumeOffIcon,
    VolumeUpIcon
} from "@heroicons/react/solid";
import {debounce} from "lodash";

const Player = () => {
    const spotifyApi = useSpotify()
    const {data: session, status} = useSession()
    const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState)
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)
    const [volume, setVolume] = useState([10])
    const songInfo = useSongInfo()

    const fetchCurrentSong = () => {
        if (!songInfo) {
            spotifyApi.getMyCurrentPlayingTrack()
                .then(data => {
                    // console.log('now playing', data.body?.item)
                    setCurrentTrackId(data.body?.item?.id)

                    spotifyApi.getMyCurrentPlaybackState().then((data) => {
                        setIsPlaying(data.body?.is_playing)
                    })
                })
        }
    }

    const handlePlayPause = () => {
        spotifyApi.getMyCurrentPlaybackState().then((data) => {
            if (data.body.is_playing) {
                spotifyApi.pause()
                setIsPlaying(false)
            } else {
                spotifyApi.play()
                setIsPlaying(true)
            }
        })
    }

    useEffect(() => {
        if (spotifyApi.getAccessToken() && !currentTrackId) {
            fetchCurrentSong()
            setVolume(10)
        }
    }, [currentTrackIdState, spotifyApi, session])

    useEffect(() => {
        if (volume > 0 && volume < 100) {
            debouncedAdjustVolume(volume)
        }
    }, [volume])

    const debouncedAdjustVolume = useCallback(
        debounce((volume) => {
            spotifyApi.setVolume(volume).catch((err) => {
            })
        }, 500),
        []
    )

    return (
        <div className="h-24 bg-gradient-to-b from-black to-gray-900
        text-white grid grid-cols-3 text-xs md:text-base px-2 md:px-8"
        >
            <div className='flex items-center space-x-4'>
                <img className='hidden md:inline h-10 w-10 '
                     src={songInfo?.album.images?.[0]?.url} alt=""/>
                <div>
                    <h3>{songInfo?.name}</h3>
                    <p>{songInfo?.artists?.[0]?.name}</p>
                </div>
            </div>
            <div className="flex items-center justify-evenly">
                <SwitchHorizontalIcon className="button"/>
                <RewindIcon className="button"/>
                {isPlaying ? (
                    <PauseIcon onClick={handlePlayPause} className="button w-10 h-10"/>
                ) : (
                    <PlayIcon onClick={handlePlayPause} className="button w-10 h-10"/>
                )}
                <FastForwardIcon className="button"/>
                <ReplyIcon className="button"/>
            </div>
            <div className="flex items-center space-x-3 md:space-x-4 justify-end">
                <VolumeOffIcon onClick={() => volume > 0 && setVolume(volume - 10)}
                               className="button"/>
                <input className="w-14 md:w-28"
                       type="range"
                       value={volume}
                       onChange={e => setVolume(Number(e.target.value))}
                       min={0}
                       max={100}
                />
                <VolumeUpIcon onClick={() => volume < 100 && setVolume(volume + 10)}
                              className="button"/>
            </div>
        </div>
    );
};

export default Player;