import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
const Payment = () => {
    const navigate = useNavigate()
    const [paymentMethod, setPaymentMethod] = useState('card');

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
                <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden text-left">
                    <div className="p-8 lg:p-12">
                        <h1 className="text-3xl lg:text-4xl font-black text-gray-800 mb-8">Payment</h1>


                        <div className="mb-10">
                            <label className="block text-gray-700 font-bold mb-4 text-lg">Pay with..</label>
                            <div className="flex gap-8">
                                {['card', 'bank', 'transfer'].map((method) => (
                                    <label key={method} className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative flex items-center justify-center">
                                            <input
                                                type="radio"
                                                name="payment"
                                                className="peer appearance-none w-6 h-6 border-2 border-gray-300 rounded-full checked:border-ck-orange transition-all cursor-pointer"
                                                checked={paymentMethod === method}
                                                onChange={() => setPaymentMethod(method)}
                                            />
                                            <div className="absolute w-3 h-3 bg-ck-orange rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
                                        </div>
                                        <span className={`capitalize font-bold text-lg ${paymentMethod === method ? 'text-gray-800' : 'text-gray-400'}`}>
                                            {method}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/*CARD DETAILS FORM*/}
                        <div className="space-y-6">
                            <div>
                                <label className="block text-gray-700 font-bold mb-2">Card Number</label>
                                <input
                                    type="text"
                                    placeholder="1234  5678  9101  1121"
                                    className="w-full border border-gray-200 rounded-xl px-6 py-4 outline-none focus:border-ck-orange transition text-lg"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 font-bold mb-2">Expiration Date</label>
                                    <input
                                        type="text"
                                        placeholder="MM/YY"
                                        className="w-full border border-gray-200 rounded-xl px-6 py-4 outline-none focus:border-ck-orange transition text-lg"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-bold mb-2">CVV</label>
                                    <input
                                        type="text"
                                        placeholder="123"
                                        className="w-full border border-gray-200 rounded-xl px-6 py-4 outline-none focus:border-ck-orange transition text-lg"
                                    />
                                </div>
                            </div>


                            <label className="flex items-center gap-3 cursor-pointer py-2">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 border-2 border-gray-300 rounded accent-ck-orange"
                                />
                                <span className="text-gray-400 font-medium">Save card details</span>
                            </label>
                        </div>

                        <button onClick={() => navigate('/track-order')}
                            className="w-full bg-ck-orange text-white py-5 rounded-2xl font-black text-xl shadow-lg mt-10 hover:bg-orange-600 transition-all active:scale-[0.98] cursor-pointer">
                            Pay ₦9,900
                        </button>


                        <p className="mt-8 text-gray-400 text-sm leading-relaxed">
                            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                        </p>
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

export default Payment;