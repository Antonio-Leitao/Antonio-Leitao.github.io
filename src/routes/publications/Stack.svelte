<script>
    import Annotated from "./Annotated.svelte";
  function trimElipsis(text) {
    if (text.length > 100) {
      text = text.slice(0, 100) + "...";
    }
    return text;
  }
  export let title = "Topological effectivenes of machine learning paradigms";
  export let published;
  export let topic;
  export let highlight;
  export let size = 7;
  export let url;
  function trimSize(size) {
    if (size > 8) {
      size = Math.floor(3 * Math.log2(size));
    }
    return size;
  }

    function clampValue(value, limit) {
        if (Math.abs(value) > limit) {
            return value > 0 ? limit : -limit;
        }
        return value;
    }
  function getTRandomNumber(df) {
    var z1 = Math.random() * 2 - 1; // uniform(-1, 1)
    var z2 = Math.random() * 2 - 1; // uniform(-1, 1)
    var s = z1 * z1 + z2 * z2;
    while (s === 0 || s > 1) {
      z1 = Math.random() * 2 - 1; // uniform(-1, 1)
      z2 = Math.random() * 2 - 1; // uniform(-1, 1)
      s = z1 * z1 + z2 * z2;
    }
    var t = z1 * Math.sqrt(df * (s / (1 - s)));

    t = clampValue(t,7.5);
    return t;
  }
</script>

<a href={url} target="_blank">
  <div class="stack">
    {#each { length: trimSize(size) } as _, i}
      <div class="paper" style="--random:{getTRandomNumber(3)}; --order:{i}" />
    {/each}

    <div
      class="paper"
      style="--random:{getTRandomNumber(2)}; --order:{trimSize(size)};"
    >
      <div class="cover">
        <div class="content">
          <div
            class="title"
          >
         <Annotated text={trimElipsis(title)} index={highlight} topic={topic}/>
          </div>
          <div class="count">{published}</div>
        </div>
      </div>
      <div />
    </div>
  </div>
</a>

<style>
  .stack {
      display: grid;
      place-items: center;
      /* margin: 1rem; */
      position: relative;
      min-width: 10rem;
      aspect-ratio: 1/1.4;
    }
  .paper {
      position: absolute;
      top: 0;
      display: grid;
      place-items: center;
      /* border: 1px solid rgba(0, 0, 0, 0.2); */
      border-radius: 5px;
      width: 9rem;
      aspect-ratio: 1/1.4;
      cursor: pointer;
      /* Functional props*/
      --rotation: calc(calc(30deg / -4) + calc(calc(30deg / 25)) * var(--order));
      transform: rotate(calc(var(--random) * 2deg))
        translate(calc(var(--order) * -2px), calc(var(--order) * -2px));
      transform-origin: center;
      transition: all 0.5s cubic-bezier(0.05, 0.43, 0.25, 0.95);
      background-color: white;
      --shadow: calc(var(--order) * 1px);
      box-shadow: 0px calc(var(--order) * 0.5px) min(var(--shadow), 10px)
        rgba(0, 0, 0, 0.25);
    }
  .paper:first-child {
    box-shadow: none;
  }
  .stack:hover > .paper {
    transform: rotate(calc(var(--random) * 1deg))
      translate(calc(var(--order) * -1px), calc(var(--order) * -1px));
    box-shadow: 0px calc(var(--order) * 0.2px) min(var(--shadow), 5px)
      rgba(0, 0, 0, 0.25);
  }
  a {
    color: inherit;
    font: inherit;
    text-decoration: inherit;
  }
  .cover {
    position: absolute;
    color: var(--hover);
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
  }
  .content {
    position: absolute;
    width: 92%;
    height: 95%;
    border-radius: 0.15rem;
    padding: 0.25rem;
  }
  .title {
    font-family: "Lora", serif;
    font-weight: 400;
    font-size: 0.82rem;
    line-height: 1rem;
    text-align: left;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-65%);
    width: 90%;
    /* margin-top: 0.5rem; */
  }
  .count {
    font-size: 0.6rem;
    color: lightgrey;
    position: absolute;
    bottom: 10%;
    right: 10%;
  }
</style>
