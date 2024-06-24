import { NextResponse } from "next/server";

export async function GET(request: any) {
    return NextResponse.json([
        {
            'title': "Demonstration",
            'authors': "de-y",
            'description': 'No description provided',
            'field': "Programming",
        }
    ])
    // return NextResponse.json([
    //     {
    //         'title': null,
    //         'authors': null,
    //         'description': null || 'No description provided',
    //         'field': null,
    //     }
    // ])
}