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
import pdf from '../assets/files/Yehia-Ashraf-cv.pdf';


import '../style/MyPage.css'
import { Link } from "react-scroll";// استيراد Link من react-scroll لعمل التمرير الناعم
//! react scroll is a library that allows you to create smooth scrolling navigation links in your React applications between different sections of your page.
function MyPage() {
    // class name for active link styling
   
    const activeClassName = "active";
   
     const [isOpen, setIsOpen] = useState(false);// for mobile menu toggle
    

  return (
      <>
          <header className=" fixed shadow-md  shadow-sky-300  shadow-[var(--sky)] flex justify-between w-full h-fit  items-center py-2.5 px-2 bg-[var(--darkblue)]  ">
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
                              duration={300} // سرعة الـ scroll بالمللي ثانية
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
                              duration={300}
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
                              duration={300}
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
                              duration={300}
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
                              duration={300}
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
                              duration={300}
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
                  <div id="text" className="flex flex-col gap-5  w-[100%] md:w-[100%]  xl:w-[55%] lg:w-[55%] h-[400px] jusstify-start items-center  lg:justify-start lg:items-start p-2   lg:ml-0  ">
                      <h1 id="name" className=" text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-[var(--light)]">
                          My Name Is <span className=" font-bold text-[var(--sky)]">Yehia Ashraf Aly</span>
                      </h1>
                      <p className="  pt-7 text-2xl md:text-3xl lg:text-3xl xl:text-5xl font-bold text-[var(--light)]">
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
                                  className=" text-[var(--sky)] font-bold text-2xl md:text-4xl lg:text-3xl xl:text-5xl"
                                  repeat={Infinity}
                              />
                          </span>
                      </p>
                      <div className=" mt-7 flex-col gap-10 flex justify-start items-center lg:justify-center lg:items-start w-full h-fit">
                          <div className=" flex flex-row gap-10 ">
                              <a
                                  href="https://drive.google.com/file/d/1K3026MKq1MHPw0srypnYOacN0SdUw_dW/view?usp=drive_link"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className=" px-3 py-2 shadow-sm shadow-sky-300 drop-shadow-sm drop-shadow-sky-300  hover:shadow-xl hover:shadow-sky-300 text-xl w-fit text-[var(--sky)] border-2 border-[var(--sky)] rounded-3xl cursor-pointer hover:translate-y-1 hover:bg-[var(--sky)] hover:text-[var(--light)] transition-all duration-300">
                                  {" "}
                                  View My CV
                              </a>
                              <a
                                  href={pdf}
                                  download="Yehia-Ashraf-cv.pdf"
                                  className=" px-3 py-2 shadow-sm shadow-sky-300  drop-shadow-sm drop-shadow-sky-300 hover:shadow-xl hover:shadow-sky-300 text-xl w-fit text-[var(--sky)] border-2 border-[var(--sky)] rounded-3xl cursor-pointer hover:translate-y-1 hover:bg-[var(--sky)] hover:text-[var(--light)] transition-all duration-300">
                                  {" "}
                                  Download CV
                              </a>
                          </div>
                          <div className="  mt-6 flex flex-row gap-12 text-[var(--sky)] ">
                              <a href="https://www.linkedin.com/in/yehia-aly-6a606234a/" target="_blank">
                                  {" "}
                                  <FaLinkedinIn
                                      className=" border-2 border-[var(--sky)] rounded-full shadow-sm shadow-sky-300  drop-shadow-sm drop-shadow-sky-300 hover:shadow-xl hover:shadow-sky-300 w-fit h-fit hover:text-[var(--light)] hover:bg-[var(--sky)] hover:translate-y-0.5 transition-all duration-300 p-2 text-2xl"
                                      size={20}
                                  />{" "}
                              </a>
                              <a href="https://www.facebook.com/yahia.ashraf.779205/" target="_blank">
                                  {" "}
                                  <FaFacebookF
                                      className=" border-2 border-[var(--sky)] rounded-full w-fit h-fit hover:text-[var(--light)] shadow-sm shadow-sky-300  drop-shadow-sm drop-shadow-sky-300 hover:shadow-xl hover:shadow-sky-300 hover:bg-[var(--sky)] hover:translate-y-0.5 transition-all duration-300 p-2 text-2xl"
                                      size={20}
                                  />
                              </a>
                              <a href="https://www.instagram.com/yahia3975/" target="_blank">
                                  {" "}
                                  <FaInstagram
                                      className=" border-2 border-[var(--sky)] w-fit h-fit rounded-full hover:text-[var(--light)] hover:bg-[var(--sky)] shadow-sm shadow-sky-300  drop-shadow-sm drop-shadow-sky-300 hover:shadow-xl hover:shadow-sky-300 hover:translate-y-0.5 transition-all duration-300 p-2 text-2xl"
                                      size={20}
                                  />
                              </a>
                              <a href="https://github.com/YahiaAshraf-CS" target="_blank">
                                  {" "}
                                  <FaGithub
                                      className=" border-2 border-[var(--sky)] rounded-full w-fit h-fit hover:text-[var(--light)] hover:bg-[var(--sky)] hover:translate-y-0.5 shadow-sm shadow-sky-300    drop-shadow-sm drop-shadow-sky-300 hover:shadow-xl hover:shadow-sky-300 transition-all duration-300 p-2 text-2xl"
                                      size={20}
                                  />
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className=" w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                      {" "}
                      <img id="yehia" src={yehia} className=" w-[100%] rounded-full  h-[100%]" alt="" />
                  </div>
              </main>
          </section>
          

          {/*section2 about section*/}
          <section id="about" className=" h-fit w-full border-2 border-[var(--sky)] bg-[var(--darkblue)]">
              <h2 className=" text-[var(--sky)] text-center font-bold mt-15 text-4xl md:text-5xl lg:text-6xl xl:text-7xl">About Me</h2>
              <div className=" w-full h-full border-2 border-[var(--sky)] flex flex-col gap-x-25 px-8 py-2 mt-10  justify-start items-center  lg:justify-around lg:items-center xl:justify-start">
                  <div id="About_text " className="w-[100%] h-fit mt-16 lg:w-[100%] lg:h-fit xl:w-[100%] xl:h-fit text-xl">
                      <p className="text-[var(--light)]  space-x-0.5  text-xl">
                          {" "}
                          My name is <span className=" font-bold text-[var(--sky)]">Yehia Ashraf Aly</span>. Iam a computer science student at{" "}
                          <span className=" font-bold text-[var(--sky)]">Nile University</span>. Iam a <span className=" font-bold text-[var(--sky)]">Front-end Developer</span> &{" "}
                          <span className=" font-bold text-[var(--sky)]">UI/UX Designer</span>, I am passionate about web development and I am always looking for new challenges to improve my skills. I
                          am aspiring to become a <span className=" font-bold text-[var(--sky)]">full stack developer</span>.
                      </p>
                  </div>
                  <div id="Img_swiper" className="w-[100%] h-[50%] lg:w-[100%] lg:h-[100%] xl:w-[100%] xl:h-[100%]">
                      {" "}
                      <h1>yehia</h1>
                  </div>
              </div>
          </section>

          {/*section3 skills section*/}
          <section id="skills" className=" h-screen bg-[var(--darkblue)]">
              <h1>skills</h1>
          </section>

          {/*section4 future skills section*/}
          <section id="future-skills" className=" h-screen bg-[var(--darkblue)]">
              <h1>future skills</h1>
          </section>

          {/*section5 projects section*/}
          <section id="projects" className=" h-screen bg-[var(--darkblue)]">
              {" "}
              <h1>projects</h1>{" "}
          </section>

          {/*section6 contact section*/}
          <section id="contact" className=" h-screen bg-[var(--darkblue)]">
              {" "}
              <h1>contact</h1>
          </section>

          {/*footer section*/}
          <footer className=" h-screen bg-[var(--darkblue)]">
              {" "}
              <h1>footer</h1>
          </footer>
      </>
  );
}

export default MyPage
