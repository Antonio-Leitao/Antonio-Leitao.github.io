<script>
  import WorkGrid from "./lib/work_grid.svelte";
  import work_json from "./data/work_data.json";
  import Header from "./lib/header.svelte";
  import Footer from "./lib/footer.svelte";
  import Frontpage from "./lib/Frontpage.svelte";
  import About from "./lib/about.svelte";
  import { fade } from 'svelte/transition';

  let content="home";
</script>

<main>
  <body>
    <div class="content">
      <Header bind:content={content}/>
      {#if content==="home"}
      <div in:fade>
        <Frontpage/>
      </div>
      {:else if content === "about"}
      <div in:fade>
        <About/>
      </div>
      {:else}
      <div in:fade> 
        <WorkGrid work_data={work_json}/>
      </div>
      {/if}
      <Footer />
    </div>
  </body>
</main>

<style>
body{
  display: grid;
  align-items: center;
  height: 98vh;
  justify-content: center;
}
.content{
  width:45vw;
  min-width: 245px;
}
</style>
