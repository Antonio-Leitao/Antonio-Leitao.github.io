<script>
  export let topic;
  export let description;
  export let papers;
  function randomFloat(start, end) {
    return Math.random() * (end - start) + start;
  }

  let colapsed = true;
</script>

<div class="main">
  <div class="stack">
    {#each papers as { title, url, published }, i}
      <div
        class="paper"
        on:click={() => window.open(url, "_blank")}
        class:shuffled={colapsed}
        class:straight={!colapsed}
        style="--random:{randomFloat(-1, 1)}; --order:{i}"
      >
        <div class="inner">
          <div class="title">
            {title}
          </div>
          <div class="date">{published}</div>
        </div>
      </div>
    {/each}
    <div
      class="cover"
      on:click={() => (colapsed = !colapsed)}
      class:glassy={!colapsed}
    >
      <div class="inner">
        <div class="date">{papers.length} papers</div>
        <div class="name">
          {topic}
        </div>
      </div>
    </div>
  </div>
  <div class="description">
    <p class:hidden={!colapsed}>
      {description}
    </p>
  </div>
</div>

<style>
  .main {
    min-width: 100%;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .stack {
    display: grid;
    place-items: center;
    margin: 2rem;
    position: relative;
    min-width: 14rem;
    aspect-ratio: 1/1.4;
  }
  .cover,
  .paper {
    position: absolute;
    top: 0;
    display: grid;
    place-items: center;
    border: 1px solid #000;
    border-radius: 5px;
    width: 12rem;
    aspect-ratio: 1/1.4;
    cursor: pointer;
  }

  .inner {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    bottom: 0.5rem;
    left: 0.5rem;
    border: 1px solid var(--text3);
    border-radius: 0.25rem;
    padding: 1rem 1rem 1rem 1rem;
    text-align: center;
    transition: color 0.4s ease-out;
  }

  .hidden {
    opacity: 0;
    pointer-events: none;
  }

  .cover {
    cursor: pointer;
    color: var(--text1);
    background-color: var(--bg);
    box-shadow: var(--shadow);
    transition: all 0.1s ease;
  }

  .glassy {
    background-color: rgba(10, 10, 10, 0.01);
    box-shadow: 0 10px 15px rgb(0 0 0 / 40%);
    backdrop-filter: blur(10px);
    background-blend-mode: overlay;
    transition: all 1s ease;
  }

  .paper {
    transition: all calc(0.3s + calc(0.03s * var(--order))) ease;
    background-color: var(--text1);
    box-shadow: var(--shadow);
  }
  .paper .inner {
    text-align: left;
  }
  .shuffled {
    transform-origin: center;
    transform: rotate(calc(var(--random) * 13deg))
      translate(calc(var(--random) * 8px), calc(var(--random) * 8px));
    z-index: 0;
  }
  .straight {
    transform: translate(calc(13rem + calc(8rem * var(--order))), 0);
    box-shadow: -0.3em 0.3em 0.7em #00000020;
  }
  .straight:hover ~ .straight {
    transform: translate(calc(17rem + calc(8rem * var(--order))), 0);
  }
  .straight:hover {
    transform: translate(calc(13rem + calc(8rem * var(--order))), -1rem);
  }

  .title,
  .name {
    font-family: "Libre Baskerville", serif;
    letter-spacing: 0.1rem;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    font-weight: 800;
    color: inherit;
  }
  .name {
    position: absolute;
    top: 30%;
  }
  .title {
    letter-spacing: 0.05rem;
  }
  .date {
    color: var(--text2);
    font-size: 0.5rem;
    font-weight: 100;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }
  .description {
    font-size: 1.4rem;
    font-weight: 100;
    color: var(--text2);
    margin-bottom: 5rem;
  }
</style>
