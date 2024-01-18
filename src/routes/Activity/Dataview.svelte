
<script>
    export let type;
    export let events; 
    import Event from "./Event.svelte";
    import {Presentation, Info, FileText,UploadCloud} from "lucide-svelte";
</script>
<div class="dataview">
    <div class="icon">
        {#if type=="paper"}
            <FileText size=18 color="#656d76"/>
        {:else if type=="talk"}
            <Presentation size=18 color="#656d76"/>
        {:else if type=="code"}
            <UploadCloud size=18 color="#656d76"/>
        {:else if type=="info"}
            <Info size=18 color="#656d76"/>
        {/if}
    </div>
    <div class="list">
        <div class="event-title">
        {#if type=="paper"}
                Published <div class="count">&nbsp;{events.length}&nbsp;</div> {events.length>1 ? "papers":"paper"}
        {:else if type=="talk"}
                Participated in <div class="count">&nbsp;{events.length}&nbsp;</div> {events.length>1 ? "conferences":"conference"}
        {:else if type=="code"}
                Released <div class="count">&nbsp;{events.length}&nbsp;</div> software {events.length>1 ? "versions":"version"}
        {:else if type=="info"}
                Misc
        {/if}
        </div>
        {#each events as event}
            <Event {...event}/>
        {/each}
    </div>
</div>

<style>
    .dataview{
        padding:1rem 0;
        margin:0 1rem;
        position:relative;
        display:flex;
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
    .count{
        font-size: 0.85em;
        font-weight: bold;
    }

</style>
