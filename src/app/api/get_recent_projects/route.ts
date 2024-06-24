import { NextResponse } from "next/server";
import axios from 'axios';

export async function GET(request: any) {
    let repo_names = []
    for (let i = 1; i < 3; i++) {
        let c = (await axios.get(`https://api.github.com/users/de-y/repos?page=${i}`)).data
        if (c.length != 0) {
            for (let repo in c) {
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
    console.log('TIME')
    return NextResponse.json({
        'recentProject': repo_names[(repo_names.length)-1],
        'secondRecentProject': repo_names[(repo_names.length)-2]
    })
}