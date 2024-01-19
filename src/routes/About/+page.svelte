<script>
    export let data;
    const chronoKeys = Object.keys(data).reverse();
    const typesList = ["paper","talk","code","info"]
    import Dataview from "./Dataview.svelte";
    import Button from "../Button.svelte";

      function scrollIntoView({ target }) {
        const el = document.querySelector(target.getAttribute('href'));
        // console.log('Scrolling to:', el);
            if (!el) return;
        el.scrollIntoView({
          behavior: 'smooth'
        });
      }
</script>

<svelte:head>
	<title>Leitão • About</title>
	<meta name="description" content="What I've been doing" />
</svelte:head>

<div class="layout">
    <div class="buttons">
        {#each chronoKeys as year}
            <a class = "button" href={"#y" + year} on:click|preventDefault={scrollIntoView}>
                {year}
            </a>
        {/each}

    </div>
    <div class="timeline">
        <div class="about">
            Hello there myu name is antonio
        </div>
        {#each chronoKeys as year}
            <section class="year" id={'y' + year}><span>{year}</span></section>
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
        /* justify-content: center; */
    }
    .buttons{
        width:10rem;
        padding:2rem;
    }
    .button{
        background-color: var(--color-bg-1);
        color: var(--hover);
        border:none;
        border-radius:0.4rem;
        padding:0.3rem 1rem;
        font-weight:300;
        cursor: pointer;
        display: grid;
        align-items: center;
        text-align: center;
        margin-bottom:0.3rem;
    }
    .button:hover{
        background-color:var(--base);
        color: var(--text1)
    }
    a::hover{
        text-decoration: none;
    }
    .timeline {
        width:85vh;
        font-family: Arial, sans-serif;
        padding: 20px;
    }
    .year {
        font-size: 0.7em;
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

