import Line from "./Line";

const HeaderSongs = () => {
    return (
        <>
            <div className='grid grid-cols-4 text-gray-500 py-5 pl-5 pr-7 text-l'>
                <span className='col-end-1'>#</span>
                <p className='ml-5'>Title</p>
                <p className='col-start-3'>Album</p>
                <p className='text-right'>Time</p>
            </div>
            <Line/>
        </>
    );
};

export default HeaderSongs;