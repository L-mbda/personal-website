'use client';
import '@/css/components/projects.css'
import { BsArrowRight } from 'react-icons/bs';

export function Projects() {
    return (
        <div className='projects'>
            <h1>My most recent projects among those in the gallery.</h1>
            <div className='proj-grid'>
                <a className="recent-proj">
                    <h2>Project</h2>
                    <p>Description</p>
                </a>
                <div className="proj-group-vert">
                    <div className='second-proj'>
                        <h2>Project</h2>
                    </div>
                    <a className='visit-gallery' href='/projects'>
                        <p>Visit the gallery <BsArrowRight className='arrow' /></p>
                    </a>
                </div>
            </div>
        </div>
    )
}