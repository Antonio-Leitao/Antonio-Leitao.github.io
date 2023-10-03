<script>
    import {papers} from "../scripts/store.js";
    import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
    import Paper from "./Paper.svelte";
    // import Dropdown from "./Dropdown.svelte";
</script>

<div class="tray">
    <!-- <Dropdown/> -->
  {#each $papers as paper, i}
   <div in:fly={{duration:300,y:-100,delay:i*100,opacity:0.1,easing:quintOut}}>
        <Paper {...paper}/>
    </div> 
  {/each}
</div>

<style>
    .tray {
        position:relative;
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content: flex-start;
        min-height:100vh;
        background-color: var(--ash);
        background-position: center;
        background-size: cover;
        background: var(--ash);
        background-image: radial-gradient(var(--highlight) 1.1px, transparent 0);
        background-size: 11px 11px;
        background-position: -19px -19px;
        padding-bottom:1rem;
	}
</style>
