const MiOrg = ({ showHideForm }) => {
    return (
        <section className='mt-8 sm:mt-10 md:mt-12 mx-auto max-w-[1440px] relative w-full flex justify-center items-center'>
            <h3 className='text-main md:text-[40px] text-[32px] border-b-solid border-b-main border-b-2 pb-[10px] mb-8'>
                Mi organizacíon
            </h3>
            <img
                onClick={showHideForm}
                className='cursor-pointer absolute md:right-[9%] right-[3px] top-[5px] w-14 lg:w-[80px] lg:top-0'
                src='/img/add.png'
                alt='add'
            />
        </section>
    );
};

export default MiOrg;
