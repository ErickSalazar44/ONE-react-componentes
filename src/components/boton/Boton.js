const Boton = ({ children }) => {
    return (
        <button
            className="
            px-7 py-3 text-sm
            hover:bg-indigo-400 transition ease-in-out duration-300 shadow-xl hover:shadow-none
            font-['Montserrat'] font-bold rounded-md bg-main md:mt-4 text-white md:px-11 md:py-4 md:text-[20px]
        "
        >
            {children}
        </button>
    );
};

export default Boton;
