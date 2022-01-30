import Layout from "../layouts/Layout";
import HeaderCenter from "../components/HeaderCenter";

const Episodes = () => {
    const images = ''
    return (
        <Layout title='Episodes'>
            <div className="flex-grow h-screen overflow-y-scroll scrollbar-hide">
                <HeaderCenter title='Your Episodes'
                              colors='from-teal-500'
                              images={images}
                />
            </div>
        </Layout>
    );
};

export default Episodes;