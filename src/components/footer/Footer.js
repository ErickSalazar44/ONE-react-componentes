const Footer = () => {
    return (
        <footer
            style={{ backgroundImage: "url('/img/footer.png')" }}
            className='lg:h-[213px] w-full h-32 bg-cover'
        >
            <div className='flex justify-between max-w-[1108px] mx-auto items-center h-full xl:p-0 p-4'>
                <div className='flex items-center xl:gap-11 gap-5'>
                    <a href='https://github.com/ErickSalazar44' target='blank'>
                        <img src='/img/git-hub.png' alt='git-hub-logo' />
                    </a>
                    <a
                        href='https://www.instagram.com/erickcsalazar22/'
                        target='blank'
                    >
                        <img src='/img/instagram.png' alt='instragam-logo' />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/erick-josep-salazar-8b8b6024b/'
                        target='blank'
                    >
                        <img src='/img/linkedin.png' alt='instragam-logo' />
                    </a>
                </div>
                <img
                    className='w-12 md:w-16 lg:w-auto'
                    src='/img/logo.png'
                    alt='org'
                />
                <strong className='text-white font-[Montserrat] font-medium md:text-base text-xs'>
                    Made with ❤️ by Erick
                </strong>
            </div>
        </footer>
    );
};

export default Footer;
