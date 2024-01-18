<script>
    export let data;
    const chronoKeys = Object.keys(data).reverse();
    const typesList = ["paper","talk","code","info"]
    import Dataview from "./Dataview.svelte";
</script>

<svelte:head>
	<title>Leitão • Activity</title>
	<meta name="description" content="What I've been doing" />
</svelte:head>
<div class="layout">
    <div class="timeline">
        {#each chronoKeys as year}
            <div class="year"><span>{year}</span></div>
            {#each typesList as type}
                {#if type in data[year]}
                    <Dataview {type} events={data[year][type]}/>
                {/if}
            {/each}
        {/each}
    </div>
</div>

<style>
    /* Add your styling here */
    .layout{
        display: flex;
        justify-content: center;
    }
    .timeline {
        width:85vh;
        font-family: Arial, sans-serif;
        padding: 20px;
    }

    .year {
        font-size: 0.6em;
        font-weight: bold;
        margin-bottom: 10px;
        border-bottom: solid 1px rgb(208, 215, 222);
        height:0.8rem;
        margin:1rem 1rem;
    }
    .year span{
        background-color:rgb(255,255,255);
        padding:0 0.6rem;
        margin-left:1.5rem;
    }
    </style>

