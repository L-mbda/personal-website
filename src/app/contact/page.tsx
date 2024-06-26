import { BsDiscord, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import '@/css/contact.css'

export default async function Contact() {
    return (
        <div className="contact">
            <h1>You would like to contact me?</h1>
            <p>I&apos;m delighted! You can contact me through the following methods:</p>
            <ul>
                <a className="email" href="mailto:dj.chintapalli@gmail.com"><MdEmail /></a>
            </ul>
        </div>
    )
}