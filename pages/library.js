import Layout from "../layouts/Layout";
import usePlaylist from "../hooks/usePlaylist";
import {useRecoilState} from "recoil";
import {playlistIdState} from "../atoms/playlistAtom";

const Library = () => {
    const [playlistsId, setPlaylistsId] = useRecoilState(playlistIdState)
    const playlists = usePlaylist()

    return (
        <Layout title='Library'>
            <div className='flex flex-wrap pt-36'>
                {playlists.map((playlist) => (
                        <div className="p-3 cursor-pointer bg-[#181818]
                        hover:bg-[#282828] transition-colors duration-300
                        ml-2 mr-2 max-h-[300px] rounded-lg"
                             key={playlist.id}
                             onClick={() => setPlaylistsId(playlist.id)}
                        >
                            <img
                                className='h-44 w-44'
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
        </Layout>
    );
};

export default Library;