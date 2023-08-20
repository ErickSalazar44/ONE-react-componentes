import { useState } from "react";
import MiOrg from "./components/MiOrg/MiOrg";
import Header from "./components/banner/Header";
import { Equipo } from "./components/equipo/Equipo";
import Footer from "./components/footer/Footer";
import { v4 as uuidv4 } from "uuid";
import FormularioColaborador from "./components/form/FormularioColaborador";

function App() {
    // estado de visibilidad del formulario
    const [active, setActive] = useState(true);

    // estado para actualizar colaboradores
    const [colaboradores, setColaboradores] = useState([
        {
            id: uuidv4(),
            equipo: "Front End",
            foto: "https://github.com/ErickSalazar44.png",
            name: "Erick Salazar",
            puesto: "Desarrollador Web ",
            fav: true,
        },
        {
            id: uuidv4(),
            equipo: "Front End",
            foto: "https://github.com/ErickSalazar44.png",
            name: "Erick Salazar",
            puesto: "Desarrollador Web ",
            fav: false,
        },
        {
            id: uuidv4(),
            equipo: "Front End",
            foto: "https://github.com/ErickSalazar44.png",
            name: "Erick Salazar",
            puesto: "Desarrollador Web ",
            fav: false,
        },
        {
            id: uuidv4(),
            equipo: "Front End",
            foto: "https://github.com/ErickSalazar44.png",
            name: "Erick Salazar",
            puesto: "Desarrollador Web ",
            fav: false,
        },
    ]);

    // estado para actualizar los equipos y sus propiedades
    const [equipos, setEquipos] = useState([
        {
            id: uuidv4(),
            titulo: "Programación",
            colorPrimario: "#57C278 ",
        },
        {
            id: uuidv4(),
            titulo: "Front End",
            colorPrimario: "#82CFFA ",
        },
        {
            id: uuidv4(),
            titulo: "Data Science",
            colorPrimario: "#A6D157 ",
        },
        {
            id: uuidv4(),
            titulo: "Devops",
            colorPrimario: "#E06B69 ",
        },
        {
            id: uuidv4(),
            titulo: "UX y Diseño",
            colorPrimario: "#DB6EBF ",
        },
        {
            id: uuidv4(),
            titulo: "Móvil",
            colorPrimario: "#FFBA05 ",
        },
        {
            id: uuidv4(),
            titulo: "Innovación y Gestión",
            colorPrimario: "#FF8A29 ",
        },
    ]);

    // mostrar y ocultar el formulario
    const showHideForm = () => {
        setActive(!active);
    };

    // agregar un nuevo colaborador
    const registerColaborador = (colaborador) => {
        colaborador.id = uuidv4();
        setColaboradores([...colaboradores, colaborador]);
    };

    // eliminar colaborador
    const deleteColaborador = (id) => {
        const newColaboradores = colaboradores.filter(
            (colaborador) => colaborador.id !== id
        );
        setColaboradores(newColaboradores);
    };

    // TODO
    const registrarEquipo = (nuevoEquipo) => {
        setEquipos([...equipos, { ...nuevoEquipo, id: uuidv4() }]);
    };

    // actualizar paleta de colores
    const actualizarColor = (color, id) => {
        const equiposActualizados = equipos.map((equipo) => {
            if (equipo.id === id) {
                equipo.colorPrimario = color;
            }
            return equipo;
        });
        setEquipos(equiposActualizados);
    };

    const like = (id) => {
        const colaboradorActualizado = colaboradores.map((colaborador) => {
            if (colaborador.id === id) {
                colaborador.fav = !colaborador.fav;
            }
            return colaborador;
        });
        setColaboradores(colaboradorActualizado);
    };

    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            {active && (
                <FormularioColaborador
                    registerColaborador={registerColaborador}
                    registrarEquipo={registrarEquipo}
                    equipos={equipos}
                />
            )}

            <MiOrg showHideForm={showHideForm} />
            <main className='flex-1'>
                {equipos.map((equipo) => (
                    <Equipo
                        key={equipo.titulo}
                        equipo={equipo}
                        colaboradores={colaboradores.filter(
                            (colaborador) =>
                                colaborador.equipo === equipo.titulo
                        )}
                        deleteColaborador={deleteColaborador}
                        actualizarColor={actualizarColor}
                        like={like}
                    />
                ))}
            </main>
            <Footer />
        </div>
    );
}

export default App;
