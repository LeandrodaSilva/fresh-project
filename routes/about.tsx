import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

export default function AboutPage() {
  return (
    <>
      <head>
        <title>About</title>
      </head>
      <div class="p-4 mx-auto max-w-screen-md">
        <h1 class="text-3xl font-bold">About</h1>
        <p class="my-6">
          This is the about page. Try updating this message in the
          ./routes/about.tsx file, and refresh.
        </p>
      </div>
    </>
  );
}
