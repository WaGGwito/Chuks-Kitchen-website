import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faClock } from '@fortawesome/free-solid-svg-icons';
import jollof2Img from '../assets/jollof2.png';
const ProductModal = ({ isOpen, onClose, product, onConfirm }) => {
    const [selectedProtein, setSelectedProtein] = useState('Fried Chicken');

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-0 lg:p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

            <div className="relative w-full max-w-2xl h-full lg:h-auto lg:max-h-[90vh] bg-white lg:rounded-[2.5rem] shadow-2xl overflow-y-auto animate-in fade-in zoom-in duration-300">


                <div className="relative h-64 lg:h-80 w-full">
                    <img
                        src={jollof2Img}
                        alt="Jollof"
                        className="w-full h-full object-cover"
                    />
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black transition"
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>

                <div className="p-6 lg:p-10">
                    <div className="mb-4">
                        <h2 className="text-2xl lg:text-3xl font-black text-gray-800">Jollof Rice with Fried Chicken</h2>
                        <p className="text-ck-orange text-2xl font-bold mt-1">₦2,800</p>
                    </div>

                    <p className="text-gray-500 text-sm lg:text-base leading-relaxed mb-6">
                        Our signature Jollof rice, cooked to perfection with aromatic spices, served with juicy, golden-fried chicken. A classic Nigerian comfort food.
                    </p>


                    <div className="flex flex-wrap gap-3 mb-10">
                        <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-semibold text-gray-600 flex items-center gap-2">
                            <FontAwesomeIcon icon={faClock} className="text-ck-orange" /> Mildly spicy
                        </span>
                        <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-semibold text-gray-600">View Allergies</span>
                        <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-semibold text-gray-600">Vegetarian option available</span>
                    </div>


                    <div className="mb-10">
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Choose your Protein</h3>
                        <div className="space-y-3">
                            {[
                                { name: 'Fried Chicken', price: 'Default' },
                                { name: 'Grilled Fish', price: '+₦500' },
                                { name: 'Beef', price: '+₦700' }
                            ].map((opt) => (
                                <label key={opt.name} className="flex items-center justify-between p-4 border rounded-2xl cursor-pointer hover:border-ck-orange transition group">
                                    <div className="flex items-center gap-4">
                                        <input
                                            type="radio"
                                            name="protein"
                                            checked={selectedProtein === opt.name}
                                            onChange={() => setSelectedProtein(opt.name)}
                                            className="w-5 h-5 accent-ck-orange"
                                        />
                                        <span className="font-bold text-gray-700">{opt.name}</span>
                                    </div>
                                    <span className="text-gray-400 font-medium">{opt.price}</span>
                                </label>
                            ))}
                        </div>
                    </div>


                    <div className="mb-10">
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Extra Sides (Optional)</h3>
                        <div className="space-y-3">
                            {['Fried Plantain (+₦700)', 'Coleslaw (+₦500)', 'Extra Pepper Sauce (+₦300)'].map((side) => (
                                <label key={side} className="flex items-center gap-4 p-4 border rounded-2xl cursor-pointer hover:border-ck-orange transition">
                                    <input type="checkbox" className="w-5 h-5 rounded accent-ck-orange" />
                                    <span className="font-bold text-gray-700">{side}</span>
                                </label>
                            ))}
                        </div>
                    </div>


                    <div className="mb-10">
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Special Instructions</h3>
                        <textarea
                            placeholder="E.g no onion, food is too spicy, etc."
                            className="w-full p-4 border rounded-2xl h-32 outline-none focus:ring-2 focus:ring-ck-orange/20 focus:border-ck-orange transition"
                        ></textarea>
                    </div>


                    <button
                        onClick={onConfirm}
                        className="w-full bg-ck-orange text-white py-5 rounded-2xl font-black text-lg shadow-lg cursor-pointer hover:opacity-90 transition-all"
                    >
                        Add to Cart - ₦2,800
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;