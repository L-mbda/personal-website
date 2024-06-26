
import '@/css/components/Footer.css'
import { BiLogoGithub, BiLogoYoutube } from 'react-icons/bi'
export function Footer() {
    let splashes = ["Sleep or no sleep? That is the question.","What is the meaning of life? 42.","Go show some love to Hack Club! ❤️","Peter's Award: Drink Java? Yes. Code Java? No.","Is there a limit to these splashes?","The moon is mine! 🌕 - Vector","Gotta... Do... More... Research", `Get ready! ${(new Date().getFullYear()) + 1}, here we come!`, `Coral Moment, I guess?`, '2024 Mr. Adem incident']
    let splash = splashes[Math.floor(Math.random() * splashes.length)];
    return (
        <footer className='footer'>
            <div className='mecorner'>
                <div className='top'>
                    <h1 className='name'>de-y</h1>
                    <p>{splash}</p>
                </div>
                <div className='socialbar'>
                    <a className='youtube' href='https://youtube.com/@de-y'><BiLogoYoutube /></a>
                    <a className='github' href='https://github.com/de-y'><BiLogoGithub /></a>
                </div>
            </div>
            <div className='links-section'>
                <div className='link-column'>
                    <h2>Site</h2>
                    <a href='/#about'>About</a>
                    <a href='/research'>Research</a>
                    <a href='/projects'>Projects</a>
                    <a href='/contact'>Contact</a>
                </div>
            </div>
        </footer>
    )
}