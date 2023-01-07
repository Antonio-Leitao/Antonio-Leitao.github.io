<script>
  import ResearchPapers from "./ResearchPapers.svelte";
  export let topics;
</script>

<div class="research">
  <div class="text">
    <div class="title">Research</div>
  </div>
  {#each topics as { topic, description, papers }}
    <ResearchPapers {topic} {description} {papers} />
  {/each}
</div>

<style>
  .research {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 100%;
  }

  .title {
    font-weight: 800;
  }

  .text {
    text-align: center;
  }
</style>
