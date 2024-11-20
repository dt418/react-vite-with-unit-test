import { http, type DefaultBodyType, type PathParams } from 'msw';

export const handlers = [
  http.get<PathParams, DefaultBodyType, DefaultBodyType>('/posts', () => {
    console.log('Captured a "GET /posts" request');
  }),
  http.post<PathParams, DefaultBodyType, DefaultBodyType>('/posts', () => {
    console.log('Captured a "POST /posts" request');
  }),
  http.delete<PathParams, DefaultBodyType, DefaultBodyType>(
    '/posts/:id',
    ({ params }) => {
      console.log(`Captured a "DELETE /posts/${params.id}" request`);
    },
  ),
];
