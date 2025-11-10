import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
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
          <section id="home" className=" h-screen bg-[var(--darkblue)] ">
              <h1>yehia</h1>
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
      </>
  );
}

export default MyPage
