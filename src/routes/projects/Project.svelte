<script>
    export let name;
    export let url;
    export let icon;
    export let lang;
    export let pip;
    export let summary= "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.";
    import Icon from "./Icon.svelte";
    import Socials from "./Socials.svelte";
</script>
<div class="paper {lang}" on:click={() => window.open(url, "_blank")}>
{#key icon}
    <div class="project-icon">
        <Icon
            name={icon}
            color={"#1c2329"}
            opacity={1}
            height={"100%"}
            width={"100%"}
        />
    </div>
{/key}
    <div class="paper-date">{lang}</div>
    <div class="paper-title">{name}</div>
    <div class="paper-summary">{summary}</div>
    <Socials {pip} {url}/>
    <!-- [![Downloads](https://static.pepy.tech/badge/vlmc)](https://pepy.tech/project/vlmc) -->
</div>

<style>
    .paper{
        position:relative;
        padding:1.3rem 1.5rem;
        margin-top:1rem;
        /* width:315px; */
        width:280px;
        height:330px; 
        box-shadow:var(--shadow);
        background-color:#fff;
        cursor:pointer;
        transition: all 0.25s ease;
    }
    .paper:hover{
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    }
    .paper::before{
        content:"";
        top:0;
        left:0;
        position:absolute;
        width:100%;
        height:5px;
    }
    .project-icon{
        height:5rem;
    }
    .paper-date{
        font-size: 0.65rem;
        font-style:italic;
        color: var(--subtext);
    }
    .paper-title{
        margin: 0rem 0 0.8rem 0;
        font-family: 'Lora', serif;
        font-size: 1.2rem;
        font-weight:900;
        line-height: 1.6rem;
        color: var(--hover);
    }
    .paper-summary{
        font-size:0.8rem;
        color:var(--muted);
        line-height:1.3rem;
    }
    /* topics */
    .rust::before{
        background-color: var(--ml-red);
    }
    .python::before{
        background-color: var(--ml-blue);
    }
    .javascript::before{
        background-color: var(--ml-yellow);
    }
    .go::before{
        background-color: var(--ml-cyan);
    }
</style>
