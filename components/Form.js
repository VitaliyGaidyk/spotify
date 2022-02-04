import {useEffect, useState} from "react";
import IconButton from "./IconButton";
import useSpotify from "../hooks/useSpotify";
import {useRecoilState} from "recoil";
import {formIdState, formState} from "../atoms/formAtom";

const Form = () => {
    const spotifyApi = useSpotify()
    const [search, setSearch] = useRecoilState(formState)
    const [value, setValue] = useRecoilState(formIdState)
    // console.log(search)

    useEffect(() => {
        if (spotifyApi.getAccessToken()) {
            spotifyApi.searchTracks(value, {limit: 10})
                .then(
                    (data) => {
                        setSearch(data.body)
                    },
                    (err) => {
                        console.error(err)
                    }
                )
        }
    }, [value])

    return (
        <form className='relative pt-6'>
            <IconButton id={'form-search'}/>
            <input className='h-10 w-[370px] rounded-full focus:outline-none py-3 pl-9 pr-3'
                   placeholder="Artists, song, or podcasts..."
                   type="text"
                   value={value}
                   onChange={event => setValue(event.target.value)}
            />
        </form>
    );
};

export default Form;