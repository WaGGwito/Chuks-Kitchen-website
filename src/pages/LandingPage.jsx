import React from 'react';
import { useNavigate } from 'react-router-dom';
import desktopHero from '../assets/desktop-hero.png';
import mobileHero from '../assets/mobile-hero.png';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-white">

            <div className="lg:w-1/2 w-full relative">
                <div className="h-[300px] lg:h-screen overflow-hidden">
                    <picture>
                        <source media="(min-width: 1024px)" srcSet={desktopHero} />
                        <img
                            src={mobileHero}
                            alt="Delicious Nigerian Meal"
                            className="w-full h-full object-cover"
                        />
                    </picture>
                </div>


                <button
                    onClick={() => navigate('/login')}
                    className="lg:hidden absolute -bottom-6 right-6 z-20 bg-white border-2 border-sky-400 text-sky-400 px-8 py-2 rounded-xl font-bold shadow-lg"
                >
                    Sign In
                </button>
            </div>

            {/* CONTENT SECTION */}
            <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start justify-center px-6 pt-16 pb-10 lg:p-20 text-gray-800 relative">

                {/* DESKTOP HEADER */}
                <div className="hidden lg:flex justify-between items-center lg:absolute lg:top-10 lg:left-20 lg:right-10 lg:w-[calc(100%-120px)]">
                    <h2 className="text-ck-orange font-serif italic text-3xl">Chuks Kitchen</h2>
                    <button
                        onClick={() => navigate('/login')}
                        className="border-2 border-sky-400 text-sky-400 px-6 py-2 rounded-xl font-bold hover:bg-sky-50 cursor-pointer hover:opacity-90 transition-all"
                    >
                        Sign In
                    </button>
                </div>


                <div className="lg:hidden mb-4 mt-4">
                    <h2 className="text-ck-orange font-serif italic text-3xl">Chuks Kitchen</h2>
                </div>


                <div className="flex flex-col items-center lg:items-start lg:mt-24">
                    <h1 className="text-4xl lg:text-5xl font-black mb-4 leading-tight text-center lg:text-left">
                        Your Authentic Taste of Nigeria
                    </h1>

                    <p className="text-base lg:text-lg text-gray-600 mb-8 leading-relaxed text-center lg:text-left max-w-sm lg:max-w-xl">
                        Experience homemade flavors delivered fresh to your desk or home.
                    </p>
                </div>


                <div className="w-full space-y-3 mb-10">
                    {[
                        { label: 'Freshly Prepared', icon: '🍴' },
                        { label: 'Support Local Business', icon: '🍴' },
                        { label: 'Fast & Reliable Delivery', icon: '🚚' }
                    ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-4 bg-gray-50 lg:bg-transparent p-4 lg:p-0 rounded-2xl border border-gray-100 lg:border-none">
                            <div className="bg-orange-100 p-2 rounded-lg text-xl text-ck-orange">
                                {feature.icon}
                            </div>
                            <span className="font-semibold text-gray-700">{feature.label}</span>
                        </div>
                    ))}
                </div>


                <div className="flex flex-col gap-4 w-full max-w-md">
                    <button
                        onClick={() => navigate('/signup')}
                        className="bg-ck-orange text-white py-4 px-8 rounded-2xl font-bold text-xl hover:bg-orange-600 shadow-lg w-full cursor-pointer hover:opacity-90 transition"
                    >
                        Start Your Order
                    </button>
                    <button className="border-2 border-sky-400 text-sky-400 py-4 px-8 rounded-2xl font-bold text-xl hover:bg-sky-50 w-full cursor-pointer hover:opacity-90 transition">
                        Learn More About Us
                    </button>
                </div>


                <div className="mt-12 text-[10px] lg:text-xs text-gray-400 flex justify-center lg:justify-start gap-4 uppercase tracking-widest">
                    <span>© 2026 Chuks Kitchen</span>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;