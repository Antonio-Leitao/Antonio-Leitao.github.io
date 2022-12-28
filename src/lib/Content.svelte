<script>
  import Projects from "./Projects.svelte";
  import Hero from "./Hero.svelte";
  import About from "./About.svelte";
  import Workflow from "./Workflow.svelte"
</script>


<div class="layout">
  <div class="sidebar"></div>
  <div class="main">
    <section id="hero">
      <Hero/>
    </section>
    <section id="about">
      <About/>
    </section>
    <section id="projects">
      <Projects/>
    </section>
    <section id="workflow">
      <Projects/>
    </section>
    
  </div>
  <div class="sidebar"></div>
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
