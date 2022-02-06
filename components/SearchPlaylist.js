const SearchPlaylist = ({playlist}) => {

    return (
        <div className='text-white w-[384px] h-[220px] '>
            <img className="w-full h-auto rounded-md"
                 src={playlist.images[0].url} alt=""/>
        </div>
    );
};

export default SearchPlaylist;