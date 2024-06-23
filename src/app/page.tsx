'use client';
import '@/css/index.css'
import { BiLogoYoutube } from "react-icons/bi";

export default function Home() {
  let descriptor = ["Programmer", "Student", "Researcher", "Developer", "YouTuber", "Gamer"]
  if (typeof window !== 'undefined') {
    let c = 0;
    setInterval(() => {
      (document.getElementById('descriptor') as HTMLElement).innerHTML = descriptor[c];
      c++;
      if (c >= descriptor.length) {
        c = 0;
      }
    }, 2000);
  }
  return (
    <>
      <div className="cont">
        <h1><span className="mono">Hi, I'm</span> <span className="playrightnz" id="pnz">de-y.</span><br /> I am a <span id="descriptor">person with many interests</span>.</h1>
        <div className='socials'>
          <a className='youtube' href='https://youtube.com/@de-y'><BiLogoYoutube /></a>
        </div>
      </div>
      <div className='d'>
        <p>EJEs</p>
      </div>
    </>
  );
}
