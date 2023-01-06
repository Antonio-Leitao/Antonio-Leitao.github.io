<script>
  import { fly, fade } from "svelte/transition";
  import Project from "./Project.svelte";
  import ScrollComponent from "./ScrollComponent.svelte";

  let projects = [
    {
      name: "Jet",
      url: "https://github.com/Antonio-Leitao/jet",
      tech: "python",
      abstract:
        "JET is a testing library for python aimed at being fast to set up, easy to use and above all pleasing to the eye. Because testing does not have to be a chore to set up, clutter the terminal or ugly to look at.",
    },
    {
      name: "Portuguese Iconography",
      url: "https://antonio-leitao.github.io/components/",
      tech: "html • css  • javascript",
      abstract:
        "Repellendus sapiente aliquid eum totam beatae. Cupiditate neque quod obcaecati dolor laboriosam.",
    },
    {
      name: "Component Library",
      url: "https://antonio-leitao.github.io/components/",
      tech: "svelte",
      abstract:
        "Repellendus sapiente aliquid eum totam beatae. Cupiditate neque quod obcaecati dolor laboriosam.",
    },
    {
      name: "DB Sampler",
      url: "https://antonio-leitao.github.io/components/",
      tech: "rust • python",
      abstract:
        "Repellendus sapiente aliquid eum totam beatae. Cupiditate neque quod obcaecati dolor laboriosam.",
    },
    {
      name: "Scribe",
      url: "https://antonio-leitao.github.io/components/",
      tech: "python • svelte",
      abstract:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis minus expedita ipsum dignissimos exercitationem provident est animi omnis!",
    },
    {
      name: "Heron",
      url: "https://antonio-leitao.github.io/components/",
      tech: "rust • python",
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
    {#each projects as { name, url, tech, abstract }}
      <Project {name} {url} {tech} {abstract} />
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
