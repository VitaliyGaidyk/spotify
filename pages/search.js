import Layout from "../layouts/Layout";
import Form from "../components/Form";
import Artists from "../components/Artists";

const Search = () => {

    return (
        <>
            <Layout title='Search'>
                <div className='flex flex-col w-full'>
                    <Form/>
                    <Artists/>
                </div>
            </Layout>
        </>
    );
};

export default Search;