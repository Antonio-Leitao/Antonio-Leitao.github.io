<script>
	import avatar from '$lib/images/avatar_svg.svg';
    import Paper from './Paper.svelte';
    import Button from './Button.svelte';
    export let data;
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

</section>

<section class="research">
    <span class="statement">
        Research Papers
    </span>
    
    <div class="grid">
        {#each data.papers as paper,i (paper.title)}
            <div in:fly={{duration:300,y:-100,delay:i*100,opacity:0.1,easing:quintOut}} animate:flip={{duration: 300, easing: quintOut }}>
                <Paper {...paper}/>
            </div>
        {/each}
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
    .research{
        min-height:330px;
        padding:2rem;
        background-color: var(--ash);
        background-position: center;
        background-size: cover;
        background: var(--ash);
        background-image: radial-gradient(var(--highlight) 1.1px, transparent 0);
        background-size: 11px 11px;
        background-position: -19px -19px;
        box-shadow: inset var(--shadow);
    }
	h1 {
		width: 100%;
		text-align: center;
		font-family: "Lora", serif;
        color: var(--base);
        font-size:2rem;
        margin:1.5rem 0;
	}
    .grid{
        width:100%;
        display:grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
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
</style>
