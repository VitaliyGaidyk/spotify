import {useRecoilValue} from "recoil";
import {formState} from "../atoms/formAtom";
import SearchItem from "./SearchItem";

const SearchItems = () => {
    const searchItem = useRecoilValue(formState)

    // console.log(searchItem)

    return (
        <div className='grid grid-rows-1 grid-cols-4 gap-10 w-full'>
            {searchItem.tracks?.items.map((searchItems, index) => (
                <SearchItem key={searchItems.id} searchItems={searchItems} index={index}/>
            ))}
        </div>
    );
};

export default SearchItems;