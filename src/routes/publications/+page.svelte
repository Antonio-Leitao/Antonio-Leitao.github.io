<script>
    import Stack from './Stack.svelte';
    import Dropdown from './Dropdown.svelte';
    import {flip} from "svelte/animate";
    import {fly} from "svelte/transition";
    import {quintOut} from "svelte/easing";
    export let data;
    let selected_tag="all";
    function filterPapers(tag) {
      if (tag.toLowerCase() === 'all') {
        return data.papers;  // Return all objects if tag is "all"
      }
      return data.papers.filter(obj => obj.topic === tag);
    }

    $:selected_papers = filterPapers(selected_tag);
</script>
<svelte:head>
	<title>António Leitão • Publications</title>
	<meta name="description" content="List of publications" />
</svelte:head>

<section class="research">
    <div class="about">
        Here's a list of all my submitted research papers.<br/>
        Filter by topic <span class="dropdown"><Dropdown bind:selected_tag={selected_tag}/></span>
    </div>
    <div class="grid">
        {#each selected_papers as paper,i (paper.title)}
            <div in:fly={{duration:300,x:-100,delay:i*100,opacity:0.1,easing:quintOut}} animate:flip={{duration: 300, easing: quintOut }}>
                <Stack
                    title={paper.title}
                    topic={paper.topic}
                    size={Math.floor(Math.random() * 6) + 2}
                    published = {paper.published}
                    highlight = {paper.highlight}
                    url = {paper.url}
                />
            </div>
        {/each}
    </div>
</section>

<style>
  .research{
    width:100%;
    min-height: 88vh;
    padding:2rem;
    }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 200px)); /* Adjust the value as needed */
    justify-content: center; /* This will align the columns to the left */
    grid-gap: 2rem;
    place-items: center;
  }
    .about{
      font-size:1.3rem;
      font-weight:200;
      text-align: center;
    margin:3rem 0rem;
    }
  .dropdown{
      font-size:0.9rem;
      font-weight:400;
      display: inline-block;
      margin-left: 5px;
  }
</style>
