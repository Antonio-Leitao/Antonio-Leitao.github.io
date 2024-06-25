<script>
    import Link from "./Link.svelte";
</script>

<svelte:head>
	<title>António Leitão • About</title>
	<meta name="description" content="What I've been doing" />
</svelte:head>

<div class="layout">
    <div class="timeline">
        <div class="about">
            <div class="name">
                About me
            </div>
            Mathematician, reluctant rust programmer and a washed-up volleyball champion.
            <br/>
            I'm a PhD student at the <Link text={"Scuola Normale Superiore"} link={"https://www.sns.it/it"} /> supervised by <Link text={"Nina Otter"} link={"https://www.ninaotter.com/"} /> and <Link text={"Fosca Giannoti"} link={"https://kdd.isti.cnr.it/people/giannotti-fosca"}/> on various projects topological data analysis, climate science, explainable AI and animal communication.
            I am a collaborator at <Link text={"CETI"} link={"https://www.projectceti.org/"} /> and was previously part of the <Link text={"NPL"} link={"https://nplresearch.github.io/"}/> research lab where I worked with <Link text={"Giovanni Petri"} link={"https://lordgrilo.github.io/"} />.
            <br/>
            My main interests are on Topological Data Analysis and Machine Learning.
            <br/>
            <br/>
        </div>
    </div>
</div>

<style>
    /* Add your styling here */
    .layout{
        width:100%;
        min-height: 88vh;
        padding:2rem;
        display: flex;
        justify-content: center;
        position:relative;
    }
    .about{
        font-size:0.9rem;
        color:var(--hover);
        margin-left:1rem;
    }
    .about .name{
        font-family: "Lora", serif;
        font-size: 1.4rem;
        margin-bottom:0.5rem;
        margin-top:2rem;
    }
    .timeline {
        width:85vh;
        padding: 20px;
    }
    </style>

