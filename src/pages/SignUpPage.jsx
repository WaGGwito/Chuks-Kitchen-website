import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEyeSlash, faPhone, faEye } from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import loginHero from '../assets/desktop-hero.png'; // Reusing the same hero image
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';


const SignUpPage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex flex-col bg-[#F8F9FA]">


            <div className="flex flex-1">

                {/* LEFT SIDE Desktop*/}
                <div className="hidden lg:flex lg:w-1/2 relative">
                    <img src={loginHero} alt="Kitchen" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-ck-orange/70 flex flex-col justify-center px-20 text-white">
                        <h2 className="text-4xl font-serif italic mb-4">Chuks Kitchen</h2>
                        <h1 className="text-5xl font-black mb-6">Your journey to delicious, authentic Nigerian meals starts here.</h1>
                        <p className="text-xl">Sign up or log in to order your favorites today!</p>
                    </div>
                </div>

                {/* RIGHT SIDE*/}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-12 bg-white">
                    <div className="w-full max-w-md">
                        <div className="lg:hidden flex justify-center mb-6">
                            <h2 className="text-ck-orange font-serif italic text-2xl">Chuks Kitchen</h2>
                        </div>

                        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-gray-800">Create Your Account</h2>

                        <form className="space-y-5">

                            <div>
                                <label className="block text-gray-700 font-medium mb-1.5 text-sm">Email</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </span>
                                    <input type="email" placeholder="name@gmail.com" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ck-orange outline-none" />
                                </div>
                            </div>


                            <div>
                                <label className="block text-gray-700 font-medium mb-1.5 text-sm">Phone number</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </span>
                                    <input type="tel" placeholder="8123340690" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ck-orange outline-none" />
                                </div>
                            </div>


                            <div>
                                <label className="block text-gray-700 font-medium mb-1.5 text-sm">Password</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                                        <FontAwesomeIcon icon={faLock} />
                                    </span>
                                    <input type="password" placeholder="QWE123#" className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ck-orange outline-none" />
                                    <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                                        <FontAwesomeIcon icon={faEyeSlash} />
                                    </span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-1.5 text-sm">Confirm password</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                                        <FontAwesomeIcon icon={faLock} />
                                    </span>
                                    <input type="password" placeholder="QWE123#" className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ck-orange outline-none" />
                                    <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                                        <FontAwesomeIcon icon={faEye} />
                                    </span>
                                </div>
                            </div>


                            <div className="flex items-start gap-3 mt-4">
                                <input type="checkbox" id="terms" className="mt-1 w-4 h-4 accent-ck-orange" />
                                <label htmlFor="terms" className="text-sm text-gray-600">
                                    I agree to the <span className="text-sky-500 cursor-pointer">Terms & Conditions</span> and <span className="text-sky-500 cursor-pointer">Privacy Policy</span>
                                </label>
                            </div>

                            <button 
                            onClick={()=>navigate('/home')}
                            className="w-full bg-ck-orange text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-orange-600 transition mt-4 cursor-pointer hover:opacity-90">
                                Continue
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="relative my-6 text-center">
                            <hr className="border-gray-200" />
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-gray-400 text-xs italic">Or continue with</span>
                        </div>


                        <div className="space-y-3">
                            <button className="w-full border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition cursor-pointer hover:opacity-90">
                                <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                                <span className="text-gray-700 font-medium">Continue with Google</span>
                            </button>
                            <button className="w-full border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition cursor-pointer hover:opacity-90">
                                <FontAwesomeIcon icon={faApple} className="text-black text-xl" />
                                <span className="text-gray-700 font-medium">Continue with Apple</span>
                            </button>
                        </div>

                        <p className="text-center mt-6 text-gray-500 text-sm">
                            Already have an account? <a href="#" className="text-sky-500 font-bold hover:underline"
                                onClick={() => navigate('/login')}>Sign In</a>
                        </p>
                    </div>
                </div>
            </div>


            <footer className="bg-ck-brown text-white/80 py-16 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div>
                        <h3 className="text-ck-orange font-serif italic text-2xl mb-4">Chuks Kitchen</h3>
                        <p className="leading-relaxed">Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-ck-orange transition">Home</a></li>
                            <li><a href="#" className="hover:text-ck-orange transition">Explore</a></li>
                            <li><a href="#" className="hover:text-ck-orange transition">My Order</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
                        <ul className="space-y-3 text-sm">
                            <li>+234 801 234 5678</li>
                            <li>hello@chukskitchen.com</li>
                            <li>123 Taste Blvd, Lagos, Nigeria</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Socials</h4>
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
                </div>
                <div className="mt-16 pt-8 border-t border-white/10 text-[10px] text-gray-500 text-center flex justify-between items-center">
                    <span>© 2026 Lift Media. All rights reserved.</span>
                    <button className="bg-sky-500 w-8 h-8 rounded-full text-white flex items-center justify-center text-xs">↑</button>
                </div>
            </footer>
        </div>
    );
};

export default SignUpPage;