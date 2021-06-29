import { rest } from 'msw';
import { categories, itemsList, news } from './Fixtures';

export const handlers = [
  rest.get('/categories', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(categories))
  ),

  rest.get('/items', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(itemsList))
  ),

  rest.get('/news', (req, res, ctx) => res(ctx.status(200), ctx.json(news))),
];
