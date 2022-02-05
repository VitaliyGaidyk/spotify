const SearchPlaylist = ({playlist}) => {

    return (
        <div className='text-white'>
            <img className="w-full h-full rounded-md"
                 src={playlist.images[0].url} alt=""/>
        </div>
    );
};

export default SearchPlaylist;