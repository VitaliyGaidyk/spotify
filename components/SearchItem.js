
const SearchItem = ({searchItems, index}) => {
    return (
        <div>
            <div className='text-white w-[384px] h-[220px]'>
                <img className="w-full h-auto rounded-md"
                     src={searchItems.album.images[0].url} alt=""/>
            </div>
        </div>
    );
};

export default SearchItem;