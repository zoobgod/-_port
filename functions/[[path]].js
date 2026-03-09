export const onRequest = () =>
  new Response('Cloudflare Pages handler is disabled for this Vercel deployment.', {
    status: 404,
  });
