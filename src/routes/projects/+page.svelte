<script>
    import Project from "./Project.svelte";
    import {flip} from "svelte/animate";
    import {fly} from "svelte/transition";
    import {quintOut} from "svelte/easing";
    export let data;
</script>

<section class="projects">
    <span class="statement">
        Projects
    </span>
    <div class="grid">
        {#each data.projects as project,i (project.name)}
            <div in:fly={{duration:300,y:-100,delay:i*100,opacity:0.1,easing:quintOut}} animate:flip={{duration: 300, easing: quintOut }}>
                <Project {...project}/>
            </div>
        {/each}
    </div>
</section>

<style>
    .projects{
        width:100%;
        padding:2rem;
        background-color: var(--ash);
        background-position: center;
        background-size: cover;
        background: var(--ash);
        background-image: radial-gradient(var(--highlight) 1.1px, transparent 0);
        background-size: 11px 11px;
        background-position: -19px -19px;
        box-shadow: inset var(--shadow);
    }

    .grid{
        width:100%;
        display:grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    }
</style>
