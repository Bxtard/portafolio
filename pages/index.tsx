import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
} from 'react-icons/ai';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bxtard portafolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-white first-letter px-10'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>Bxtard</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
              </li>
              <li>
                <Link href='#'>
                  <a className='bg-gradient-to-r from-black to-violet-900 text-white px-4 py-2 rounded-md ml-8'>
                    Resume
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <motion.h2
              className='text-5xl py-2 text-violet-800 font-medium'
              transition={{ duration: 2 }}
              animate={{
                color: ['#000000', '#000000', '#4f2097'],
                y: [-1000, 0, 0],
                scale: [0.5, 0.5, 1],
              }}
            >
              Bryan Estrada
            </motion.h2>
            <h3 className='text-2xl py-2'>Fullstack Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              voluptatibus ad beatae esse? Earum eos eum asperiores veniam,
              eaque aut quasi facere voluptatem numquam assumenda incidunt
              laboriosam? Asperiores, iure exercitationem!
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-500'>
            <Link href='https://www.linkedin.com/in/bxtard/'>
              <AiFillLinkedin className='cursor-pointer' />
            </Link>
            <Link href='https://github.com/bxtard/'>
              <AiFillGithub className='cursor-pointer' />
            </Link>
            <Link href='https://www.instagram.com/bxtrda/'>
              <AiFillInstagram className='cursor-pointer' />
            </Link>
            <Link href='https://www.youtube.com/channel/UCWqVSnCp3vc3kQh8f13WaAQ/'>
              <AiFillYoutube className='cursor-pointer' />
            </Link>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-violet-900 rounded-full w-80 h-80 mt-20 overflow-hidden'></div>
        </section>
        <section>
          <h3 className='text-3xl py-1'>Skills</h3>
          <p className='text-md py-2 leading-8 text-gray-800'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui
            labore aspernatur. Unde, officiis eaque esse, tenetur laborum
            asperiores et repellendus suscipit totam quia, saepe aliquid ullam
            temporibus ducimus reprehenderit!
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
