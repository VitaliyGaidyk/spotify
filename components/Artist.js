const Artist = ({artist}) => {
    return (
        <>
            {
                artist.length < 1 ?
                    <img className='rounded-full w-44 h-44 hidden' alt=""/>
                    :
                    <img className='rounded-full w-44 h-44' src={artist.images[0]?.url} alt=""/>
            }
            <p className='text-white text-3xl font-bold mt-3'>
                {artist.name}
            </p>
            <span className='text-white uppercase'>
                {artist.type}
            </span>
        </>
    );
};

export default Artist;