'use client';
import '@/css/components/projects.css'
import { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';

export function Projects() {
    let [loadingStatus, setLoadingStatus] = useState(true);
    let [projects, setRecentProjects] = useState(null)
    let [secondProjects, setSecondRecentProjects] = useState(null)

    useEffect(() => {
        async function yay() {
            try {
                let repo_names = []
                for (let i = 1; i < 3; i++) {
                    let c = (await fetch(`https://api.github.com/users/de-y/repos?page=${i}`))
                    // @ts-ignore
                    if (c.length != 0) {
                        c = await c.json()
                        for (let repo in c) {
                            // @ts-ignore
                            let [description, url, name, id] = [c[repo]['description'], c[repo]['html_url'], c[repo]['name'], c[repo]['id']]
                            repo_names.push({
                                'name': name,
                                'url': url,
                                'description': description || 'No description.',
                                'id': id
                            })
                        }                        
                    }        
                }
                repo_names.sort((a, b) => {
                    return a.id - b.id
                })
                // @ts-ignore
                setRecentProjects(repo_names[(repo_names.length)-1])
                // @ts-ignore
                setSecondRecentProjects(repo_names[(repo_names.length)-2])
                setLoadingStatus(false)   
            } catch (e) {
                // @ts-ignore
                setRecentProjects({'name': "Error setting recent project.", 'url': "#", "description": "An error occurred while fetching the recent project."})
                // @ts-ignore
                setSecondRecentProjects({'name': "Error setting recent project.", 'url': "#", "description": "An error occurred while fetching the recent project."})
                setLoadingStatus(false)
            }
        }
        yay()

        // Note that the following code is not needed as a result of us utilizing the client for the work.
        //     // fetch('/api/get_recent_projects').then(res => res.json().then(data => {

        //     setRecentProjects(data['recentProject'])
        //     setSecondRecentProjects(data['secondRecentProject'])
        //     setLoadingStatus(false)
        // }))
    }, [])
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
                            <a className='visit-gallery' href='https://github.com/de-y?tab=repositories'>
                                <p>View all projects on GitHub <BsArrowRight className='arrow' /></p>
                            </a>
                        </div>
                    </div>
                </div>
            ) : (
                    <div className='projects'>
                        <h1>My most recent coding projects among those in my GitHub.</h1>
                        <div className='proj-grid'>
                            {/* @ts-ignore */}
                            <a href={projects['url']} className="recent-proj">
                                {/* @ts-ignore */}
                                <h2>{projects['name']}</h2>
                                {/* @ts-ignore */}
                                <p>{`${projects['description']}`}</p>
                            </a>
                            <div className="proj-group-vert">
                                {/* @ts-ignore */}
                                <a href={secondProjects['url']} className='second-proj'>
                                {/* @ts-ignore */}
                                    <h2>{`${secondProjects['name']}`}</h2>
                                </a>
                                <a className='visit-gallery' href='/projects'>
                                    <p>View all projects in Projects Gallery <BsArrowRight className='arrow' /></p>
                                </a>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}