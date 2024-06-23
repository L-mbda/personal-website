import '@/css/components/Footer.css'
import { BiLogoYoutube } from 'react-icons/bi'
export function Footer() {
    return (
        <footer className='footer'>
            <div className='mecorner'>
                <div className='top'>
                    <h1 className='name'>de-y</h1>
                    <p>[PLACE SOMETJHING HERE]</p>
                </div>
                <div className='socialbar'>
                    <a className='youtube' href='https://youtube.com/@de-y'><BiLogoYoutube /></a>
                </div>
            </div>
            <div className='links-section'>
                <div className='link-column'>
                    <h2>Links</h2>
                    <a href='/'>Projects</a>
                </div>
                <div className='link-column'>
                    <h2>Links</h2>
                </div>
            </div>
        </footer>
    )
}