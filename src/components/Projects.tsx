'use client';
import '@/css/components/projects.css'
import { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';

export function Projects() {
    let [loadingStatus, setLoadingStatus] = useState(true);
    let projects = []
    fetch('/api/get_recent_projects').then(res => res.json().then(data => {
        projects.push(data['recentProject'])
        projects.push(data['secondRecentProject'])
        setLoadingStatus(false)
    }))
    return (
        <>
            {loadingStatus ? (
                <div className='projects'>
                    <h1>Loading recent projects...</h1>
                    <div className='proj-grid'>
                        <a className="recent-proj loading_proj">
                        </a>
                        <div className="proj-group-vert">
                            <a className='second-proj loading_proj'>
                            </a>
                            <a className='visit-gallery' href='/projects'>
                                <p>Visit the gallery <BsArrowRight className='arrow' /></p>
                            </a>
                        </div>
                    </div>
                </div>
            ) : (
                    <div className='projects'>
                        <h1>My most recent projects among those in the gallery.</h1>
                        <div className='proj-grid'>
                            {/* <a href={projects[0]['name']} className="recent-proj">
                                <h2>{projects[0]['name']}</h2>
                                <p>{projects[0]['description']}</p>
                            </a>
                            <div className="proj-group-vert">
                                <a className='second-proj'>
                                    <h2>{projects[0]['name']}</h2>
                                </a>
                                <a className='visit-gallery' href='/projects'>
                                    <p>Visit the gallery <BsArrowRight className='arrow' /></p>
                                </a>
                            </div> */}
                        </div>
                    </div>
                )
            }
        </>
    )
}