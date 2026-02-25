import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
const OrderState = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3500);
        return () => clearTimeout(timer);
    }, []);


    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="relative w-12 h-12">
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute left-[45%] top-0 w-[10%] h-[28%] rounded-full animate-spinner-fade"
                            style={{
                                transform: `rotate(${i * 30}deg)`,
                                transformOrigin: '50% 160%',
                                animationDelay: `${(i * 0.08) - 1}s`,
                                backgroundColor: (i === 1 || i === 2) ? '#F27E2B' : '#D1D5DB'
                            }}
                        />
                    ))}
                </div>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-gray-50 flex flex-col pt-0 lg:pt-20">


            <nav className="bg-white px-6 py-5 flex justify-between items-center shadow-sm lg:hidden">
                <h2 className="text-ck-orange font-serif italic text-2xl">Chuks Kitchen</h2>
                <div className="text-2xl text-gray-700 cursor-pointer">☰</div>
            </nav>


            <div className="flex-1 flex items-center justify-center p-4 lg:p-0">
                <div className="max-w-xl w-full bg-white rounded-[2.5rem] shadow-sm p-10 lg:p-16 text-center border border-gray-100">


                    <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-100">
                        <FontAwesomeIcon icon={faCheck} className="text-white text-3xl" />
                    </div>

                    <h1 className="text-2xl lg:text-3xl font-black text-gray-800 mb-4 tracking-tight">
                        Order Placed Successfully!
                    </h1>

                    <p className="text-gray-500 font-medium mb-12">
                        Your delicious Chuks Kitchen meal is on its way!
                    </p>

                    <div className="mb-12">
                        <h2 className="text-xl lg:text-2xl font-black text-gray-800">
                            Order #123RGR231567Y Confirmed
                        </h2>
                    </div>


                    <div className="space-y-6">
                        <button className="w-full bg-ck-orange text-white py-5 rounded-2xl font-black text-lg shadow-lg hover:bg-orange-600 transition active:scale-[0.98]">
                            Track Order
                        </button>

                        <button className="text-gray-400 font-bold hover:text-gray-600 transition block mx-auto text-sm">
                            Generate Receipt
                        </button>

                        <button className="text-sky-500 font-bold hover:underline block mx-auto pt-4 text-sm">
                            Need help with your order?
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

export default OrderState;