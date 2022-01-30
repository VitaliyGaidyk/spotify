import Layout from "../layouts/Layout";
import usePlaylist from "../hooks/usePlaylist";
import {useRecoilState} from "recoil";
import {playlistIdState, playlistState} from "../atoms/playlistAtom";
import {useEffect} from "react";
import useSpotify from "../hooks/useSpotify";
import Songs from "../components/Songs";
import HeaderSongs from "../components/HeaderSongs";

const Library = () => {
    const spotifyApi = useSpotify()
    const [playlistsId, setPlaylistsId] = useRecoilState(playlistIdState)
    const [playlist, setPlaylist] = useRecoilState(playlistState)
    const playlists = usePlaylist()

    useEffect(() => {
        spotifyApi.getPlaylist(playlistsId)
            .then((data) => {
                setPlaylist(data.body)
            })
            .catch(err => console.log('some error', err))
    }, [spotifyApi, playlistsId])

    return (
        <Layout title='Library'>
            <div className={'flex-grow h-screen overflow-y-scroll scrollbar-hide'}>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 p-2'>
                    {playlists.map((playlist) => (
                        <div className="p-3 cursor-pointer bg-[#181818] md:text-sm
                        hover:bg-[#282828] transition-colors duration-300 rounded-lg"
                             key={playlist.id}
                             onClick={() => setPlaylistsId(playlist.id)}
                        >
                            <img
                                className='w-45'
                                src={playlist.images?.[0]?.url} alt=""/>
                            <p className='text-white mt-4 mb-2'>
                                {playlist.name}
                            </p>
                            <p className='text-gray-500'>
                                {playlist.owner.display_name}
                            </p>
                        </div>
                    ))}
                </div>
                <HeaderSongs/>
                <Songs/>
            </div>
        </Layout>
    );
};

export default Library;