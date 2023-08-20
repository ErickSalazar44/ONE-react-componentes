const ListaOpciones = ({ value, setInput, equipos }) => {
    return (
        <div className="font-['Montserrat'] my-6">
            <label className='block text-base font-semibold mb-2'>
                Equipos
            </label>
            <select
                style={{ color: value === "" ? "#AFAFAF" : "black" }}
                onChange={(e) => setInput(e.target.value)}
                value={value}
                placeholder='Seleccionar equipo'
                className='w-full py-4 px-2 md:py-7 md:px-5 shadow-custom md:text-base outline-main text-xs'
            >
                <option value={""} disabled defaultValue={""} hidden>
                    Seleccionar equipo
                </option>
                {equipos.map((equipo) => (
                    <option key={equipo.titulo}>{equipo.titulo}</option>
                ))}
            </select>
        </div>
    );
};

export default ListaOpciones;
