'use client'
import '@/css/components/Research.css'
import { useEffect, useState } from 'react'

export function Research() {
    let [loadingStatus, setLoadingStatus] = useState(true)
    let [mostRecentPaper, setMostRecentPaper] = useState(null)

    useEffect(() => {
        fetch('/api/get_recent_research').then((r) => {r.json().then((d) => {
            setMostRecentPaper(d[d.length - 1])
            setLoadingStatus(false)
        })})
    }, [])
    return (
        <div className='research'>
            <h1>My recent research</h1>
            <div className='research-group'>
                {loadingStatus ? null : (
                    <>
                        <div className='research-project'>
                            {/* @ts-ignore */}
                            <h1>{mostRecentPaper['title']}</h1>
                            {/* @ts-ignore */}
                            <p>{mostRecentPaper['authors']}</p>
                            {/* @ts-ignore */}
                            <p>Fields: {mostRecentPaper['field']}</p>
                            {/* @ts-ignore */}
                            <p>{mostRecentPaper['description']}</p>
                        </div>
                        <div className='research-vert'>
                        </div>    
                    </>
                )}
            </div>
        </div>
    )
}