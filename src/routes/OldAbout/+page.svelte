<script>
    export let data;
    import Link from "./Link.svelte";
    const chronoKeys = Object.keys(data).reverse();
    const typesList = ["paper","talk","code","info"]
    let selected_index=0;
    import Dataview from "./Dataview.svelte";
    import MediaQuery from "../MediaQuery.svelte";
      function scrollIntoView({ target }) {
        selected_index=target.getAttribute('id');
        const el = document.querySelector(target.getAttribute('href'));
        // console.log('Scrolling to:', el);
        if (!el) return;
        el.scrollIntoView({
          behavior: 'smooth'
        });
      }
</script>

<svelte:head>
	<title>António Leitão • About</title>
	<meta name="description" content="What I've been doing" />
</svelte:head>

<div class="layout">
    <MediaQuery query="(min-width: 800px)" let:matches>
        {#if matches}
            <div class="placeholder">
                <div class="buttons">
                    {#each chronoKeys as year,i}
                        <a class = "button" class:selected={selected_index==i} href={"#y" + year} id={i} on:click|preventDefault={scrollIntoView}>
                            {year}
                        </a>
                    {/each}
                </div>
            </div>
        {/if}
    </MediaQuery>
    <div class="timeline">
        <div class="about">
            <div class="name">
                António Leitão
            </div>
            Mathematician, reluctant rust programmer and a washed-up volleyball champion.
            <br/>
            I'm a PhD student at the <Link text={"Scuola Normale Superiore"} link={"https://www.sns.it/it"} /> supervised by <Link text={"Nina Otter"} link={"https://www.ninaotter.com/"} /> and <Link text={"Fosca Giannoti"} link={"https://kdd.isti.cnr.it/people/giannotti-fosca"}/> on various projects <b>topological data analysis, climate science, explainable AI and animal communication</b>.
            I am a collaborator at <Link text={"CETI"} link={"https://www.projectceti.org/"} /> and was previously part of the <Link text={"NPL"} link={"https://nplresearch.github.io/"}/> research lab where I worked with <Link text={"Giovanni Petri"} link={"https://lordgrilo.github.io/"} />.
            <br/>
            My main interests are on Topological Data Analysis and Machine Learning.
            <br/>
            <br/>
            <span>News</span>
        </div>
        {#each chronoKeys as year}
            <section class="year" id={'y' + year}><span>{year}</span></section>
            {#each data[year] as event}
                <Dataview {...event}/>
            {/each}
        {/each}
    </div>
</div>

<style>
    /* Add your styling here */
    .layout{
        display: flex;
        position:relative;
    }
    .about{
        font-size:0.9rem;
        color:var(--hover);
        margin-left:1rem;
    }
    .about span{
        font-size: 0.9em;
        font-weight: bold;
    }
    .about .name{
        font-family: "Lora", serif;
        font-size: 1.4rem;
        margin-bottom:0.5rem;
    }
    .placeholder{
        width:10rem;
        padding:2rem;
        width:10rem;
    }
    .buttons{
        position: fixed;
    }
    .button{
        background-color: var(--color-bg-1);
        color: var(--muted);
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
        background-color:var(--hover);
        color: var(--text1)
    }
    .selected{
        background-color:var(--hover);
        color: var(--text1)
    }
    a{
        text-decoration: none;
    }
    a::hover{
        text-decoration: none;
    }
    .timeline {
        width:85vh;
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

