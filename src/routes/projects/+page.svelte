<script>
    import Icon from "./Icon.svelte";
    import Project from "./Project.svelte";
    import {flip} from "svelte/animate";
    import {fly} from "svelte/transition";
    import {quintOut} from "svelte/easing";
    export let data;
    let selected_index = 0;
</script>

<svelte:head>
	<title>António Leitão • Projects</title>
	<meta name="description" content="List of ongoing projects" />
</svelte:head>

<section class="projects">
    <span class="statement">
        Software Projects
    </span>
    <div class="layout">
        <span class="thumbnails">
            {#each data.projects as project,i (project.name)}
                <div in:fly={{duration:300,y:-100,delay:i*100,opacity:0.1,easing:quintOut}}
                    animate:flip={{duration: 300, easing: quintOut }} on:click={()=>{selected_index=i}} style="display:grid;place-items:center;">
                    <div class="project-icon"
                        class:selected={selected_index==i}>
                        <Icon
                            name={project.icon}
                            color={"#656d76"}
                            opacity={1}
                            height={"100%"}
                            width={"100%"}
                        />
                    </div>
                    <div class="project-name">{project.name}</div>
                </div>
            {/each}
        </span>
        <div class="banner">
            <Project {...data.projects[selected_index]}/> 
        </div>
    </div>
</section>

<style>
    .projects{
        width:100%;
        min-height:92vh;
        padding:2rem;
        background-color: var(--ash);
        background-position: center;
        background-size: cover;
        background: var(--ash);
        background-image: radial-gradient(var(--highlight) 1.1px, transparent 0);
        background-size: 11px 11px;
        background-position: -19px -19px;
        box-shadow: inset var(--shadow);
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    .statement{
        text-align: center;
        margin: 0rem 0 1rem 0;
    }
    .layout{
        width:800px;
        margin: 0 auto;
        display: flex;
    }
    .project-icon{
        width:50px;
        height:50px;
        border-radius:15%;
        padding:0.3rem;
        display: grid;
        place-items:center;
        background-color: rgb(216, 222, 228);
        outline-offset: .25rem;
        cursor: pointer;
    }
    .project-icon:hover{
        outline:solid 2px #656d76;
    }
    .selected{
        outline:solid 2px #656d76;
    }
    .project-name{
        font-size:0.8rem;
        color:var(--muted);
        text-align:center;
        margin-top:-0.3rem;
    }
    .banner{
        /* padding:0 0.5rem; */
        flex: 0 0 60%;
        min-width: 330px;
        display:grid;
        place-items:center;
    }
    .thumbnails{
        width:100%;
        display:grid;
        grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
        grid-template-rows: repeat(auto-fill, minmax(80px, 1fr));
        gap:0.5rem;
        flex: 1;
        min-width: 0; /* Allow the left column to shrink if needed */
    }

    @media only screen and (max-width: 800px) {
  /* Your styles for screens 800px or less go here */
        .layout{
            flex-direction:column;
            max-width:400px;
            margin:0;
        }
        .banner{
            flex:1;
        }
        .thumbnails{
            flex:1;
            margin-bottom:1rem;
        }
    }
</style>
