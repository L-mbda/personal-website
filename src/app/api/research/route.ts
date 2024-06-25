import { NextResponse } from "next/server";

export async function GET(request: any) {
    return NextResponse.json([
        {
            'title': 'Demonstration',
            'authors': 'de-y',
            'description': null || 'No description provided',
            'field': null,
            'url': 'https://de-y.github.io',
            'id': 1
        },
        {
            'title': 'Second Recent Demonstration',
            'authors': 'de-y',
            'description': null || 'No description provided',
            'field': null,
            'url': 'https://de-y.github.io',
            'id': 2
        },
        {
            'title': 'Recent Demonstration',
            'authors': 'de-y',
            'description': null || 'No description provided',
            'field': null,
            'url': 'https://de-y.github.io',
            'id': 3
        }
    ])
    // return NextResponse.json([
    //     {
    //         'title': null,
    //         'authors': null,
    //         'description': null || 'No description provided',
    //         'field': null,
    //         'url': null,
    //     }
    // ])
}