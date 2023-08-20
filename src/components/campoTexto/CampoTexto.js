const CampoTexto = ({ title, placeholder, required, setInput, value }) => {
    return (
        <div className="my-4 sm:my-6 mx-0 font-['Montserrat']">
            <label className='text-base sm:text-lg font-semibold block mb-2'>
                {title}:
            </label>
            <input
                required={required}
                className='shadow-custom text-base w-full py-4 px-2 md:py-7 md:px-5 outline-main rounded placeholder:text-xs md:placeholder:text-base'
                type='text'
                placeholder={placeholder}
                onChange={(e) => setInput(e.target.value)}
                value={value}
            />
        </div>
    );
};

export default CampoTexto;
