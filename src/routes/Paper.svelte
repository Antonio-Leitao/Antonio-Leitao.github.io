<script>
    export let title;
    export let url;
    export let published;
    export let topic;
    export let summary= "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.";
</script>

<div class="paper {topic}" on:click={() => window.open(url, "_blank")}>
    <div class="paper-date">{published}</div>
    <div class="paper-title">{title}</div>
    <div class="paper-summary">{summary}</div>
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
    .tda::before{
        background-color: var(--clr-cyan);
    }
    .ceti::before{
        background-color: var(--clr-yellow);
    }
</style>
