import Layout from "../layouts/Layout";
import Form from "../components/Form";
import {useRecoilValue} from "recoil";
import {formIdState, formState} from "../atoms/formAtom";

const Search = () => {
    const state = useRecoilValue(formState)
    const id = useRecoilValue(formIdState)
    console.log(state)
    console.log(id)

    return (
        <>
            <Layout title='Search'>
                <Form/>
            </Layout>
        </>
    );
};

export default Search;