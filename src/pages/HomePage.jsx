import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faPlus } from '@fortawesome/free-solid-svg-icons';
import homeHero1 from '../assets/hero1.png';
import promoImg from '../assets/smallchops.png';
import ProductModal from '../components/ProductModal';
import CartModal from '../components/CartModal';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import jollofImg from '../assets/jollof1.png';
import jollofImg2 from '../assets/jollof2.png';
import jollofImg3 from '../assets/jollof3.png';
import jollofImg4 from '../assets/jollof4.png';
import EgusiImg from '../assets/egusi.png';
import TilapiaImg from '../assets/fish2.png';
import Egusi2Img from '../assets/egusi2.png';
import BBQImg from '../assets/bbq.png';
import FishImg from '../assets/fish.png';

const HomePage = () => {
    const [activeCategory, setActiveCategory] = useState("Popular");

    const categories = [
        "Popular", "Jollof Rice & Entrees", "Swallow & Soups",
        "Grills & sides", "Beverages", "Desserts"
    ];


    const popularCategories = [
        { name: "Jollof Delights", image: jollofImg3 },
        { name: "Swallow & Soups", image: Egusi2Img },
        { name: "Grills & BBQ", image: BBQImg },
        { name: "Sweet Treats", image: promoImg },
        { name: "Jollof Delights", image: jollofImg4 },
        { name: "Side Dishes", image: FishImg }
    ];


    const meals = [
        { id: 1, name: "Jollof Rice & Fried Fish", price: "₦3,500", desc: "Our signature Jollof rice, cooked to perfection, served with cripsy fried fish.", image: jollofImg },
        { id: 2, name: "Spicy Tilapia Pepper Soup", price: "₦3,200", desc: "A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.", image: TilapiaImg },
        { id: 3, name: "Jollof Rice & Fried Chicken", price: "₦3,500", desc: "Our signature Jollof rice, cooked to perfection, served with succulent smoked chicken.", image: jollofImg2 },
        { id: 4, name: "Jollof Rice & Smoked Chicken", price: "₦3,500", desc: "Our signature Jollof rice, served with crispy fried chicken and plantain.", image: jollofImg3 },
        { id: 5, name: "Egusi Soup & Pounded Yam", price: "₦3,500", desc: "Rich and savory Egusi soup, with assorted meat,paired with freshly pounded yam.", image: EgusiImg },
        { id: 6, name: "Jollof Rice & Fried Chicken", price: "₦3,500", desc: "Our signature Jollof rice, served with crispy fried chicken and plantain.", image: jollofImg4 }

    ];





    const [isProductOpen, setIsProductOpen] = useState(false);
    const [selectedMeal, setSelectedMeal] = useState(null);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleAddToCart = () => {
        setIsProductOpen(false);
        setIsCartOpen(true);
    };

    const handleMealClick = (meal) => {
        setSelectedMeal(meal);
        setIsProductOpen(true);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col relative">

            {/* NAV */}
            <nav className="bg-white px-6 lg:px-20 py-5 flex justify-between items-center shadow-sm sticky top-0 z-50">
                <h2 className="text-ck-orange font-serif italic text-2xl">Chuks Kitchen</h2>
                <div className="hidden lg:flex items-center gap-16 font-medium text-gray-700">
                    <a href="#" className="text-ck-orange">Home</a>
                    <a href="#" className="hover:text-ck-orange transition">Explore</a>
                    <a href="#" className="hover:text-ck-orange transition">My Orders</a>
                    <a href="#" className="hover:text-ck-orange transition">Account</a>
                </div>
                <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600">
                        JD
                    </div>
                    <div className="lg:hidden">
                        <FontAwesomeIcon icon={faBars} className="text-2xl text-gray-700" />
                    </div>
                </div>
            </nav>

            {/* HERO*/}
            <div className="relative h-[380px] lg:h-[600px] flex items-center px-6 lg:px-20">
                <img src={homeHero1} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-left lg:max-w-4xl">
                    <h1 className="text-white text-4xl lg:text-7xl font-black mb-6 leading-tight">
                        The Heart of Nigerian <br /> Home Cooking
                    </h1>
                    <p className="hidden lg:block text-white text-xl mb-8 font-medium">Handcrafted with passion, delivered with care.</p>
                    <button className="bg-ck-orange text-white px-8 py-3 rounded-xl font-bold shadow-lg cursor-pointer hover:opacity-90 transition-all hover:scale-105">
                        Discover what's new
                    </button>
                </div>

                {/* SEARCH BAR */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] lg:w-full lg:max-w-4xl z-20">
                    <div className="relative">
                        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                        <input
                            type="text"
                            placeholder="What are you craving for today?"
                            className="w-full pl-16 pr-6 py-5 lg:py-7 rounded-2xl shadow-2xl outline-none text-gray-800 bg-white border border-gray-100 text-lg"
                        />
                    </div>
                </div>
            </div>

            {/* MOBILE*/}
            <div className="lg:hidden flex flex-col pt-20">
                <h3 className="px-6 text-xl font-bold mb-4 text-gray-800">Menu Categories</h3>
                <div className="flex flex-col border-y border-gray-100 bg-white mb-8">
                    {categories.map((cat) => (
                        <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-6 py-4 font-semibold text-lg text-left border-l-8 transition-all ${activeCategory === cat ? 'bg-orange-50 border-ck-orange text-gray-900' : 'border-transparent text-gray-500'}`}>
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="px-6 space-y-4">
                    <h4 className="font-bold text-gray-800 mb-2 text-xl">{activeCategory}</h4>
                    {meals.slice(0, 3).map((meal) => (
                        <div key={meal.id} onClick={() => handleMealClick(meal)} className="flex gap-4 bg-white p-3 rounded-2xl shadow-sm border border-gray-50 cursor-pointer active:scale-95 transition-transform">
                            <div className="w-24 h-24 bg-gray-200 rounded-xl shrink-0">
                                <img
                                    src={meal.image}
                                    alt={meal.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1 text-left relative pr-8">
                                <h5 className="font-bold text-[15px] leading-tight mb-1">{meal.name}</h5>
                                <p className="text-[10px] text-gray-500 leading-snug mb-2">{meal.desc}</p>
                                <p className="text-ck-orange font-bold text-sm">{meal.price}</p>
                                <div className="absolute bottom-0 right-0">
                                    <div className="w-6 h-6 rounded-full border-2 border-ck-orange flex items-center justify-center text-ck-orange">
                                        <FontAwesomeIcon icon={faPlus} className="text-[10px]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 mb-6 px-6">
                    <div className="relative rounded-[2.5rem] overflow-hidden h-[400px] flex items-end p-8">
                        <img src={promoImg} alt="Promo" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="relative z-10 text-left text-white">
                            <h2 className="text-3xl font-black mb-3">Introducing Our New <br /> Menu Additions!</h2>
                            <button className="bg-ck-orange w-full py-4 rounded-2xl font-bold">Discover what's new</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* DESKTOP*/}
            <main className="hidden lg:block py-20 bg-gray-50">

                {/* Popular Categories Section */}
                <section className="px-20 mb-24">
                    <h3 className="text-2xl font-bold text-center mb-12 text-gray-800">Popular Categories</h3>
                    <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {popularCategories.map((cat, idx) => (
                            <div
                                key={idx}
                                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-50"
                            >
                             
                                <div className="h-48 overflow-hidden bg-gray-100">
                                    <img
                                        src={cat.image}
                                        alt={cat.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                {/* Text Container */}
                                <div className="p-6 text-center">
                                    <h4 className="font-bold text-gray-800 group-hover:text-ck-orange transition-colors">
                                        {cat.name}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


                {/* Chef's Specials Section */}
                <section className="px-20 mb-24">
                    <h3 className="text-2xl font-bold text-center mb-12 text-gray-800">Chef's Specials</h3>
                    <div className="grid grid-cols-3 gap-10 max-w-7xl mx-auto">
                        {meals.map((meal) => (
                            <div key={meal.id} className="bg-white rounded-[2rem] p-5 shadow-sm hover:shadow-xl transition-all border border-gray-100 cursor-pointer transition-all">
                                <div className="h-56 bg-gray-200 rounded-3xl mb-6 overflow-hidden">
                                    <img src={meal.image}
                                        alt={meal.name}
                                        className="w-full h-full object-cover" />
                                </div>
                                <h4 className="font-bold text-lg mb-2">{meal.name}</h4>
                                <p className="text-gray-500 text-xs mb-6 line-clamp-2">{meal.desc}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-ck-orange font-black text-lg">{meal.price}</span>
                                    <button onClick={() => handleMealClick(meal)} className="bg-ck-orange text-white px-6 py-2.5 rounded-xl font-bold text-xs hover:bg-orange-600 transition cursor-pointer hover:opacity-90">
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="relative h-[550px] flex items-center px-20">
                    <img src={promoImg} alt="Promo" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="relative z-10 text-left text-white max-w-2xl">
                        <h2 className="text-5xl font-black mb-6 leading-tight">Introducing Our New <br /> Menu Additions!</h2>
                        <p className="text-lg mb-8 opacity-90">Explore exciting new dishes, crafted with the freshest ingredients and authentic Nigerian flavors. Limited time offer!</p>
                        <button className="bg-ck-orange text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition cursor-pointer hover:opacity-90">
                            Discover what's new
                        </button>
                    </div>
                </section>
            </main>


            <footer className="bg-ck-brown text-white/80 py-16 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 text-left">
                    <div>
                        <h3 className="text-ck-orange font-serif italic text-2xl mb-4">Chuks Kitchen</h3>
                        <p className="text-sm leading-relaxed">Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.</p>
                    </div>
                    <div className="hidden lg:block">
                        <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Quick Links</h4>
                        <ul className="space-y-3 text-sm opacity-70">
                            <li className="hover:text-ck-orange cursor-pointer">Home</li>
                            <li className="hover:text-ck-orange cursor-pointer">Explore</li>
                            <li className="hover:text-ck-orange cursor-pointer">My Order</li>
                            <li className="hover:text-ck-orange cursor-pointer">Account</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Contact Us</h4>
                        <ul className="space-y-3 text-sm opacity-70">
                            <li>+234 801 234 5678</li>
                            <li>hello@chukskitchen.com</li>
                            <li>123 Taste Blvd, Lagos, Nigeria</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Socials</h4>
                        <div className="flex gap-6 text-xl">
                            <FontAwesomeIcon icon={faFacebook} className="hover:text-ck-orange cursor-pointer transition" />
                            <FontAwesomeIcon icon={faTwitter} className="hover:text-ck-orange cursor-pointer transition" />
                            <FontAwesomeIcon icon={faInstagram} className="hover:text-ck-orange cursor-pointer transition" />
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex justify-between items-center text-xs opacity-50">
                    <span>© 2026 Chuks Kitchen. All rights reserved.</span>
                    <div className="bg-sky-600 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg cursor-pointer hover:bg-sky-500 transition">↑</div>
                </div>
            </footer>

            <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            <ProductModal isOpen={isProductOpen} onClose={() => setIsProductOpen(false)} product={selectedMeal} onConfirm={handleAddToCart} />
        </div>
    );
};

export default HomePage;