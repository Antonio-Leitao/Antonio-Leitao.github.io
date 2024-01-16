<script>
    export let name;
    export let url;
    export let icon;
    export let lang;
    export let summary= "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.";
    import GithubStats from "./GithubStats.svelte";
    import Icon from "./Icon.svelte";
</script>

<div class="project" on:click={() => window.open(url, "_blank")}>
    <div class="project-icon">
        <Icon
            name={icon}
            color={"#FFF"}
            opacity={1}
            height={"100%"}
            width={"100%"}
        />
    </div>
    <div class="project-title">{name}</div>
    <div class="project-date">{lang.toUpperCase()}</div>
    <div class="github">
        <div class="github-number">
            <GithubStats username={"tauri"} repo={"tauri"}/>
        </div> Stars 
        <div class="github-number">
            3
        </div> Downloads
    </div>
    <div class="project-summary">{summary}</div>
</div>

<style>
    .project{
        position:relative;
        padding:1.3rem 1.5rem;
        margin-top:1rem;
        border-radius: 6px;
        width:300px;
        height:264px; 
        box-shadow:var(--shadow);
        background-color:#fff;
        cursor:pointer;
        transition: all 0.25s ease;
        border:solid 1px rgb(208, 215, 222);
    }
    .project:hover{
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    }
    .project-date{
        font-size: 0.8rem;
    }
    .project-icon{
        display: grid;
        place-items:center;
        padding:0.6rem;
        border-radius:50%;
        height:4rem;
        width:4rem;
        margin-bottom:0.65rem;
        background-color:var(--surfaces);
    }
    .project-title{
        margin: 0 0 0rem 0;
        font-family: 'Lora', serif;
        font-size: 1.2rem;
        font-weight:900;
        line-height: 1.6rem;
        color: var(--hover);
    }
    .project-summary{
        font-size:0.8rem;
        margin-top:0.3rem;
        color:var(--muted);
        line-height:1.3rem;
    }
    .github{
        position:absolute;
        bottom:1.3rem;
        font-size:0.8rem;
        display:flex;
    }
    .github-number{
        color:var(--muted);
    }

</style>
