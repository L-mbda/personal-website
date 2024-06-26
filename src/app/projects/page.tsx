'use client';
import '@/css/projects_page.css'
import { useEffect, useState } from 'react';

export default function AboutPage() {
    let [loadingStatus, setLoadingStatus] = useState(true);
    let [project, setProjects] = useState(null)

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
                setProjects(repo_names.reverse())
                setLoadingStatus(false)
            } catch (e) {
                // @ts-ignore
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
            <h2 className='welcome-to-projects'>Welcome to projects! This is a comprehensive grid of all of the projects (or repos) that I have worked on in the past, it is ordered from recent to oldest by creation date.</h2>
                {loadingStatus ? (
                    <>
                        <h1 className='loading-projects'>The projects are currently loading. This may take a while depending on your internet connection.</h1>
                    </>
                ) : (
                    <>
                        <div className='projects-grid'>
                            {/* @ts-ignore */}
                            {project.map((projects, i) => {
                                return (
                                    <a key={i} className='card' href={`${projects.url}`}>
                                        <h2>{projects.name}</h2>
                                        <p>{projects.description}</p>
                                    </a>
                                )
                            })}
                        </div>
                    </>
                )}
        </>
    )
}