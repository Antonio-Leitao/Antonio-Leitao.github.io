<script>
    export let name;
    export let url;
    export let thumbnail;
    export let summary= "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.";
    import Icon from "./Icon.svelte";
</script>

<div class="project" on:click={() => window.open(url, "_blank")}>
    <div class="project-icon">
        <Icon
            name={thumbnail}
            color={"#13171b"}
            opacity={1}
            height={"100%"}
            width={"100%"}
        />
    </div>
    <div class="project-title">{name}</div>
    <div class="project-date">{url}</div>
    <div class="project-summary">{summary}</div>
</div>

<style>
    .project{
        position:relative;
        padding:1.3rem 1.5rem;
        margin-top:1rem;
        /* width:315px; */
        border-radius: 6px;
        width:280px;
        height:330px; 
        box-shadow:var(--shadow);
        background-color:#fff;
        cursor:pointer;
    }
    .project:hover{
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    }
    .project-icon{
        height:5rem;
    }
    .project-date{
        font-size: 0.65rem;
        font-style:italic;
        color: var(--subtext);
    }
    .project-title{
        margin: 0rem 0 0.8rem 0;
        font-family: 'Lora', serif;
        font-size: 1.2rem;
        font-weight:900;
        line-height: 1.6rem;
        color: var(--hover);
    }
    .project-summary{
        font-size:0.8rem;
        color:var(--muted);
        line-height:1.3rem;
    }

</style>
