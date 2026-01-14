'use client';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AfterEvent() {
    return (
        <>
            <motion.div

                className=" bg-black lg:px-5 px-4 lg:pt-25 pt-5 pb-10 ">
                <motion.hr className="h-px  border-white origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                />




                <motion.h1 className=" font-mono lg:text-xl font-semibold text-sm text-white mt-3"

                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    (All_Products)
                </motion.h1>
                <motion.div className='flex justify-between bg-black lg:text-8xl text-white font-sans font-bold tracking-normal mt-5 cursor-pointer'
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >

                    <h1 className='flex justify-center lg:text-8xl text-xl items-center gap-x-3'>
                        See All Monoliths <span className="hover:scale-75 transition-ease-in-out duration-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4 h-4 lg:w-12 lg:h-12"
                            >
                                <path d="M13 5H19V11" />
                                <path d="M19 5L5 19" />
                            </svg>

                        </span>

                    </h1>
                    <h1>
                        0_19
                    </h1>
                </motion.div>

                <motion.div
                    className="bg-black mt-6 lg:pt-10 pt-5 text-white"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    {/* bigger screen ke liye */}
                    <div className='hidden lg:block'>
                        <h1 className='lg:flex gap-x-20 tracking-wide font-semibold  lg:justify-center lg:items-center'>
                            <span>(About_Monolith)</span>
                            <span className="lg:text-5xl text-sm leading-tight font-bold font-sans tracking-normal">
                                Using raw materials like volcanic stone and wood,
                            </span>
                        </h1>
                        <h1 className='flex gap-x-20 font-semibold'>
                            <p className="lg:text-5xl text-sm leading-tight font-bold font-sans tracking-normal text-left">
                                Monolith Studio's sculptural forms blur the line between Furniture and Collectible Design. Collaborating closely with talented craftsmen in Mexico each piece is worked by hand to reveal the beauty in the incredible materials found there.
                            </p>
                        </h1>
                    </div>

                    {/* Mobile layout ke liye */}
                    <div className='lg:hidden'>
                        <p className='tracking-normal text-sm mb-2'>
                            (About_Monolith)
                        </p>
                        <p className="text-[14px] text-justify leading-none font-medium font-sans tracking-normal mt-4">
                            Using raw materials like volcanic stone and wood, Monolith Studio's sculptural forms blur the line between Furniture and Collectible Design. Collaborating closely with talented craftsmen in Mexico each piece is worked by hand to reveal the beauty in the incredible materials found there.
                        </p>
                    </div>
                </motion.div>

                <motion.div className="bg-black flex justify-between mt-6 lg:pt-10 pt-5 text-white"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <div className='hidden tracking-tight leading-tight lg:block space-y-5 font-sans w-full font-bold  lg:w-[60%]'>
                        <h1 className="lg:pl-[20vw] text-base lg:pr-10">
                            Founded by designer Marc Personick, Monolith launched its initial collection in 2023, often partnering with other talented architects and designers around the world with the direction of his brutalist aesthetic.
                        </h1>
                        <h1 className="lg:pl-[20vw] text-base lg:pr-10">
                            The resulting furniture and objects are simultaneously functional pieces and collectible art.
                        </h1>
                    </div>

                    <div className='hidden lg:block lg:w-[25%]'>
                        <ul className='space-y-4 font-sans font-semibold text-sm tracking-normal'>
                            <li>
                                Site links:
                            </li>
                            <li >
                                <motion.div className="border-t border-b py-2 border-slate-50 flex justify-between items-center relative overflow-hidden cursor-pointer"
                                    initial="initial"
                                    whileHover="hover"
                                >
                                    <motion.span
                                        className="absolute inset-0 bg-white origin-left"
                                        variants={{
                                            initial: { scaleX: 0 },
                                            hover: { scaleX: 1 },
                                        }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                    />
                                    <motion.button className="z-10"
                                        variants={{
                                            initial: { color: "#ffffff",marginLeft:"0px" },
                                            hover: { color: "#000000",marginLeft:"15px" },
                                        }}
                                        transition={{ duration: 0.25 }}>
                                        Monolith Trade
                                    </motion.button>
                                    <motion.svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-4 h-4 lg:w-5 lg:h-5 z-10"
                                        variants={{
                                            initial: { color: "#ffffff" ,marginRight:"0px" },
                                            hover: { color: "#000000",marginRight:"15px" },
                                        }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <path d="M13 5H19V11" />
                                        <path d="M19 5L5 19" />
                                    </motion.svg>
                                </motion.div>


                            </li>
                            <li>
                                <motion.div className="border-t border-b py-2 border-slate-50 flex justify-between items-center relative overflow-hidden cursor-pointer"
                                    initial="initial"
                                    whileHover="hover"
                                >
                                    <motion.span
                                        className="absolute inset-0 bg-white origin-left"
                                        variants={{
                                            initial: { scaleX: 0 },
                                            hover: { scaleX: 1 },
                                        }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                    />
                                    <motion.button className="z-10"
                                        variants={{
                                            initial: { color: "#ffffff", marginLeft: "0px" },
                                            hover: { color: "#000000", marginLeft: "15px" },
                                        }}
                                        transition={{ duration: 0.25 }}>
                                        Contact us
                                    </motion.button>
                                    <motion.svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-4 h-4 lg:w-5 lg:h-5 z-10"
                                        variants={{
                                            initial: { color: "#ffffff", marginRight: "0px" },
                                            hover: { color: "#000000", marginRight: "15px" },
                                        }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <path d="M13 5H19V11" />
                                        <path d="M19 5L5 19" />
                                    </motion.svg>
                                </motion.div>

                            </li>
                            <li>
                                <motion.div className="border-t border-b py-2 border-slate-50 flex justify-between items-center relative overflow-hidden cursor-pointer"
                                    initial="initial"
                                    whileHover="hover"
                                >
                                    <motion.span
                                        className="absolute inset-0 bg-white origin-left"
                                        variants={{
                                            initial: { scaleX: 0 },
                                            hover: { scaleX: 1 },
                                        }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                    />
                                    <motion.button className="z-10"
                                        variants={{
                                            initial: { color: "#ffffff", marginLeft: "0px" },
                                            hover: { color: "#000000", marginLeft: "15px" },
                                        }}
                                        transition={{ duration: 0.25 }}>
                                        Instagram
                                    </motion.button>
                                    <motion.svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-4 h-4 lg:w-5 lg:h-5 z-10"
                                        variants={{
                                            initial: { color: "#ffffff", marginRight: "0px" },
                                            hover: { color: "#000000", marginRight: "15px" },
                                        }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <path d="M13 5H19V11" />
                                        <path d="M19 5L5 19" />
                                    </motion.svg>
                                </motion.div>

                            </li>
                        </ul>
                    </div>

                            <div className='lg:hidden'>
                        <p className='tracking-tight leading-tight text-justify text-sm mb-2'>
                            Founded by designer Marc Personick, Monolith launched its initial collection in 2023, often partnering with other talented architects and designers around the world with the direction of his brutalist aesthetic.
                        </p>
                        <p className="text-sm tracking-tight text-justify leading-tight  font-sans tracking-normal mt-4">
                            The resulting furniture and objects are simultaneously functional pieces and collectible art.
                        </p>
                    </div>
                </motion.div>

                {/* smaller devices ke liye */}
                <motion.div className="lg:hidden mt-8"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <ul className='space-y-3 font-sans font-semibold text-sm tracking-normal text-white'>
                        <li>
                            Site links:
                        </li>
                        <li>
                            <motion.div className="border-t border-b py-2 border-slate-50 flex justify-between items-center relative overflow-hidden cursor-pointer"
                                initial="initial"
                                whileHover="hover"
                                whileTap="hover"
                            >
                                <motion.span
                                    className="absolute inset-0 bg-white origin-left"
                                    variants={{
                                        initial: { scaleX: 0 },
                                        hover: { scaleX: 1 },
                                    }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                />
                                <motion.button className="z-10"
                                    variants={{
                                        initial: { color: "#ffffff", marginLeft: "0px" },
                                        hover: { color: "#000000", marginLeft: "10px" },
                                    }}
                                    transition={{ duration: 0.25 }}>
                                    Monolith Trade
                                </motion.button>
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-4 h-4 z-10"
                                    variants={{
                                        initial: { color: "#ffffff", marginRight: "0px" },
                                        hover: { color: "#000000", marginRight: "10px" },
                                    }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <path d="M13 5H19V11" />
                                    <path d="M19 5L5 19" />
                                </motion.svg>
                            </motion.div>
                        </li>
                        <li>
                            <motion.div className="border-t border-b py-2 border-slate-50 flex justify-between items-center relative overflow-hidden cursor-pointer"
                                initial="initial"
                                whileHover="hover"
                                whileTap="hover"
                            >
                                <motion.span
                                    className="absolute inset-0 bg-white origin-left"
                                    variants={{
                                        initial: { scaleX: 0 },
                                        hover: { scaleX: 1 },
                                    }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                />
                                <motion.button className="z-10"
                                    variants={{
                                        initial: { color: "#ffffff", marginLeft: "0px" },
                                        hover: { color: "#000000", marginLeft: "10px" },
                                    }}
                                    transition={{ duration: 0.25 }}>
                                    Contact us
                                </motion.button>
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-4 h-4 z-10"
                                    variants={{
                                        initial: { color: "#ffffff", marginRight: "0px" },
                                        hover: { color: "#000000", marginRight: "10px" },
                                    }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <path d="M13 5H19V11" />
                                    <path d="M19 5L5 19" />
                                </motion.svg>
                            </motion.div>
                        </li>
                        <li>
                            <motion.div className="border-t border-b py-2 border-slate-50 flex justify-between items-center relative overflow-hidden cursor-pointer"
                                initial="initial"
                                whileHover="hover"
                                whileTap="hover"
                            >
                                <motion.span
                                    className="absolute inset-0 bg-white origin-left"
                                    variants={{
                                        initial: { scaleX: 0 },
                                        hover: { scaleX: 1 },
                                    }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                />
                                <motion.button className="z-10"
                                    variants={{
                                        initial: { color: "#ffffff", marginLeft: "0px" },
                                        hover: { color: "#000000", marginLeft: "10px" },
                                    }}
                                    transition={{ duration: 0.25 }}>
                                    Instagram
                                </motion.button>
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-4 h-4 z-10"
                                    variants={{
                                        initial: { color: "#ffffff", marginRight: "0px" },
                                        hover: { color: "#000000", marginRight: "10px" },
                                    }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <path d="M13 5H19V11" />
                                    <path d="M19 5L5 19" />
                                </motion.svg>
                            </motion.div>
                        </li>
                    </ul>
                </motion.div>

            </motion.div>
        </>
    )
}