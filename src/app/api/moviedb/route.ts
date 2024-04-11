import axios from 'axios';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { cache } from 'react';

interface Context {
  params: undefined;
}

const api = axios.create({
  baseURL: process.env.TMDB_API_BASE_URL,
  params: {
    api_key: process.env.TMDB_API_KEY,
    include_adult: true,
  },
});

const fetchApi = cache((url: string, params?: any) =>
  api
    .get(url, { params })
    .then(res => res.data)
    .catch(err => {
      throw err;
    })
);

export async function GET(request: NextRequest, context: Context) {
  const path = request.nextUrl.pathname
  const response = await fetchApi('/trending/all/week');

  return NextResponse.json({ results: response.results, path });
}
