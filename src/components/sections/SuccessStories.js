"use client";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";


import "swiper/css";
import "swiper/css/pagination";

export default function SuccessStories() {

    const stories = [
        {
            image: "/Tariff-1.png",
            title:
                "Global Tariff Financial Modeling System",
            slug: "story-1",
        },
        {
            image: "/SAP-1.png",
            title:
                "Transforming Supply Chain Operations with SAP-Based Intercompany Automation",
            slug: "story-2",
        },
        {
            image: "/SmartFactory-1.png",
            title:
                "Transforming Production with an AI-Powered Early Warning System",
            slug: "story-3",
        },
        {
            image: "/MedTech-1.png",
            title:
                "The Intelligent Quality Ecosystem: Moving from Data Silos to Autonomous Quality Surveillance",
            slug: "story-4",
        },
        {
            image: "/PulpMill-1.png",
            title:
                "Integrated Analytics for Pulp Mill Optimization",
            slug: "story-5",
        },
    ];

    return (
        <section className="min-h-screen md:h-screen bg-gray-100 py-10 overflow-hidden">

            <div className="max-w-7xl mx-auto px-6">

                <h2 className="md:text-6xl text-5xl font-light tracking-tighter leading-tight md:mb-16 mb-12">
                    Success Stories
                </h2>

            </div>

            <div className="w-full px-6">

                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1.1}
                    spaceBetween={16}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    centeredSlides={true}
                    loop={true}
                    speed={1800}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    className="successSwiper"
                >

                    {stories.map((story, i) => (

                        <SwiperSlide key={i} className="transition-all duration-500">

                            <div className="group relative bg-white rounded-md overflow-hidden shadow-lg transition-all duration-500 h-[350] md:h-[450]">

                                {/* Image */}
                                <div className="aspect-5/4 overflow-hidden relative z-20 transition-all duration-700 group-hover:h-full inset-0">

                                    <img
                                        src={story.image}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-150"
                                    />

                                    {/* Dark overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"></div>

                                    {/* Read More Button */}
                                    <Link href={`/case-studies/${story.slug}`}>
                                        <div className="absolute inset-0 flex ml-10 mb-10 items-baseline-last justify-start opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-in-out ">
                                            {/* Content */}
                                            <div className="text-white max-w-[65%]">

                                                <p className="font-light tracking-tighter text-lg leading-snug">
                                                    {story.title}
                                                </p>

                                                <div className="mt-4 bg-blue-700 px-7 py-3 rounded-[4] text-sm tracking-widest font-medium inline-block cursor-pointer">
                                                    KNOW MORE
                                                </div>

                                            </div>



                                        </div>
                                    </Link>

                                </div>


                                {/* Content */}
                                <div className="p-4 flex flex-col gap-4 relative z-0">

                                    <h3 className="text-black font-light tracking-tighter text-lg leading-snug">
                                        {story.title}
                                    </h3>

                                </div>

                            </div>

                        </SwiperSlide>

                    ))}

                </Swiper>

            </div>

            {/* Pop-out center effect */}
            <style jsx global>{`

        .successSwiper .swiper-slide {
          transform: scale(1);
          transition: transform 0.1s linear;
          overflow: visible !important;
          opacity: 0.9;
          
        }

        .successSwiper .swiper-wrapper {
            overflow: visible !important;
        }

        .successSwiper .swiper-slide-active {
          transform: scale(1);
          opacity: 1;
        }

        .successSwiper {
            padding-bottom: 30px;
            overflow: visible !important;
        }

        .successSwiper .swiper-pagination {
            position: relative !important;
            margin-top: 45px;
        }

        .successSwiper .swiper-pagination-bullet {
          background: #999;
          opacity: 1;
        }

        .successSwiper .swiper-pagination-bullet-active {
          background: #000;
        }

      `}</style>

        </section>
    );
}