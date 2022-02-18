import Layout from "../layouts/Layout";
import HeaderCenter from "../components/HeaderCenter";
import Track from "../components/Track";
import HeaderSongs from "../components/HeaderSongs";
import useLikedSongs from "../hooks/useLikedSongs";

const LikedSongs = () => {
    const trackList = useLikedSongs()

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