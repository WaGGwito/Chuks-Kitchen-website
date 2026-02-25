import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faChevronRight, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const CartModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate()
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-110 flex flex-col bg-white lg:max-w-md lg:ml-auto shadow-2xl animate-in slide-in-from-right duration-300">

            {/* HEADER */}
            <div className="px-6 py-5 border-b flex justify-between items-center bg-white sticky top-0 z-10">
                <h2 className="text-xl font-black text-gray-800">Your Basket</h2>
                <button onClick={onClose} className="text-gray-400 hover:text-black transition-colors">
                    <FontAwesomeIcon icon={faXmark} className="text-xl" />
                </button>
            </div>


            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
                {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
                        <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c" alt="food" className="w-full h-full object-cover" />
                        </div>

                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="font-bold text-gray-800 text-[15px]">Jollof Rice & Fried Chicken</h3>
                                <button className="text-gray-300 hover:text-red-500 transition">
                                    <FontAwesomeIcon icon={faTrashCan} className="text-xs" />
                                </button>
                            </div>
                            <p className="text-[10px] text-gray-500 mb-3">With Plantain, extra pepper sauce</p>

                            <div className="flex justify-between items-center">
                                <span className="text-ck-orange font-bold text-sm">₦3,500</span>

                            
                                <div className="flex items-center gap-4 bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
                                    <button className="text-gray-400 hover:text-ck-orange"><FontAwesomeIcon icon={faMinus} className="text-[10px]" /></button>
                                    <span className="font-bold text-gray-800 text-sm">1</span>
                                    <button className="text-gray-400 hover:text-ck-orange"><FontAwesomeIcon icon={faPlus} className="text-[10px]" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

              
                <button className="w-full py-6 text-sky-500 font-bold text-sm flex items-center justify-center gap-2 hover:underline">
                    <FontAwesomeIcon icon={faPlus} />
                    Add more items from Chuks Kitchen
                </button>
            </div>


            <div className="p-6 bg-white border-t border-gray-100 flex justify-end items-center">
                <button
                
                    className="w-16 h-16 bg-ck-orange text-white rounded-2xl shadow-lg flex items-center justify-center text-xl hover:bg-orange-600 transition-all active:scale-90 group cursor-pointer hover:opacity-90"
                    onClick={() => navigate('/checkout')}
                >
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        className="group-hover:translate-x-1 transition-transform"
                    />
                </button>
            </div>
        </div>
    );
};

export default CartModal;