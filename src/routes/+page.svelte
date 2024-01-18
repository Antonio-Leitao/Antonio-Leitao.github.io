<script>
	import avatar from '$lib/images/avatar_svg.svg';
    import Button from './Button.svelte';
    export let data;
    const chronoKeys = Object.keys(data.news).reverse();
    let year = chronoKeys[0];
    const typesList = ["paper","talk","code","info"]
    import Dataview from "./Activity/Dataview.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
    <span class="name">
        <picture>
            <img src={avatar} alt="Welcome" />
        </picture>
    </span>
	<h1>
		António Leitão
	</h1>
    <span class="welcome">
        I'm a PhD student working on applied algebraic topology and machine learning.
    </span>
    <span>
        <Button text={"Projects"}/>
    </span>
    <div class="scroll">
        Scroll down for news
    </div>
</section>

<section class="activity">
    Recent Activity
<div class="layout">
    <div class="timeline">
        <div class="year"><span>{year}</span></div>
        {#each typesList as type}
            {#if type in data.news[year]}
                <Dataview {type} events={data.news[year][type]}/>
            {/if}
        {/each}
    </div>
</div>
</section>

<style>
	section {
		display: flex;
        min-height: 92vh;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
    .activity{
        justify-content: flex-start;
    }
	h1 {
		width: 100%;
		text-align: center;
		font-family: "Lora", serif;
        color: var(--base);
        font-size:2rem;
        margin:1.5rem 0;
	}
    .name{
        margin-top:-7rem;
    }
    .name picture img{
        height:7rem;
    }
	.welcome {
		width: 40ch;
        margin: 0 0 1.5rem 0;
		text-align: center;
		/* padding: 0 0 calc(100% * 495 / 2048) 0; */
	}
    .scroll{
        font-size:0.65rem;
    }
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
