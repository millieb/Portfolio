'use client'

import Head from "next/head";
import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import Image from "next/image";
import mb from 'public/mb.png';
import web1 from '/public/dx-web-1.jpg';
import web2 from '/public/dx-web-2.jpg';
import project1 from '/public/TicketNotifications.png';
import project2 from '/public/ServerChecklist.png';
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
      <div className={darkMode ? "dark" : ""}>
        <Head>
            <title>Mildred Brito Portfolio</title>
            <meta name="description" content="Online portfolio" />
        </Head>

        <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-background-color">

            {/* Home Section */}

            <section className="min-h-screen">
                <nav className="py-10 mb-12 flex justify-between">
                    <h1 className="text-xl font-burtons dark:text-custom-lila">MB</h1>
                    <ul className="flex items-center">
                        <li>
                            <BsFillMoonStarsFill className="cursor-pointer text-2xl"
                            onClick={() => setDarkMode(!darkMode)}/>
                        </li>
                        <li>
                            <a className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-4 py-2 rounded-md ml-8"
                               href="https://drive.google.com/file/d/1oeyNDZzyMSGQRLVw_9Ay-abT9JI_3atA/view?usp=drive_link" target="_blank">
                                Resume
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="text-center p-10">
                    <h2 className="text-5xl py-2 font-medium text-custom-lila md:text-6xl dark:text-custom-pink">Mildred Brito</h2>
                    <h3 className="text-2xl py-2 md:text-3xl dark:text-custom-lila">Full Stack Software Developer</h3>
                    <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-custom-white">Passionate about crafting innovative software with my experience in JavaScript/ReactJS and
                        Java/Spring boot, I’m dedicated to staying updated with industry trends and thrive in
                        collaborating with diverse teams for impactful solutions.</p>
                </div>
                <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
                    <a href="https://www.linkedin.com/in/mildredbrito/" target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin className="dark:text-custom-white"/>
                    </a>
                    <a href="https://github.com/millieb" target="_blank" rel="noopener noreferrer">
                        <AiFillGithub className="dark:text-custom-white"/>
                    </a>
                </div>
                <div className="relative mx-auto mt-20 w-80 h-80 overflow-hidden md:h-96 md:w-96">
                    <Image unoptimized src={mb} layout="fill" objectFit="cover" className="rounded-full" alt="cartoon portrait of Mildred Brito"/>
                </div>
            </section>

            {/* Work Section */}
            <section>
                <div>
                    <h3 className="text-3xl py-10 mt-8 font-medium text-custom-lila">
                        Work
                    </h3>
                </div>

                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-5">
                        {/* Project 1 Card */}
                        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                            <Image unoptimized src={web1} width={'100%'} height={'100%'} layout="responsive" className="rounded-lg object-cover" alt="Webstie 1"/>
                            <h3 className="text-lg font-medium pt-8 pb-2">DataXport Careers</h3>
                            <p className="text-gray-800 py-2">Restructured the career section of the company&apos;s website, which now displays
                                current openings, teams, and mission/vision.</p>
                            <a href="https://jobs.dataxport.net/careers.html" target="_blank" rel="noopener noreferrer">
                                <button type="button" className="inline-block px-8 py-2 mb-0 font-bold text-center
                            uppercase align-middle transition-all bg-transparent border border-solid rounded-lg
                            shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102
                            active:shadow-soft-xs tracking-tight-soft border-custom-purple text-custom-purple
                            hover:border-custom-purple hover:bg-transparent hover:text-custom-purple hover:opacity-75
                            hover:shadow-none active:bg-custom-purple active:text-white active:hover:bg-transparent
                            active:hover:text-custom-purple">
                                    View Project
                                </button>
                            </a>
                        </div>
                        {/* Project 2 Card */}
                        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                            <Image unoptimized src={web2} width={'100%'} height={'100%'} layout="responsive" className="rounded-lg object-cover" alt="Webstie 2"/>
                            <h3 className="text-lg font-medium pt-8 pb-2">DataXport Careers 2</h3>
                            <p className="text-gray-800 py-2">An extension to their Careers website that informs about
                                the responsibilities, benefits, and requirements of the call center position.</p>
                            <a href="https://jobs.dataxport.net/ccinformation.html" target="_blank" rel="noopener noreferrer">
                                <button type="button" className="inline-block px-8 py-2 mb-0 font-bold text-center
                            uppercase align-middle transition-all bg-transparent border border-solid rounded-lg
                            shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102
                            active:shadow-soft-xs tracking-tight-soft border-custom-purple text-custom-purple
                            hover:border-custom-purple hover:bg-transparent hover:text-custom-purple hover:opacity-75
                            hover:shadow-none active:bg-custom-purple active:text-white active:hover:bg-transparent
                            active:hover:text-custom-purple">
                                    View Project
                                </button>
                            </a>
                        </div>
                        {/* Project 3 Card */}
                        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                            <Image unoptimized src={project1} width={'100%'} height={'100%'} layout="responsive" className="rounded-lg object-cover" alt="Webstie 2"/>
                            <h3 className="text-lg font-medium pt-8 pb-2">Ticket Notifications</h3>
                            <p className="text-gray-800 py-2">Automated a ticket system to display Windows 10
                                notifications after a set period, aiming to reduce response times.</p>
                        </div>
                        {/* Project 4 Card */}
                        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                            <Image unoptimized src={project2} width={'100%'} height={'100%'} layout="responsive" className="rounded-lg object-cover" alt="Webstie 2"/>
                            <h3 className="text-lg font-medium pt-8 pb-2">Server Checklist</h3>
                            <p className="text-gray-800 py-2">A Windows application designed to automate the daily process
                                of inspecting the server room, saving the relevant information into an Excel file.</p>
                        </div>
                    </div>
                </div>


            </section>

        </main>
      </div>
  )
}
