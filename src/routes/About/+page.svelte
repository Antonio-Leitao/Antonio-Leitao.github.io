<script>
    import Link from "./Link.svelte";
</script>

<svelte:head>
    <title>António Leitão • About</title>
    <meta name="description" content="What I've been doing" />
</svelte:head>

<div class="layout">
    <div class="content-wrapper">
        <div class="image-container">
            <img
                src="/avatar_leitao.png"
                alt="António Leitão"
                class="profile-image"
            />
        </div>
        <div class="timeline">
            <div class="about">
                <div class="name">About me</div>
                I'm a PhD student at the <Link
                    text={"Scuola Normale Superiore"}
                    link={"https://www.sns.it/it"}
                /> and part of the <Link
                    text={"Datashape Team"}
                    link={"https://team.inria.fr/datashape/"}
                /> supervised by <Link
                    text={"Nina Otter"}
                    link={"https://www.ninaotter.com/"}
                /> and <Link
                    text={"Fosca Giannoti"}
                    link={"https://kdd.isti.cnr.it/people/giannotti-fosca"}
                /> working on various projects from topological data analysis, climate
                science, explainable AI and animal communication.<br /> I am a
                collaborator at <Link
                    text={"CETI"}
                    link={"https://www.projectceti.org/"}
                /> and was previously part of the <Link
                    text={"NPL"}
                    link={"https://nplresearch.github.io/"}
                /> research lab where I worked with <Link
                    text={"Giovanni Petri"}
                    link={"https://lordgrilo.github.io/"}
                />.
                <br />
                My main interests are on Topological Data Analysis and Machine Learning.
                <br />
                <br />
            </div>
        </div>
    </div>
</div>

<style>
    .layout {
        width: 100%;
        min-height: 88vh;
        padding: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .content-wrapper {
        display: flex;
        gap: 1rem;
        width: 85vh;
        align-items: flex-start;
        justify-content: center;
        align-items: center;
    }

    .image-container {
        height: 100%;
        display: grid;
        place-items: center;
    }

    .profile-image {
        width: 180px;
        height: 240px;
        object-fit: cover;
        border-radius: 8px;
    }

    .about {
        font-size: 0.9rem;
        color: var(--hover);
        margin-left: 1rem;
    }

    .about .name {
        font-family: "Lora", serif;
        font-size: 1.4rem;
        margin-bottom: 0.5rem;
        margin-top: 2rem;
    }

    .timeline {
        padding: 20px;
    }

    /* Responsive design */
    @media (max-width: 768px) {
        .content-wrapper {
            flex-direction: column;
            align-items: center;
            width: 100%;
            max-width: 85vh;
        }

        .image-container {
            width: 100%;
        }

        .profile-image {
            width: 150px;
            height: 200px;
        }

        .about {
            margin-left: 0;
            text-align: center;
        }

        .about .name {
            text-align: center;
        }

        .timeline {
            width: 100%;
        }
    }
</style>
