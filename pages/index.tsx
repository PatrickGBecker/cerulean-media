import About from '@/components/About';
import Contact from '@/components/Contact';
import WorkExperience from '@/components/WorkExperience';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Skills from '@/components/Skills';
import AudioComponent from '@/components/AudioComponent';
import {
  Experience,
  Genre,
  PageInfo,
  SkillType,
  Social,
  Video,
  Audio,
} from '@/typings';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import miniLogo from '../public/assets/mini-logo.png';

import { getPageStaticProps } from './api/getPageInfo';
import { getExperiencesStaticPops } from './api/getExperience';
import { getSkillsStaticProps } from './api/getSkills';
import { getSocialsStaticProps } from './api/getSocials';
import { getVideoStaticProps } from './api/getVideos';
import { getGenreStaticProps } from './api/getGenres';
import { getAudioStaticProps } from './api/getAudio';

interface Props {
  pageInfo: PageInfo[];
  experiences: Experience[];
  skills: SkillType[];
  socials: Social[];
  videos: Video[];
  genres: Genre[];
  audio: Audio[];
}
``;

export default function Home({
  pageInfo,
  experiences,
  skills,
  socials,
  videos,
  genres,
  audio,
}: Props) {
  return (
    <div className="bg-[#1e3348] text-[#7aa0c7] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-[#34597e] scrollbar-thumb-[#4a7eb3]">
      <Head>
        <title>Cerulean Media, LLC. Company Site</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mini-logo.ico" />
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="portfolio" className="snap-start">
        <Portfolio videos={videos} genres={genres} />
      </section>

      <section id="audio" className="snap-start">
        <AudioComponent audio={audio} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="contact" className="snap-start">
        <Contact pageInfo={pageInfo} />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              className="rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src={miniLogo}
              alt="logo of a camera wearing headphones"
              width={50}
              height={50}
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo = await getPageStaticProps();
  const experiences = await getExperiencesStaticPops();
  const skills = await getSkillsStaticProps();
  const socials = await getSocialsStaticProps();
  const videos = await getVideoStaticProps();
  const genres = await getGenreStaticProps();
  const audio = await getAudioStaticProps();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      socials,
      videos,
      genres,
      audio,
    },
    revalidate: 10,
  };
};
