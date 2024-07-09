import { DefaultBodyType, http, Path, PathParams } from 'msw';

export const handlers = [
  http.get<PathParams, DefaultBodyType, ResponseInit, Path>('/posts', () => {
    console.log('Captured a "GET /posts" request');
  }),
  http.post<PathParams, DefaultBodyType, ResponseInit, Path>('/posts', () => {
    console.log('Captured a "POST /posts" request');
  }),
  http.delete<PathParams, DefaultBodyType, ResponseInit, Path>(
    '/posts/:id',
    ({ params }) => {
      console.log(`Captured a "DELETE /posts/${params.id}" request`);
    },
  ),
];
