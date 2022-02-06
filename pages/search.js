import Layout from "../layouts/Layout";
import Form from "../components/Form";
import TopGenres from "../components/TopGenres";
import SearchItems from "../components/SearchItems";

const Search = () => {
    // const id = useRecoilValue(formIdState)
    // console.log(state)
    // console.log(id)

    return (
        <>
            <Layout title='Search'>
                <div className='flex flex-col w-full'>
                    <Form/>
                    <TopGenres/>
                    <SearchItems/>
                </div>
            </Layout>
        </>
    );
};

export default Search;