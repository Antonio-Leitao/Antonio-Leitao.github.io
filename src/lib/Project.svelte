<script>
  export let name;
  export let url;
  export let tech;
  export let abstract;
  export let thumbnail;
  import Icon from "./Icon.svelte";
 </script>

<div class="card glass" on:click={() => window.open(url, "_blank")}>
  <div class="backdrop">
    <Icon
      name={thumbnail}
      color={"#c8cacb"}
      opacity={1}
      height={"50%"}
      width={"50%"}
    />
  </div>
  <div class="front" />
  <div class="back" />
  <div class="inner">
    <div class="date">{tech}</div>
    <div class="title">
      {name}
    </div>

    <div class="abstract">{abstract}</div>
  </div>
</div>

<style>
  .abstract {
    font-size: 0.7rem;
    line-height: 0.9rem;
    opacity: 0;
    color: var(--lvl1);
    transition-delay: 0.1s;
  }
  .inner {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    bottom: 0.5rem;
    left: 0.5rem;
    border: 1px solid var(--lvl1);
    border-radius: 0.25rem;
    padding: 1rem 1rem 1rem 1rem;
    text-align: center;
    color: var(--text1);
    transition: color 0.2s ease-out;
  }
  .front {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease-out;
  }
  .title {
    margin-top: 0.5rem;
    font-size: 1.2rem;
    font-weight: 800;
    color: inherit;
  }
  .date {
    color: var(--text2);
    font-size: 0.5rem;
    font-weight: 100;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }
  .card {
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 0.5rem;
    margin-top: 1.3rem;
    width: 12rem;
    aspect-ratio: 1/1.44;
    overflow-y: hidden;
    cursor: pointer;
  }
  .back {
    width: 100%;
    height: 100%;
    padding: 1rem;
    color: var(--lvl1);
    background-color: var(--text1);
    transform: translate(0, 100%);
    transition: all 0.2s ease-out;
  }

  .card:hover > .back {
    transform: translate(0, 0%);
  }
  .card:hover > .front {
    transform: translate(0, -100%);
  }
  .card:hover > .inner {
    color: var(--bg);
  }
  .inner:hover > .abstract {
    opacity: 1;
  }

  .backdrop {
    display: grid;
    place-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: 3rem;
  }
</style>
