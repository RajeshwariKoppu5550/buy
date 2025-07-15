import React from 'react';

function LandingPageHero() {
    return (
        <div
            className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: "url('/pizza_hero.png')" }} // Ensure the image is in the public folder
        >
            {/* Overlay for Darkening the Background */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 font-[sans-serif] max-w-6xl mx-auto h-full flex items-center">
                {/* Reduced Gap and Padding for Content Alignment */}
                <div className="grid md:grid-cols-2 items-start gap-5 px-2">

                    {/* Text Section - Aligned Left with Reduced Margin */}
                    <div className="text-white text-left max-w-lg">
                        <p className="mt-2 text-sm font-bold text-red-400">
                            <span className="rotate-90 inline-block mr-2 mb-2">|</span> FRESHLY BAKED PIZZA DELIVERED FAST
                        </p>
                        <h2 className="text-white md:text-6xl text-4xl font-extrabold mb-4 md:!leading-[60px]">
                            Savor Every Slice, Delivered Hot!
                        </h2>
                        <p className="mt-5 text-lg text-gray-300 leading-relaxed">
                            Embark on a gastronomic journey with our hand-tossed pizzas,
                            topped with the finest ingredients, straight to your door.
                        </p>

                        {/* Search Box with Reduced Width */}
                        <div className="mt-8 flex px-4 py-3 rounded-lg bg-white/80 backdrop-blur-md overflow-hidden w-full max-w-sm">
                            <input
                                type='search'
                                placeholder='Find your favorite pizza...'
                                className="w-full outline-none bg-transparent text-sm"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 192.904 192.904"
                                width="20px"
                                className="cursor-pointer fill-gray-400"
                            >
                                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LandingPageHero;
