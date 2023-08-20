import { useEffect, useState } from "react";
import Boton from "../boton/Boton";
import CampoTexto from "../campoTexto/CampoTexto";
import ListaOpciones from "../listaOpciones/ListaOpciones";
import { FcPrevious } from "react-icons/fc";
import { TwitterPicker } from "react-color";
import ModalSuccess from "../modal/ModalSuccess";

const FormularioColaborador = ({
    registerColaborador,
    registrarEquipo,
    equipos,
}) => {
    const [formData, setFormData] = useState({
        name: "",
        puesto: "",
        foto: "",
        equipo: "",
    });

    const [formEquipo, setFormEquipo] = useState({
        titulo: "",
        colorPrimario: "#22194D",
    });

    // mostrat formularios
    const [formVisible, setFormVisible] = useState(false);
    const [display, setDisplay] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        registerColaborador(formData);
        // reset form
        setFormData({
            name: "",
            puesto: "",
            foto: "",
            equipo: "",
        });

        // MODAL SUCCESS
        setModalSuccesColaborador(true);
    };

    const handleInputChange = (fieldName, value) => {
        setFormData(() => ({
            ...formData,
            [fieldName]: value,
        }));
    };

    const handleSubmitEquipo = (e) => {
        e.preventDefault();
        registrarEquipo(formEquipo);

        // reset fromEquipo
        setFormEquipo({
            titulo: "",
            colorPrimario: "",
        });
        // TODO MODAL
        setModalSuccesEquipo(true);
    };

    const handleInputChangeEquipo = (fieldName, value) => {
        setFormEquipo(() => ({
            ...formEquipo,
            [fieldName]: value,
        }));
    };

    const handleFormularioEquipo = () => {
        setFormVisible(!formVisible);
        setTimeout(() => {
            setDisplay(!display);
        }, 500);
    };

    const [modalSuccesColaborador, setModalSuccesColaborador] = useState(false);
    const [modalSuccesEquipo, setModalSuccesEquipo] = useState(false);

    useEffect(() => {
        if (modalSuccesEquipo) {
            const timer = setTimeout(() => {
                setModalSuccesEquipo(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [modalSuccesEquipo]);

    useEffect(() => {
        if (modalSuccesColaborador) {
            const timer = setTimeout(() => {
                setModalSuccesColaborador(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [modalSuccesColaborador]);

    const colorEquipo = (color) => {
        setFormEquipo({ ...formEquipo, colorPrimario: color });
    };

    return (
        <section className='max-w-[1440px] flex justify-center mx-auto my-4 sm:my-8 md:my-16 w-full'>
            <form
                onSubmit={handleSubmit}
                className={`w-[90%] md:w-[77%] bg-[#f7f7f7] shadow rounded-2xl px-4 lg:px-[95px]  py-6 sm:py-9 relative ${
                    display && "hidden"
                } ${
                    formVisible
                        ? "opacity-0 transition-opacity duration-500"
                        : " duration-500 transition-opacity "
                }`}
            >
                <span
                    className='absolute right-3 md:right-6 rotate-180 cursor-pointer'
                    onClick={handleFormularioEquipo}
                >
                    <FcPrevious size={30} />
                </span>
                <h2 className='lg:text-3xl md:text-2xl text-xl font-semibold md:font-normal font-[Montserrat] text-main md:font-[Prata] md:text-bl md:mb-10 mb-4'>
                    Crear colaborador
                </h2>
                <CampoTexto
                    title='Nombre'
                    placeholder='Ingresar nombre'
                    required
                    value={formData.name}
                    setInput={(value) => handleInputChange("name", value)}
                />
                <CampoTexto
                    title='Puesto'
                    placeholder='Ingresar puesto'
                    required
                    setInput={(value) => handleInputChange("puesto", value)}
                    value={formData.puesto}
                />
                <CampoTexto
                    title='Foto'
                    placeholder='Ingresar enlace de foto'
                    required
                    setInput={(value) => handleInputChange("foto", value)}
                    value={formData.foto}
                />
                <ListaOpciones
                    equipos={equipos}
                    value={formData.equipo}
                    setInput={(value) => handleInputChange("equipo", value)}
                />
                <Boton>Crear</Boton>
            </form>
            <form
                onSubmit={handleSubmitEquipo}
                className={`w-[90%] md:w-[77%] bg-[#f7f7f7] shadow rounded-2xl px-4 lg:px-[95px]  py-6 sm:py-9 relative ${
                    !display && "hidden"
                } ${
                    !formVisible
                        ? "opacity-0 transition-opacity duration-500"
                        : "transition-opacity duration-500"
                }`}
            >
                <span
                    className='absolute right-6 rotate-180 cursor-pointer'
                    onClick={handleFormularioEquipo}
                >
                    <FcPrevious size={30} />
                </span>
                <h2 className='lg:text-3xl md:text-2xl text-xl font-semibold md:font-normal font-[Montserrat] text-main md:font-[Prata] md:text-bl md:mb-10 mb-4'>
                    Crear equipo.
                </h2>
                <CampoTexto
                    title='Titulo'
                    placeholder='Ingresar titulo'
                    required
                    value={formEquipo.titulo}
                    setInput={(value) =>
                        handleInputChangeEquipo("titulo", value)
                    }
                />
                <CampoTexto
                    title='Color'
                    placeholder='Ingresar color en Hex'
                    required
                    setInput={(value) =>
                        handleInputChangeEquipo("colorPrimario", value)
                    }
                    value={formEquipo.colorPrimario}
                />
                <span className='mt-7 mb-4 block'>
                    <TwitterPicker
                        color={formEquipo.colorPrimario}
                        onChangeComplete={(color) => colorEquipo(color.hex)}
                    />
                </span>
                <Boton>Crear</Boton>
            </form>
            {modalSuccesEquipo && <ModalSuccess titulo='Equipo' />}
            {modalSuccesColaborador && <ModalSuccess titulo='Colaborador' />}
        </section>
    );
};

export default FormularioColaborador;
