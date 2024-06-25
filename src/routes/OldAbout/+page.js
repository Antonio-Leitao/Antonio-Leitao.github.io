// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

import { parse } from "toml";


export const load = async ({ fetch }) => {
    const response = await fetch("news.toml");//static/
    const tomlString = await response.text();
    const data = parse(tomlString);
    return {...data};
}

// export function load({params}) {
//     const response = await fetch("static/data.toml");//static/
//     const data = parse(tomlString);
//     return {info:readable(data["info"]), papers: readable(data["papers"]), projects: readable(data["projects"]) };
// }


