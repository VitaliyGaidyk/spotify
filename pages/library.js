import Layout from "../layouts/Layout";
import usePlaylist from "../hooks/usePlaylist";
import {useRecoilState} from "recoil";
import {playlistIdState} from "../atoms/playlistAtom";

const Library = () => {
    const [playlistsId, setPlaylistsId] = useRecoilState(playlistIdState)
    const playlists = usePlaylist()

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

            </div>
        </Layout>
    );
};

export default Library;