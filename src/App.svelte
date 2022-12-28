<script>
  import Content from "./lib/Content.svelte";
  import Centerpiece from "./lib/Centerpiece.svelte";
  import Header from "./lib/Header.svelte";
  import Navbar from "./lib/Navbar.svelte";

</script>

<!-- Background -->
<Centerpiece />

<!-- Header -->
<Header threshold={1}>
  <Navbar /></Header
>

<!-- Content -->
<div class="content">
  <Content />
</div>

<!-- Footer -->
<style>
  .content {
    height: 100vh;
    z-index: 0;
  }
</style>
