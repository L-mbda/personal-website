'use client';
import { Projects } from '@/components/Projects';
import { Research } from '@/components/Research';
import '@/css/index.css'
import { BiLogoGithub, BiLogoYoutube } from "react-icons/bi";
import Image from 'next/image';

export default function Home() {
  let descriptor = ["Programmer", "Student", "Researcher", "Developer", "YouTuber", "Gamer"]
  if (typeof window !== 'undefined') {
    let c = 0;
    setInterval(() => {
      (document.getElementById("descriptor") as HTMLElement).innerHTML = descriptor[c];
      c++;
      if (c >= descriptor.length) {
        c = 0;
      }
    }, 2000);
  }
  return (
    <>
      <div className="cont">
        <h1><span className="mono">Hi, I&apos;m</span> <span className="playrightnz" id="pnz">Dheeraj (de-y).</span><br /> I am a <span id="descriptor">person with many interests</span>.</h1>
        <div className='socials'>
          <a className='youtube' href='https://youtube.com/@de-y'><BiLogoYoutube /></a>
          <a className='github' href='https://github.com/de-y'><BiLogoGithub /></a>
        </div>
      </div>
      <div className='about' id='about'>
        <h1>About Me</h1>
        <div className='separator'>
          <div className='about-left'>
            <p className='aboutabout'>I am a rising junior at <a href='https://sandyridge.caslv.org/'>CASLV Sandy Ridge Campus</a>, where I am the president of the Hack Club Chapter and the president of the Science Olympiad Club. My main interests are within programming, chemistry, research, and medicine, with me being involved in several projects and taking science courses at school.</p>
            <h2>Stats</h2>
            <ul className='stats'>
              <li>Age: 16</li>
              <li>Location: Las Vegas, Nevada</li>
              <li>Interests: Programming, Chemistry, Medicine, Research</li>
              <li>Favorite Language: Python</li>
              <li>Favorite Color: Green 🟢</li>
            </ul>
          </div>
          <div className='about-right'>
            <Image src='/images/detroitgmhq.jpg' alt='Detroit GM HQ' height={375.40849673202614379084967320261} width={500} />
            <p>Photo of the GM Headquarters in Detroit, Michigan</p>
          </div>
        </div>
      </div>
      <Projects />
      <Research />
    </>
  );
}
