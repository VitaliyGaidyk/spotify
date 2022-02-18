import Artist from "./Artist";
import useArtist from "../hooks/useArtist";
import UseArtistRelated from "../hooks/useArtistRelated";

const Artists = () => {
    const artist = useArtist()
    const useArtistRelated = UseArtistRelated()

    return (
        <>
            <h2 className='text-3xl font-bold text-white mt-5 mb-5'>
                Top results
            </h2>
            <div className={artist.length < 1 ? 'hidden': null}>
                <div className='p-5 cursor-pointer bg-[#181818] hover:bg-[#282828] transition-colors
                                duration-300 rounded-lg w-1/3'>
                    <Artist artist={artist}/>
                </div>
            </div>

        </>
    )
}

export default Artists;