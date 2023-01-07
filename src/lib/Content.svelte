<script>
  import Projects from "./Projects.svelte";
  import Hero from "./Hero.svelte";
  import Research from "./Research.svelte";

  export let data;
</script>

<div class="layout">
  <div class="sidebar" />
  <div class="main">
    <section id="hero">
      <Hero />
    </section>

    <section id="research">
      <Research topics={data["research"]} />
    </section>

    <section id="projects">
      <Projects projects={data["projects"]} />
    </section>
  </div>
  <div class="sidebar" />
</div>

<style>
  .layout {
    display: flex;
    flex-direction: row;
  }

  .sidebar {
    flex: 1;
  }

  .main {
    flex: 0 0 60vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
</style>
