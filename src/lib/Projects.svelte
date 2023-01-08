<script>
  import Project from "./Project.svelte";
  export let projects;
</script>

<div class="projects-section">
  <div class="text">
    <div class="title">Projects</div>
    <div class="abstract">
      List of projects that I have started and activelly maintain.
    </div>
  </div>

  <div class="projects">
    {#each projects as { name, url, tech, abstract, thumbnail }}
      <Project {name} {url} {tech} {abstract} {thumbnail}/>
    {/each}
  </div>
</div>

<style>
  .projects-section {
    margin-top: 5rem;
  }
  .title {
    font-weight: 800;
  }
  .abstract {
    font-size: 1.4rem;
    font-weight: 100;
    color: var(--text2);
  }
  .text {
    text-align: center;
  }
  .projects {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
  }
</style>
