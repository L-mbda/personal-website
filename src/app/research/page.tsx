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
                                    <h1>Loading...</h1>
                                </>
                            ) : (
                                <>
                                    <div className='recent'>
                                        <div className='recent-research'>
                                            <h1>{recentResearch.title}</h1>
                                            <p>{recentResearch.authors}</p>
                                            <p>{recentResearch.description}</p>
                                        </div>
                                        <div className='second-recent'>
                                            <h1>{otherResearch[0].title}</h1>
                                            <p>{otherResearch[0].authors}</p>
                                            <p>{otherResearch[0].description}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}