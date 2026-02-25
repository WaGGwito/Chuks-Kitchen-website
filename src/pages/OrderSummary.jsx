import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {

    const navigate = useNavigate()
    const [fulfillment, setFulfillment] = useState('delivery');

    return (
        <div className="min-h-screen bg-gray-50">

            <nav className="bg-white px-6 lg:px-20 py-5 flex justify-between items-center shadow-sm sticky top-0 z-50">
                <div className="flex items-center gap-4">
                    <button className="lg:hidden text-gray-600">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <h2 className="text-ck-orange font-serif italic text-2xl">Chuks Kitchen</h2>
                </div>
                <div className="hidden lg:flex items-center gap-10 font-medium text-gray-700">
                    <a href="#" className="hover:text-ck-orange transition">Home</a>
                    <a href="#" className="hover:text-ck-orange transition">Explore</a>
                    <a href="#" className="text-ck-orange">My Orders</a>
                    <a href="#" className="hover:text-ck-orange transition">Account</a>
                </div>
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600">
                    JD
                </div>
            </nav>

            <div className="max-w-3xl mx-auto mt-8 lg:mt-12 px-4 lg:px-0">
                <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-8 lg:p-12">
                        <h1 className="text-3xl lg:text-4xl font-black text-gray-800 mb-8 text-left lg:text-center">Order Summary</h1>


                        <div className="mb-10">
                            <label className="block text-gray-700 font-bold mb-3 text-lg">Add a Promo Code</label>
                            <div className="flex gap-3">
                                <input
                                    type="text"
                                    placeholder="Enter Code here"
                                    className="flex-1 border border-gray-200 rounded-xl px-4 py-4 outline-none focus:border-ck-orange transition"
                                />
                                <button className="bg-ck-orange text-white px-10 py-4 rounded-xl font-bold shadow-md hover:bg-orange-600 transition cursor-pointer">
                                    Login
                                </button>
                            </div>
                        </div>


                        <div className="space-y-4 border-b border-gray-100 pb-8 mb-8">
                            <div className="flex justify-between text-gray-500 font-medium text-lg">
                                <span>Subtotal</span>
                                <span className="text-gray-800">₦9,200</span>
                            </div>
                            <div className="flex justify-between text-gray-500 font-medium text-lg">
                                <span>Delivery Fee</span>
                                <span className="text-gray-800">₦500</span>
                            </div>
                            <div className="flex justify-between text-gray-500 font-medium text-lg">
                                <span>Service Fee</span>
                                <span className="text-gray-800">₦200</span>
                            </div>
                            <div className="flex justify-between text-gray-500 font-medium text-lg">
                                <span>Tax</span>
                                <span className="text-gray-800">₦0</span>
                            </div>
                        </div>


                        <div className="flex justify-between items-center mb-10">
                            <span className="text-2xl font-black text-gray-800 uppercase tracking-tight">Total</span>
                            <span className="text-3xl font-black text-gray-800">₦9,900</span>
                        </div>


                        <div className="bg-gray-200/50 p-1.5 rounded-2xl flex mb-10">
                            <button
                                onClick={() => setFulfillment('delivery')}
                                className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all ${fulfillment === 'delivery' ? 'bg-ck-orange text-white shadow-lg' : 'text-gray-400'} cursor-pointer`}
                            >
                                Delivery
                            </button>
                            <button
                                onClick={() => setFulfillment('pickup')}
                                className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all ${fulfillment === 'pickup' ? 'bg-ck-orange text-white shadow-lg' : 'text-gray-400'} cursor-pointer`}
                            >
                                Pick up
                            </button>
                        </div>

                        {/*INSTRUCTIONS */}
                        <div className="mb-10 text-left">
                            <label className="block text-gray-700 font-bold mb-3 text-lg">Special Instruction for restaurants</label>
                            <textarea
                                className="w-full border border-gray-200 rounded-2xl p-6 h-32 outline-none focus:border-ck-orange transition bg-gray-50/30"
                                placeholder="E.g no onion, food is too spicy, etc."
                                defaultValue="E.g no onion, food is too spicy, food is too hot, food is tasty"
                            ></textarea>
                        </div>


                        <button
                            onClick={() => navigate('/delivery')}
                            className="w-full bg-ck-orange text-white py-5 rounded-2xl font-black text-xl shadow-lg hover:bg-orange-600 transition-all active:scale-[0.98] cursor-pointer">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>

            <footer className="hidden lg:block bg-[#3E2723] text-white/80 py-16 px-6 lg:px-20 mt-10">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
                    <div>
                        <h3 className="text-ck-orange font-serif italic text-2xl mb-4">Chuks Kitchen</h3>
                        <p className="max-w-xs text-sm leading-relaxed">
                            Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.
                        </p>
                    </div>

                    <div className="flex gap-12 lg:gap-24">
                        <div className="space-y-2">
                            <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-widest">Quick Links</h4>
                            <p className="text-sm cursor-pointer hover:text-ck-orange transition">Home</p>
                            <p className="text-sm cursor-pointer hover:text-ck-orange transition">Explore</p>
                            <p className="text-sm cursor-pointer hover:text-ck-orange transition">My Order</p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-widest">Contact Us</h4>
                            <p className="text-sm">+234 801 234 5678</p>
                            <p className="text-sm">hello@chukskitchen.com</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-8 text-xs flex justify-between">
                    <p>© 2026 Chuks Kitchen. All rights reserved.</p>
                    <div className="flex gap-6 text-xl">
                        <a href="#" className="hover:text-ck-orange transition-colors">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#" className="hover:text-ck-orange transition-colors">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#" className="hover:text-ck-orange transition-colors">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>

                </div>
            </footer>
        </div>

    );
};

export default OrderSummary;