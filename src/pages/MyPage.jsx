import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
import yehia from '../assets/images/yehia3.jpg';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import '../style/MyPage.css'
import { Link } from "react-scroll";// استيراد Link من react-scroll لعمل التمرير الناعم
//! react scroll is a library that allows you to create smooth scrolling navigation links in your React applications between different sections of your page.
function MyPage() {
    // class name for active link styling
   
    const activeClassName = "active";
     const [isOpen, setIsOpen] = useState(false);// for mobile menu toggle
    

  return (
      <>
          <header className=" fixed shadow-md  shadow-sky-300  shadow-[var(--sky)] flex justify-between w-full h-fit  items-center py-4 px-2 bg-transparent  ">
              {/*navigation bar*/}
              <nav className=" flex justify-between w-full h-fit  items-center px-2 py-2 ">
                  <h1 className=" drop-shadow-2xl drop-shadow-[var(--sky)]  hover:scale-110 hover:-translate-y-1 cursor-pointer transform-3d transition-all duration-400  hover:text-[var(--light)] text-4xl text-[var(--sky)] font-extrabold ">
                      {" "}
                      Yehia Ashraf
                  </h1>

                  <div className=" md:hidden">
                      <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none cursor-pointer">
                          {isOpen ? (
                              <IoClose className=" text-3xl  text-[var(--light)] relative hover:scale-110 hover:-translate-y-1 cursor-pointer focus:text-[var(--sky)] hover:text-[var(--sky)] transition-all duration-300" />
                          ) : (
                              <FaBars className=" text-3xl text-[var(--light)] relative hover:scale-110 hover:-translate-y-1 cursor-pointer focus:text-[var(--sky)] hover:text-[var(--sky)] transition-all duration-300" />
                          )}
                      </button>
                      {isOpen && (
                          <div id="mobile-menu" className=" md:hidden absolute flex flex-col rounded-2xl cursor-pointer right-0 top-[63%] w-48 bg-[var(--darkblue)] px-4 pt-2 pb-3 space-y-3">
                              <Link
                                  to="home"
                                  spy={true}
                                  smooth={true}
                                  duration={500}
                                  className={
                                      "nav-link hover:scale-110 hover:text-[var(--light)] hover:bg-[var(--sky)]  hover:border-2 hover:border-[var(--sky)] rounded-xl px-2 py-2 hover:-translate-y-1 cursor-pointer text-[var(--sky)] transition-all duration-300"
                                  }
                                  activeClass={activeClassName}>
                                  Home
                              </Link>
                              <Link
                                  to="about"
                                  spy={true}
                                  smooth={true}
                                  duration={500}
                                  className={
                                      "nav-link hover:scale-110 hover:-translate-y-1 cursor-pointer text-[var(--sky)] hover:text-[var(--light)] hover:bg-[var(--sky)]  hover:border-2 hover:border-[var(--sky)] rounded-xl px-2 py-2 transition-all duration-300"
                                  }
                                  activeClass={activeClassName}>
                                  About
                              </Link>
                              <Link
                                  to="projects"
                                  spy={true}
                                  smooth={true}
                                  duration={500}
                                  className={
                                      "nav-link hover:scale-110 hover:text-[var(--light)] hover:bg-[var(--sky)]  hover:border-2 hover:border-[var(--sky)] rounded-xl px-2 py-2 hover:-translate-y-1 cursor-pointer text-[var(--sky)] transition-all duration-300"
                                  }
                                  activeClass={activeClassName}>
                                  Projects
                              </Link>
                              <Link
                                  to="skills"
                                  spy={true}
                                  smooth={true}
                                  duration={500}
                                  className={
                                      "nav-link hover:text-[var(--light)] hover:bg-[var(--sky)]  hover:border-2 hover:border-[var(--sky)] rounded-xl px-2 py-2 hover:scale-110 hover:-translate-y-1 cursor-pointer text-[var(--sky)] transition-all duration-300"
                                  }
                                  activeClass={activeClassName}>
                                  Skills
                              </Link>
                              <Link
                                  to="future-skills"
                                  spy={true}
                                  smooth={true}
                                  duration={500}
                                  className={
                                      "nav-link hover:text-[var(--light)] hover:bg-[var(--sky)]  hover:border-2 hover:border-[var(--sky)] rounded-xl px-2 py-2 hover:scale-110 hover:-translate-y-1 cursor-pointer text-[var(--sky)] transition-all duration-300"
                                  }
                                  activeClass={activeClassName}>
                                  Future Skills
                              </Link>
                              <Link
                                  to="contact"
                                  spy={true}
                                  smooth={true}
                                  duration={500}
                                  className={
                                      "nav-link hover:text-[var(--light)] hover:bg-[var(--sky)]  hover:border-2 hover:border-[var(--sky)] rounded-xl px-2 py-2 hover:scale-110 hover:-translate-y-1 cursor-pointer text-[var(--sky)] transition-all duration-300"
                                  }
                                  activeClass={activeClassName}>
                                  Contact
                              </Link>
                          </div>
                      )}
                  </div>

                  <ul className=" hidden md:flex  gap-7 text-lg font-semibold text-[var(--light)]">
                      <li>
                          <Link
                              to="home" // ده الـ ID بتاع السيكشن
                              spy={true} // عشان يتابع إنت فين
                              smooth={true} // عشان الـ scroll الناعم
                              duration={500} // سرعة الـ scroll بالمللي ثانية
                              // دالة بتتنفذ لما اللينك يبقى في الحالة النشطة
                              className={"nav-link hover:scale-110 hover:-translate-y-1 cursor-pointer hover:text-[var(--sky)] transition-all duration-300"}
                              activeClass={activeClassName} // كلاس هيتضاف للينك لما توصل للسيكشن
                          >
                              Home
                          </Link>
                      </li>
                      <li>
                          <Link
                              to="about"
                              spy={true}
                              smooth={true}
                              duration={500}
                              className="nav-link hover:scale-110 hover:-translate-y-1 cursor-pointer hover:text-[var(--sky)] transition-all duration-300"
                              activeClass={activeClassName}>
                              About
                          </Link>
                      </li>
                      <li>
                          <Link
                              to="skills"
                              spy={true}
                              smooth={true}
                              duration={500}
                              className="nav-link hover:scale-110 hover:-translate-y-1 cursor-pointer hover:text-[var(--sky)] transition-all duration-300"
                              activeClass={activeClassName}>
                              Skills
                          </Link>
                      </li>
                      <li>
                          <Link
                              to="future-skills"
                              spy={true}
                              smooth={true}
                              duration={500}
                              className={"nav-link hover:scale-110 hover:-translate-y-1 cursor-pointer hover:text-[var(--sky)] transition-all duration-300"}
                              activeClass={activeClassName}>
                              Future Skills
                          </Link>
                      </li>
                      <li>
                          <Link
                              to="projects"
                              spy={true}
                              smooth={true}
                              duration={500}
                              className="nav-link hover:scale-110 hover:-translate-y-1 cursor-pointer hover:text-[var(--sky)] transition-all duration-300"
                              activeClass={activeClassName}>
                              Projects
                          </Link>
                      </li>
                      <li>
                          <Link
                              to="contact"
                              spy={true}
                              smooth={true}
                              duration={500}
                              className="nav-link hover:scale-110 hover:-translate-y-1 cursor-pointer hover:text-[var(--sky)] transition-all duration-300"
                              activeClass={activeClassName}>
                              Contact
                          </Link>
                      </li>
                      {/* كرر لباقي اللينكات */}
                  </ul>
              </nav>
          </header>

          {/*section1 home section*/}
          <section id="home" className="  lg:h-screen md:h-fit h-fit xl:h-screen bg-[var(--darkblue)] flex justify-center items-center ">
              <main className="  flex-col-reverse pt-29 sm:pt-29 md:pt-25 lg:pt-15 xl:pt-15  ] w-full h-full flex sm:flex-col-reverse md:flex-col-reverse justify-evenly items-center   lg:flex-row xl:flex-row gap-5 ">
                  <div id="text" className="flex flex-col   w-[90%] md:w-[90%]  xl:w-[55%] lg:w-[55%] h-[400px] text-start justify-start items-start p-2   lg:ml-0  ">
                      <h1 id="name" className=" text-2xl md:text-3xl lg:text-6xl xl:text-7xl font-bold text-[var(--light)]">
                          My Name Is <span className=" font-bold text-[var(--sky)]">Yehia Ashraf</span>
                      </h1>
                      <p className=" pl-5 pt-7 text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--light)]">
                          Iam a{" "}
                          <span className=" font-bold text-[var(--sky)]">
                              <TypeAnimation
                                  sequence={[
                                      " Frontend Developer",
                                      2000, //2000 ms pause
                                      " UI/UX designer",
                                      2000,
                                      " Software Engineering",
                                      2000,
                                  ]}
                                  wrapper="span"
                                  speed={50}
                                  className=" text-[var(--sky)] font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl"
                                  repeat={Infinity}
                              />
                          </span>
                      </p>
                      <div className=" pl-5 mt-7 flex-col gap-4 flex justify-center items-start w-full h-fit">
                          <div className=" flex flex-row gap-10 ">
                              <a
                                  href="/portfolio/Yehia-Ashraf-cv.pdf"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className=" px-3 py-2 text-xl text-[var(--sky)] border-2 border-[var(--sky)] rounded-3xl cursor-pointer hover:translate-y-1 hover:bg-[var(--sky)] hover:text-[var(--light)] transition-all duration-300">
                                  {" "}
                                  View My CV
                              </a>
                              <a
                                  href="/portfolio/Yehia-Ashraf-cv.pdf"
                                  download="Yehia-Ashraf-cv.pdf"
                                  className=" px-3 py-2 text-xl text-[var(--sky)] border-2 border-[var(--sky)] rounded-3xl cursor-pointer hover:translate-y-1 hover:bg-[var(--sky)] hover:text-[var(--light)] transition-all duration-300">
                                  {" "}
                                  Download CV
                              </a>
                          </div>
                          <div className=" pl-2 mt-4 flex flex-row gap-10 text-[var(--sky)] ">
                              <a href="https://www.linkedin.com/in/yehia-aly-6a606234a/" target="_blank">
                                  {" "}
                                  <FaLinkedinIn className=' border-2 border-[var(--sky)] rounded-full hover:text-[var(--light)] hover:bg-[var(--sky)] hover:translate-y-0.5 transition-all duration-300 p-2 text-2xl' size={40} />{" "}
                              </a>
                              <a href="https://www.facebook.com/yahia.ashraf.779205/" target="_blank">
                                  {" "}
                                  <FaFacebookF className=' border-2 border-[var(--sky)] rounded-full hover:text-[var(--light)] hover:bg-[var(--sky)] hover:translate-y-0.5 transition-all duration-300 p-2 text-2xl' size={40} />
                              </a>
                              <a href="https://www.instagram.com/yahia3975/" target="_blank">
                                  {" "}
                                  <FaInstagram className=' border-2 border-[var(--sky)] rounded-full hover:text-[var(--light)] hover:bg-[var(--sky)] hover:translate-y-0.5 transition-all duration-300 p-2 text-2xl' size={40} />
                              </a>
                              <a href="https://github.com/YahiaAshraf-CS" target="_blank">
                                  {" "}
                                  <FaGithub className=' border-2 border-[var(--sky)] rounded-full hover:text-[var(--light)] hover:bg-[var(--sky)] hover:translate-y-0.5 transition-all duration-300 p-2 text-2xl' size={40} />
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className=" w-[400px] h-[400px]">
                      {" "}
                      <img id="yehia" src={yehia} className=" w-[100%] rounded-full  h-[400px]" alt="" />
                  </div>
              </main>
          </section>

          {/*section2 about section*/}
          <section id="about" className=" h-screen bg-blue-400">
              <h1>about</h1>
          </section>

          {/*section3 skills section*/}
          <section id="skills" className=" h-screen bg-green-400">
              <h1>skills</h1>
          </section>

          {/*section4 future skills section*/}
          <section id="future-skills" className=" h-screen bg-yellow-400">
              <h1>future skills</h1>
          </section>

          {/*section5 projects section*/}
          <section id="projects" className=" h-screen bg-pink-400">
              {" "}
              <h1>projects</h1>{" "}
          </section>

          {/*section6 contact section*/}
          <section id="contact" className=" h-screen bg-cyan-400">
              {" "}
              <h1>contact</h1>
          </section>

          {/*footer section*/}
          <footer className=" h-screen bg-indigo-400">
              {" "}
              <h1>footer</h1>
          </footer>
      </>
  );
}

export default MyPage
