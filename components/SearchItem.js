
const SearchItem = ({ searchItems }) => {
    // console.log(searchItems)
    return (
        <>
            <div className='text-white'>
                {/*<img className="h-44 w-44 rounded-md"*/}
                {/*     src={searchItems.album.images[0].url} alt=""/>*/}
               <p className='text-white'>
                   {/*{searchItems.album.artists[0].name}*/}
               </p>
                <p className='text-white'>
                   {/*{searchItems.album.artists[0].type}*/}
               </p>
            </div>
        </>
    );
};

export default SearchItem;