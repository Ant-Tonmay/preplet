import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import Link from "next/link";

const Home: NextPage = () => {
  let { loginStatus, loading } = useContext(AuthContext);
  if (loading) return <h4>Loading...</h4>;
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className="  font-Jost">
        {/* <!--Header--> */}
        <header>
          <nav className="container flex items-center py-4  mt-2 sm:mt-2">
            <div className="mt-2 flex w-screen justify-between">
              <ul className="hidden sm:flex flex-1  items-center gap-12 text-midnight font-semibold  text-sm pl-9">
                <img className="" height="70" width="100" src="./img/pic.jpg" />
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Practice</li>
                <li className="cursor-pointer">Test</li>
                <li className="cursor-pointer">About</li>
              </ul>
              <Link href="/Signup">
                <button
                  type="button"
                  className=" text-red-600 rounded-md  px-7 py-2.5  border-red-600 border-2"
                >
                  Sign up
                </button>
              </Link>
            </div>
            {/* <!-- <div className="flex sm:hidden flex-1 justify-end">
                <i className=" fa-solid fa-bars"></i>
            </div> --> */}
          </nav>
        </header>

        {/* <!--hero--> */}
        <section className="relative  py-1 mt-1 lg:mt-1 bg-origin-padding p-4  ">
          <div className="container flex flex-col lg:flex-row items-center gap-12 mt-1 lg:mt-1 max-w-screen-xl rounded-3xl  bg-gradient-to-r from-purple-700 to-pink-300">
            <div className="flex flex-1 flex-col items-center lg:items-start pl-6">
              <h2 className="text-white font-bold text-4xl md:text-4 lg:text-6xl text-center lg:text-left  mb-6">
                Crack JELET with PrepLet
              </h2>
              <p className="text-white text-lg text-center lg:text-left mb-6">
                Practice previous year questions, clear doubts through
                preplet-largest website for JELET Preperation!!
              </p>

              <div className="flex justify-center flex-wrap gap-6 "></div>
              <button
                type="button"
                className="btn btn-purple hover:bg-spurple hover:text-black-bg"
              >
                Get started
              </button>
            </div>

            <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
              <img
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                src="./img/3394876 1.png"
                alt=""
              />
            </div>
          </div>
        </section>

        {/* <!-- features --> */}
        <section>
          <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
            <h1 className="text-5xl text-center text-midnight font-semibold mt-10">
              Why us?
            </h1>
            <p className="text-center text-black font-light mt-4">
              Comprehensive learning program, practice sets, previous years
              questions of Jelet.{" "}
            </p>
          </div>
        </section>
        {/* <!-- feature2 --> */}
        <section className="py-20 mt-20 px-24">
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-xl mt-16 ">
            <div className="flex flex-col rounded-md shadow-md">
              <div className="p-6 flex flex-col items-center">
                <img src="" alt="" />
                <h3 className="mt-5 mb-2 text-midnight font-semibold text-lg">
                  <a href="">Learn from the best</a>
                </h3>
              </div>
            </div>
            <div className="flex flex-col rounded-md shadow-md">
              <div className="p-6 flex flex-col items-center">
                <img src="" alt="" />
                <h3 className="mt-5 mb-2 text-midnight font-semibold text-lg">
                  <a href="">Detailed score Analysis</a>
                </h3>
              </div>
            </div>
            <div className="flex flex-col rounded-md shadow-md">
              <div className="p-6 flex flex-col items-center">
                <img src="" alt="" />
                <h3 className="mt-5 mb-2 text-midnight font-semibold text-lg">
                  <a href="">Complete study material</a>
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- hero2 --> */}
        <section className="relative">
          <div className="container flex flex-col lg:flex-row items-center gap-12 mt-8 lg:mt-28 pl-10">
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h2 className="text-black text-4xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                Practice Questions of all Subjects
              </h2>

              <div className="flex justify-center flex-wrap gap-6"></div>
              <button
                type="button"
                className="btn btn-purple hover:bg-spurple hover:text-black-bg"
              >
                Get started
              </button>
            </div>

            <div className="flex justify-start flex-1 flex-col  mb-10 md:mb-16 lg:mb-0 z-10">
              <div className="flex flex-row space-x-40 my-4 pl-6">
                <button
                  type="button"
                  className="btn btn-purple hover:bg-spurple hover:text-black-bg h-16 w-48"
                >
                  Mathematics
                </button>

                <button
                  type="button"
                  className="btn btn-purple hover:bg-spurple hover:text-black-bg h-16 w-48 "
                >
                  Physics
                </button>
              </div>
              <div className="flex flex-row space-x-40 my-4 pl-6">
                <button
                  type="button"
                  className="btn btn-purple hover:bg-spurple hover:text-black-bg h-16 w-48"
                >
                  Chemistry
                </button>
                <button
                  type="button"
                  className="btn btn-purple hover:bg-spurple hover:text-black-bg h-16 w-48 text-sm"
                >
                  Fundamentals of Electricals & Electronics
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- footer --> */}
        <section className=" py-10 mt-4 lg:mt-4 px-8">
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-screen mt-8 rounded-3xl bg-violet-700 pl-5">
            <div className="flex flex-col rounded-md pb-8">
              <h3 className="mt-5 mb-2 text-white font-semibold text-lg">
                <a href="">About us</a>
              </h3>
              <div className="flex flex-col space-y-4 text-white text-sm">
                <div>
                  PrepLet, We are a group of students who thought of an idea to
                  make a comrehensive website for JELET Aspirants, and here we
                  are.
                </div>
                <div>Jadavpur, kolkata 32, West Bengal, India</div>
                <div>+919007367689</div>
                <div>support@preplet.com</div>
              </div>
            </div>

            <div className="flex flex-col rounded-md ">
              <h3 className="mt-5 mb-2 text-white font-semibold text-lg">
                <a href="">popular links</a>
              </h3>
            </div>
            <div className="flex flex-col rounded-md text-white ">
              <h3 className="mt-5 mb-2  font-semibold text-lg">
                <a href="">Newsletter</a>
              </h3>
              <div className="text-sm">
                Subscribe to our newsletter for free materials
              </div>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
};

export default Home;
