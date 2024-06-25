
<script>
    export let title;
    export let subtitle=undefined;
    export let summary;
    export let date;
    export let link=undefined;
    export let type=undefined;
    import {Presentation, FileText,UploadCloud} from "lucide-svelte";
</script>

{#if type}
    <div class="dataview">
        <div class="icon">
            {#if type==="paper"}
                <FileText size=18 color="#656d76"/>
            {:else if type==="talk"}
                <Presentation size=18 color="#656d76"/>
            {:else if type==="code"}
                <UploadCloud size=18 color="#656d76"/>
            {/if}
        </div>
        <div class="list">
            <div class="event-title">
                {title}
            </div>
            <div class="topline">
                <div class ="subtitle" >
                    <a href={link}>
                        {subtitle}
                    </a>
                </div>
                <div class="date">{date}</div>
            </div>
            {#if summary}
                <div class="summary">{summary}</div>
            {/if}
        </div>
    </div>
{:else}
    <div class="dataview centered">
        <div class="small-icon">
        </div>
        <div class="list">
            <div class="topline">
                {#if link}
                <div class ="subtitle" >
                    <a href={link}>
                        {title}
                    </a>
                </div>
                {:else}
                <div class ="summary" >
                    {title}
                </div>
                {/if}
                <div class="date">{date}</div>
            </div>
            {#if summary}
                <div class="summary">{summary}</div>
            {/if}
        </div>
    </div>
{/if}

<style>
    .dataview{
        padding:1rem 0;
        margin:0 1rem;
        position:relative;
        display:flex;
    }
    .centered{
        align-items: center;
    }
    .dataview::before{
        content:"";
        position:absolute;
        top:0;
        bottom:0;
        width:2px;
        background-color: rgb(216, 222, 228);
    }
    .event-title{
          color: var(--base);
        display: flex;
        align-items:baseline;
    }
    .icon{
        background-color: rgb(216, 222, 228);
        width:2rem;
        height:2rem;
        border-radius: 50%;
        border: solid 2px rgb(255,255,255);
        margin-left:-1rem;
        margin-right:1rem;
        z-index:1;
        display: grid;
        place-items:center;
    }
    .small-icon{
        background-color: rgb(216, 222, 228);
        width:1rem;
        height:1rem;
        border-radius: 50%;
        border: solid 2px rgb(255,255,255);
        margin-left:-0.45rem;
        margin-right:1rem;
        z-index:1;
    }
    .subtitle{
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
