<script>
  import Home from "./lib/routes/Home.svelte";
  import Research from "./lib/routes/Research.svelte";
  import NotFound from "./lib/routes/NotFound.svelte";
  import Router from 'svelte-spa-router'
  const routes = {
    '/': Home,
    '/research': Research,
    '*': NotFound,
}
</script>

<Router {routes}/>
