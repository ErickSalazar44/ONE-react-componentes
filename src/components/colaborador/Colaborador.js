import { CgClose } from "react-icons/cg";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import ModalDelete from "../modal/ModalDelete";
import { useState } from "react";

const Colaborador = ({
    colaborador,
    colorPrimario,
    deleteColaborador,
    like,
}) => {
    const [activeModal, setActiveModal] = useState(false);

    const handleModal = () => {
        setActiveModal(true);
    };

    return (
        <div className='w-[262px] mb-6'>
            <header
                style={{ background: `${colorPrimario}` }}
                className='rounded-[10px] h-[91px] relative transition-colors'
            >
                <img
                    className='w-[120px] rounded-full relative bottom-[-30px] mx-auto'
                    src={colaborador.foto}
                    alt='user-img'
                />
                <CgClose
                    className='absolute top-3 right-3 cursor-pointer hover:scale-110 duration-300 ease-in-out transition-transform'
                    onClick={handleModal}
                />
            </header>
            <article className='bg-white shadow-sm rounded-b-[10px] pt-20 pb-10 font-[Montserrat]'>
                <h4 className='text-main text-lg font-semibold mb-2'>
                    {colaborador.name}
                </h4>
                <h5 className='text-lg text-[#212121] py-0 px-6 font-normal m-0'>
                    {colaborador.puesto}
                </h5>
                {colaborador.fav ? (
                    <span
                        className='mt-2 block'
                        onClick={() => like(colaborador.id)}
                    >
                        <AiFillHeart
                            size={22}
                            className='mx-auto'
                            color='red'
                        />
                    </span>
                ) : (
                    <span
                        className='mt-2 block'
                        onClick={() => like(colaborador.id)}
                    >
                        <AiOutlineHeart size={22} className='mx-auto' />
                    </span>
                )}
            </article>
            {activeModal && (
                <ModalDelete
                    colaborador={colaborador}
                    deleteColaborador={deleteColaborador}
                    activeModal={activeModal}
                    setActiveModal={setActiveModal}
                />
            )}
        </div>
    );
};

export default Colaborador;
