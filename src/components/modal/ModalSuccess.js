import { FcApproval } from "react-icons/fc";

const ModalSuccess = ({ titulo }) => {
    return (
        <div className='fixed inset-0 flex items-start justify-end z-50 h-[150px]'>
            <div
                className={`animate-modal transition-opacity duration-500 px-5 py-3 bg-green-200 rounded-lg shadow-lg font-[Montserrat] mt-10 mr-0`}
            >
                <div className='flex justify-center items-center gap-1'>
                    <span className='text-red-500'>
                        <FcApproval size={40} />
                    </span>

                    <div className='text-center'>
                        <h3 className='font-semibold text-sm sm:text-lg'>
                            {`${titulo} Creado exitosamente`}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalSuccess;
