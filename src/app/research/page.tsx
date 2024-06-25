'use client';
import'@/css/research_page.css'
import { useEffect, useState } from 'react';

export default function ResearchPag() {
    let [recentResearch, setRecentResearch] = useState(null);    
    let [otherResearch, setOtherResearch] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getResearch() {
            let research = await (await fetch('/api/research')).json()
            setRecentResearch(research[research.length - 1])
            let otherResearch = research.slice(0, research.length - 1)
            // @ts-ignore
            otherResearch.sort((a,b) => {return b.id - a.id})
            setOtherResearch(otherResearch)
            setLoading(false)
        }
        getResearch();
    },[])
    return (
        <>
            <div className='research'>
                <div className='research-header'>
                    <p><strong>Research</strong></p>
                </div>
                <div className='research-box'>
                    <div className='research-filter'>
                        <h1>Filter Results</h1>
                    </div>
                    <div className='research-content'>
                        {
                            loading ? (
                                <>
                                            <div className='recent'>
                                                <a className='recent-research loading'>
                                                    <h1></h1>
                                                    <p></p>
                                                </a>
                                            </div>
                                </>
                            ) : (
                                <>
                                    {/* @ts-ignore */}
                                    {(recentResearch['url'] === null && recentResearch['title'] == null && recentResearch['authors'] == null) ? (
                                        <>
                                            <div className='recent'>
                                                <a className='recent-research'>
                                                    <h1>Nothing found.</h1>
                                                    <p>There have been no papers or articles published by me, yet.</p>
                                                </a>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className='recent'>
                                                {/* @ts-ignore */}
                                                <a className='recent-research' href={`${recentResearch.url}`}>
                                                    {/* @ts-ignore */}
                                                    <h1>{recentResearch.title}</h1>
                                                    {/* @ts-ignore */}
                                                    <p>By {recentResearch.authors}</p>
                                                    {/* @ts-ignore */}
                                                    <p>Fields: {recentResearch.fields}</p>
                                                    {/* @ts-ignore */}
                                                    <p>{recentResearch.description}</p>
                                                </a>
                                                {/* @ts-ignore */}
                                                {(otherResearch[0] == null) ? null : (
                                                    // @ts-ignore
                                                    <a className='second-recent-research' href={`${recentResearch.url}`}>
                                                        {/* @ts-ignore */}
                                                        <h1>{otherResearch[0].title}</h1>
                                                        {/* @ts-ignore */}
                                                        <p>By {otherResearch[0].authors}</p>
                                                        {/* @ts-ignore */}
                                                        <p>Fields: {recentResearch.fields}</p>
                                                        {/* @ts-ignore */}
                                                        <p>{otherResearch[0].description}</p>
                                                    </a>
                                                )}
                                            </div>
                                            <div className='other-research'>
                                                {
                                                    (otherResearch[1] == null) ? null : (
                                                        <>
                                                            {
                                                                otherResearch.slice(1).map(researchProject => (
                                                                    // @ts-ignore
                                                                    <a key={researchProject} className='other-research-project' href={`${researchProject.url}`}>
                                                                        {/* @ts-ignore */}
                                                                        <h1>{researchProject.title}</h1>
                                                                        {/* @ts-ignore */}
                                                                        <p>By {researchProject.authors}</p>
                                                                        {/* @ts-ignore */}
                                                                        <p>Fields: {researchProject.fields}</p>
                                                                        {/* @ts-ignore */}                                                                        
                                                                        <p>{researchProject.description}</p>
                                                                    </a>
                                                                ))
                                                            }
                                                        </>
                                                    )
                                                }
                                            </div>
                                        </>)}
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}