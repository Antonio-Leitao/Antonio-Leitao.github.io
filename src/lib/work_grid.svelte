<script>
  import Publication from "./publication.svelte";
  import WebProject from "./web_project.svelte";
  import CodeProject from "./code_project.svelte";
  import { fly } from "svelte/transition";
  import { quintOut } from 'svelte/easing';
  export let work_data;
</script>

<div class="work_grid">
  {#each work_data.work as work,i}
    {#if work.type === "publication"}
      <div in:fly={{ x: 100, duration: 500, delay:i*100, easing:quintOut}}>
        <Publication {...work} />
      </div>
    {:else if work.type === "code"}
      <div in:fly={{ x: 100, duration: 500, delay:i*100, easing:quintOut}}>
        <CodeProject {...work} />
      </div>
    {:else if work.type === "web"}
      <div in:fly={{ x: 100, duration: 500, delay:i*100, easing:quintOut}}>
        <WebProject {...work} />
      </div>
    {/if}
  {/each}
</div>

<style>
  .work_grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    width: 100%;
  }
</style>
