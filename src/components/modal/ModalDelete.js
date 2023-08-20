import React from "react";
import { FcHighPriority } from "react-icons/fc";
import { VscClose } from "react-icons/vsc";

function ModalDelete({ colaborador, deleteColaborador, setActiveModal }) {
    const cerrarModal = () => {
        setActiveModal(false);
    };

    const eliminarColaborador = () => {
        deleteColaborador(colaborador.id);
        setActiveModal(false);
    };

    return (
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30'>
            <div className='bg-white p-4 sm:p-6 rounded-lg shadow-lg relative font-[Montserrat]'>
                <div className='flex flex-col items-center space-y-4'>
                    <span className='text-red-500'>
                        <FcHighPriority size={40} />
                    </span>
                    <span
                        className='absolute top-0 right-2 cursor-pointer'
                        onClick={cerrarModal}
                    >
                        <VscClose size={24} />
                    </span>
                    <div className='text-center'>
                        <h3 className='font-semibold text-base sm:text-lg mb-2'>
                            Confirmación de Eliminación
                        </h3>
                        <p className='text-xs sm:text-sm'>
                            {`¿Estás seguro de que deseas eliminar a ${colaborador.name}?`}
                        </p>
                    </div>
                </div>
                <div className='mt-4 flex justify-end'>
                    <button
                        className='text-xs sm:text-sm px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
                        onClick={eliminarColaborador}
                    >
                        Eliminar
                    </button>
                    <button
                        className='ml-3 text-xs sm:text-sm px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300'
                        onClick={cerrarModal}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalDelete;
