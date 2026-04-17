import Link from 'next/link';
import { PageInfo } from '@/typings';
import Image from 'next/image';
import ceruleanLogo from '@/public/assets/ceruleanLogo_2.png';

type Props = {
  pageInfo: PageInfo[];
};

function Hero({ pageInfo }: Props) {
  return (
    <div className="h-screen flex flex-col space-y-6 items-center justify-center text-center overflow-hidden">

      {/* Logo */}
      <div className="animate-jump-in animate-once animate-ease-in">
        <Image
          src={ceruleanLogo}
          alt="Cerulean Media logo"
          width={700}
          height={700}
          priority
        />
      </div>

      {/* Text + nav buttons — fade in after logo lands */}
      <div className="animate-fade-up animate-once animate-ease-in animate-delay-500">
        <h2 className="text-sm uppercase text-[#51b4ff] pb-2 tracking-[5px] md:tracking-[15px]">
          {pageInfo[0]?.role}
        </h2>

        <div className="pt-5 flex flex-wrap justify-center gap-2">
          <Link href="#portfolio">
            <button className="heroButton">Videography</button>
          </Link>
          <Link href="#audio">
            <button className="heroButton">Audio Engineering</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Services</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
