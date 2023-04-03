import About from '@/components/About'
import Contact from '@/components/Contact'
import WorkExperience from '@/components/WorkExperience'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Skills from '@/components/Skills'
import { Experience, PageInfo, Project, SkillType, Social, Video } from '@/typings'
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchExperiences } from '../utils/fetchExperiences';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSocials } from '../utils/fetchSocials';
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Image1 from '../public/assets/serious-about-img.png';

interface Props {
  pageInfo: PageInfo[];
  experiences: Experience[];
  skills: SkillType[];
  projects: Project[];
  socials: Social[];
}

export default function Home({ 
  pageInfo, experiences, skills, projects, socials 
  }: Props) {
  return (
    <div className='bg-[#1e3348] text-[#7aa0c7] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-[#34597e] scrollbar-thumb-[#4a7eb3]'>
      <Head>
        <title>Cerulean Media, LLC. Company Site</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header socials={socials} />

      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>

      <section id='skills' className='snap-start'>
        <Skills skills={skills} />
      </section>

      <section id='portfolio' className='snap-start'>
        <Portfolio projects={projects} />
      </section>

      <section id='contact' className='snap-start'>
        <Contact pageInfo={pageInfo}/>
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <Image 
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              src={Image1}
              alt='Photo of Michael and link back to Home page'
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo[] = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: SkillType[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};