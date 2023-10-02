<script>
    import {papers} from "../scripts/store.js";
    import Paper from "./Paper.svelte";
</script>

<div class="tray">
  {#each $papers as paper}
        <Paper {...paper}/>
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
