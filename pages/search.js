import Layout from "../layouts/Layout";
import Form from "../components/Form";
import {useRecoilValue} from "recoil";
import {formIdState, formState} from "../atoms/formAtom";
import TopGenres from "../components/TopGenres";

const Search = () => {
    const state = useRecoilValue(formState)
    const id = useRecoilValue(formIdState)
    console.log(state)
    // console.log(id)

    return (
        <>
            <Layout title='Search'>
                <div className='flex flex-col w-full'>
                    <Form/>
                    <TopGenres/>
                </div>
            </Layout>
        </>
    );
};

export default Search;