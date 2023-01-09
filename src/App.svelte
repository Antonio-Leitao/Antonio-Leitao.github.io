<script>
  import Content from "./lib/Content.svelte";
  import Centerpiece from "./lib/Centerpiece.svelte";
  import Header from "./lib/Header.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import Footer from "./lib/Footer.svelte";
  import { parse } from "toml";

  async function loadTomlFile() {
    const response = await fetch("static/data.toml");
    const tomlString = await response.text();
    const data = parse(tomlString);
    return data;
  }
  let dataload = loadTomlFile();
</script>

<!-- Background -->
<Centerpiece />

<!-- Header -->
<Header threshold={1}>
  <Navbar /></Header
>

{#await dataload}
...waiting
{:then data}
  <!-- Content -->
  <div class="content">
    <Content {data} />
  </div>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<!-- Footer -->
<Footer />

<style>
  .content {
    z-index: 0;
  }
</style>
