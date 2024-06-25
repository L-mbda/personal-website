'use client'
import '@/css/components/Research.css'
import { useEffect, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'

export function Research() {
    let [loadingStatus, setLoadingStatus] = useState(true)
    let [mostRecentPaper, setMostRecentPaper] = useState(null)

    useEffect(() => {
        fetch('/api/research').then((r) => {r.json().then((d) => {
            setMostRecentPaper(d[d.length - 1])
            setLoadingStatus(false)
        })})
    }, [])
    return (
        <>
            <div className='research'>
                <h1 className='most-re'>My most recent research.</h1>
                <div className='research-group'>
                    {loadingStatus ? (<>
                        <a className='research-project loading_research'>
                            <h1>Loading...</h1>
                            <p>Fetching the most recent research papers and articles published...</p>
                        </a>
                    </>) : (
                        <>
                            {/* @ts-ignore */}
                            {(mostRecentPaper['url'] === null && mostRecentPaper['title'] == null && mostRecentPaper['authors'] == null) ? (
                                    <a className='research-project could-not-find'>
                                    {/* @ts-ignore */}
                                    <h1>Nothing found.</h1>
                                    <p>There have been no papers or articles published by me, yet.</p>
                                </a>
                        ) : (
                                <>
                                    {/* @ts-ignore */}
                                    <a className='research-project' href={`${mostRecentPaper['url']}`}>
                                        {/* @ts-ignore */}
                                        <h1>{mostRecentPaper['title']}</h1>
                                        {/* @ts-ignore */}
                                        <p>By {mostRecentPaper['authors']}</p>
                                        {/* @ts-ignore */}
                                        <p>Fields: {mostRecentPaper['field']}</p>
                                        {/* @ts-ignore */}
                                        <p>{mostRecentPaper['description']}</p>
                                    </a>
                                    <div className='research-vert'>
                                        <a className='view-past-papers' href='/research'>
                                            <h1>View past papers <BsArrowRight className='right-arrow' /></h1>
                                        </a>
                                    </div>

                                </>                                
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    )
}