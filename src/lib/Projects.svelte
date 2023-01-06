<script>
  import { fly, fade } from "svelte/transition";
  import Project from "./Project.svelte";
  import ScrollComponent from "./ScrollComponent.svelte";

  let projects = [
    {
      name: "Jet",
      abstract:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis minus expedita ipsum dignissimos exercitationem provident est animi omnis!",
    },
    {
      name: "Portuguese Iconography",
      abstract:
        "Repellendus sapiente aliquid eum totam beatae. Cupiditate neque quod obcaecati dolor laboriosam.",
    },
    {
      name: "Scribe",
      abstract:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis minus expedita ipsum dignissimos exercitationem provident est animi omnis!",
    },
    {
      name: "Component Library",
      abstract:
        "Repellendus sapiente aliquid eum totam beatae. Cupiditate neque quod obcaecati dolor laboriosam.",
    },
    {
      name: "Heron",
      abstract:
        "Repellendus sapiente aliquid eum totam beatae. Cupiditate neque quod obcaecati dolor laboriosam.",
    },
    {
      name: "DB Sampler",
      abstract:
        "Repellendus sapiente aliquid eum totam beatae. Cupiditate neque quod obcaecati dolor laboriosam.",
    },
  ];
</script>

<div class="projects-section">
  <div class="text">
    <div class="title">Projects</div>
    <div class="abstract">
      List of projects that I have started and activelly maintain.
    </div>
  </div>

  <div class="projects">
    {#each projects as { name, abstract }, i}
      <Project {name} {abstract} />
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
