<script>
    import {link} from "svelte-spa-router";
    import { flip } from 'svelte/animate';
    import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
    import {papers} from "../scripts/store.js";
    import Paper from "../comp/Paper.svelte";
    import Dropdown from "../comp/Dropdown.svelte";
    let selected_tag="all";
    function filterPapers(tag) {
      if (tag.toLowerCase() === 'all') {
        return $papers;  // Return all objects if tag is "all"
      }
      return $papers.filter(obj => obj.topic === tag);
    }

    $:selected_papers = filterPapers(selected_tag);
</script>

<div class="page">
    <div class="container">
        <div class="legend">
            <a href="/" use:link>{"<- Back"}</a>
            <Dropdown bind:selected_tag={selected_tag}/>
        </div>
        {#each selected_papers as paper,i (paper.title)}
            <div in:fly={{duration:300,y:-100,delay:i*100,opacity:0.1,easing:quintOut}} animate:flip={{duration: 300, easing: quintOut }}>
                <Paper {...paper}/>
            </div>
        {/each}
    </div>
</div>

<style>
    .page {
        width:100vw;
        display:grid;
        place-items:center;
        min-height:100vh;
        position:relative;
        background-color: var(--ash);
        background-position: center;
        background-size: cover;
        background: var(--ash);
        background-image: radial-gradient(var(--highlight) 1.1px, transparent 0);
        background-size: 11px 11px;
        background-position: -19px -19px;
	}
    .container{
        width:100%;
        min-height:100vh;
        line-height:1rem;
        font-size:1rem;
        overflow-y:scroll;
        display: flex;
        flex-direction:column;
        justify-content:flex-start;
        align-items:center;
        padding-bottom:1rem;
    }
    .legend{
        margin-top:1rem;
        width:315px;
        color:var(--hover);
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-between;

    }
    a{
        text-decoration:none;
        color:inherit;
    }
</style>
