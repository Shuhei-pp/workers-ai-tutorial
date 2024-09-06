/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import type { Ai } from "@cloudflare/ai";

type Env = {
	AI: Ai;
};

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const res = await env.AI.run("@cf/meta/llama-3-8b-instruct", {
			prompt: "hello, How are you?",
		});
		return new Response(JSON.stringify(res));
	},
} satisfies ExportedHandler<Env>;
