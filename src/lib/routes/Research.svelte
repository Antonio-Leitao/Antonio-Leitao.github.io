
<script>
    import {link} from "svelte-spa-router";
    import {papers} from "../scripts/store.js";
    import Paper from "../comp/Paper.svelte";
</script>

<div class="page">
    <div class="container">
        <div class="legend">
            <a href="/" use:link>{"<-Research"}</a>
        </div>
        {#each $papers as paper}
            <Paper {...paper}/>
        {/each}
    </div>
</div>

<style>
    .page {
        width:100vw;
        display:flex;
        min-height:100vh;
        position:relative;
        background-color: var(--ash);
        background-position: center;
        background-size: cover;
        background: var(--ash);
        background-image: radial-gradient(var(--highlight) 1.1px, transparent 0);
        background-size: 11px 11px;
        background-position: -19px -19px;
	}
    .container{
        flex:1;
        display: grid;
        align-items:center;
        width:100%;
        grid-template-columns: repeat(auto-fill, 360px);
        line-height:1rem;
        font-size:1rem;
        overflow-y:scroll;
    }
    @media screen and (max-width: 850px){
      .container{
            display: flex;
            flex-direction:column;
            justify-content:center;
          }
      }
    .legend{
        color:var(--hover);
    }
    a{
        text-decoration:none;
        color:inherit;
    }
</style>
