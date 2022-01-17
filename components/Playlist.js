import {playlistIdState} from "../atoms/playlistAtom";
import {useRecoilState} from "recoil";

const Playlist = ({playlists}) => {
    const [playlistsId, setPlaylistsId] = useRecoilState(playlistIdState)

    return (
        <>
            {playlists.map((playlist) => (
                <p key={playlist.id}
                   onClick={() => setPlaylistsId(playlist.id)}
                   className="cursor-pointer hover:text-white">
                    {playlist.name}
                </p>
            ))}
        </>
    );
};

export default Playlist;