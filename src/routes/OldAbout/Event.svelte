<script>
    export let title;
    export let date;
    export let summary;
    export let link=undefined;
</script>

<div class="topline">
    <div class ="title" >
        <a href={link}>
            {title}
        </a>
    </div>
    <div class="date">{date}</div>
</div>
{#if summary}
    <div class="summary">{summary}</div>
{/if}

<style>
    .title{
        font-size:0.8rem;
        /* color:var(--muted); */
        color:var(--clr-blue);
        font-style: bold;
    }
    .date{
        font-size: 0.75em;
        margin-left:2rem;
        min-width:3rem;
    }
    .summary{
        font-size:0.8rem;
        margin:0 1rem 0.3rem 1rem;
        color: #656d76;
    }
    .topline{
        display:flex;
    }
</style>
