import { readable } from "svelte/store";
import { parse } from "toml";

async function loadData() {
    const response = await fetch("static/data.toml");
    const tomlString = await response.text();
    const data = parse(tomlString);
    return {info:readable(data["info"]), papers: readable(data["papers"]), projects: readable(data["projects"]) };
    return data;
}

export const useMediaQuery = (mediaQueryString)=>{
	const matches = readable(null, (set) => {
		const m=window.matchMedia(mediaQueryString);
		set(m.matches);
		const el=e => set(e.matches);
		m.addEventListener("change", el);
		return () => {m.removeEventListener("change", el)};
	});
	return matches;
}

export const {info, papers, projects} = await loadData();
