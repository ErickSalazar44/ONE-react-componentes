import { useState } from "react";
import Colaborador from "../colaborador/Colaborador";
import { TwitterPicker } from "react-color";
import { VscSymbolColor } from "react-icons/vsc";
import { hexToRGB } from "../../utils/hexToRGB";
export const Equipo = ({
    equipo,
    colaboradores,
    deleteColaborador,
    actualizarColor,
    like,
}) => {
    const { colorPrimario, titulo, id } = equipo;

    // estado para mostrar ocultar paleta de colores
    const [paletaVisible, setPaletaVisible] = useState(false);

    const styleEquipo = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(262px, 1fr))",
        gap: "20px",
    };

    const handlemousedown = () => {
        setPaletaVisible(false);
    };

    return (
        colaboradores.length > 0 && (
            <section
                style={{ background: hexToRGB(colorPrimario) }}
                className='w-full p-8 text-center relative'
            >
                <button
                    className='absolute top-3 right-3'
                    onClick={() => setPaletaVisible(!paletaVisible)}
                >
                    <VscSymbolColor
                        style={{ color: colorPrimario }}
                        size={32}
                    />
                </button>

                {paletaVisible && (
                    <div
                        onMouseLeave={handlemousedown}
                        className='absolute z-50 right-2 top-16 transition-colors'
                    >
                        <TwitterPicker
                            color={colorPrimario}
                            triangle='top-right'
                            onChangeComplete={(color) =>
                                actualizarColor(color.hex, id)
                            }
                        />
                    </div>
                )}

                <h3
                    style={{ borderColor: `${colorPrimario}` }}
                    className='font-normal text-bl md:text-3xl text-xl border-b-2 border-b-solid inline-block mb-8'
                >
                    {titulo}
                </h3>
                <div
                    style={styleEquipo}
                    className='max-w-[1108px] mx-auto justify-items-center'
                >
                    {colaboradores.map((colaborador, i) => (
                        <Colaborador
                            key={i}
                            colaborador={colaborador}
                            deleteColaborador={deleteColaborador}
                            colorPrimario={colorPrimario}
                            like={like}
                        />
                    ))}
                </div>
            </section>
        )
    );
};
