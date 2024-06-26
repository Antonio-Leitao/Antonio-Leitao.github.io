<script>
	import avatar from '$lib/images/avatar_svg.svg';
    import Button from './Button.svelte';
    import { base } from '$app/paths';
</script>

<svelte:head>
	<title>António Leitão</title>
	<meta name="description" content="My homepage" />
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
        <a href="{base}/About">
            <Button text={"About"}/>
        </a>
    </span>
</section>

<style>
	section {
		display: flex;
        min-height: 88vh;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
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
    a{
        text-decoration: none;
    }
    a::hover{
        text-decoration: none;
    }
</style>
