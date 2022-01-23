import {millisToMinutesAndSeconds} from "../lib/time";
import useSpotify from "../hooks/useSpotify";
import {useRecoilState, useRecoilValue} from "recoil";
import {currentTrackIdState, isPlayingState} from "../atoms/songAtom";

const Track = ({order, track}) => {
    const spotifyApi = useSpotify()
    const [currentIdTrack, setCurrentIdTrack] = useRecoilState(currentTrackIdState)
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)

    const playSong = () => {
        setCurrentIdTrack(track.track.id)
        setIsPlaying(true)
        spotifyApi.play({
            uris: [track.track.uri],
        })
    }

    return (
        <div className='grid grid-cols-2 text-gray-500 py-4 pl-5 pr-7 hover:bg-gray-900'
             onClick={playSong}
        >
            <div className="flex items-center space-x-4 rounded-lg cursor-pointer">
                <p>
                    {order + 1}
                </p>
                <img className="h-10 w-10" src={track?.track.album.images[0].url} alt=""/>
                <div>
                    <p className="w-40">{track?.track?.name}</p>
                </div>
            </div>
            <div className='flex items-center justify-between ml-auto md:ml-0'>
                <p className='w-40 hidden md:inline'>{track?.track?.album.name}</p>
                <p>{millisToMinutesAndSeconds(track?.track?.duration_ms)}</p>
            </div>
        </div>
    );
};

export default Track;