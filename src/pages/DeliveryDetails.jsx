import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
const DeliveryDetails = () => {
    const navigate = useNavigate()

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
                        <h1 className="text-3xl lg:text-4xl font-black text-gray-800 mb-8 text-left">Delivery Details</h1>

                        {/*ADDRESS CARD */}
                        <div className="mb-10">
                            <div className="border border-gray-200 rounded-2xl p-6 relative bg-gray-50/30">
                                <div className="flex justify-between items-start mb-2">
                                    <p className="font-bold text-gray-800 text-lg">Home: 123 Main Street, Victoria Island, Lagos</p>
                                    <button className="text-sky-500 font-bold text-sm whitespace-nowrap ml-4 hover:underline cursor-pointer">
                                        Change Address
                                    </button>
                                </div>
                                <p className="text-gray-500 font-medium text-sm leading-relaxed">
                                    Apt 4B, Opposite Mega Plaza
                                </p>
                            </div>
                        </div>


                        <div className="mb-10 text-left">
                            <label className="block text-gray-700 font-bold mb-3 text-lg">Delivery Time</label>
                            <div className="w-full border border-gray-200 rounded-xl px-6 py-5 bg-white font-medium text-gray-700">25-30 mins
                            </div>
                        </div>


                        <div className="mb-10 text-left">
                            <label className="block text-gray-700 font-bold mb-3 text-lg">Delivery Instructions (Optional)</label>
                            <textarea
                                className="w-full border border-gray-200 rounded-2xl p-6 h-32 outline-none focus:border-ck-orange transition bg-gray-50/30"
                                placeholder="E.g at the front of the door, knock twice...................."
                            ></textarea>
                        </div>

                        {/* CONTACT*/}
                        <div className="mb-12 text-left">
                            <label className="block text-gray-700 font-bold mb-3 text-lg">Contact Address</label>
                            <input
                                type="tel"
                                placeholder="+234 801 234 5678"
                                className="w-full border border-gray-200 rounded-xl px-6 py-5 outline-none focus:border-ck-orange transition"
                            />
                        </div>


                        <button onClick={() => navigate('/payment')}
                            className="w-full bg-ck-orange text-white py-5 rounded-2xl font-black text-xl shadow-lg hover:bg-orange-600 transition-all active:scale-[0.98] cursor-pointer">
                            Proceed to Payment
                        </button>
                    </div>
                </div>
            </div>

            <footer className=" hidden lg:block bg-[#3E2723] text-white/80 py-16 px-6 lg:px-20 mt-10">
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
            </footer>
        </div>

    );
};

export default DeliveryDetails;