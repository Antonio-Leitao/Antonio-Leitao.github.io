<script>
    export let title;
    export let date;
    export let summary;
    export let link;
</script>

<div class="topline">
    {#if link}
        <a href={link}>
            <div class ="title" >{title}</div>
        </a>
    {:else}
            <div class ="title" >{title}</div>
    {/if}
    <div class="date">{date}</div>
</div>
{#if summary}
    <div class="summary">{summary}</div>
{/if}

<style>
    .title{
        font-size:0.8rem;
        color:var(--muted);
    }
    .date{
        font-size: 0.75em;
        margin-left:2rem;
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
