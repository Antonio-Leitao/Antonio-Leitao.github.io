<script>
  let scroll;
</script>

<svelte:window bind:scrollY={scroll} />

<div class="hero">
  <div class="wrapper" style="filter:blur({scroll * 0.05}px)">
    <div class="description">
      Mathematician with passion for frontend and we development. My main
      reserach is on Topological Data Analysis and mathematical fundamentals of
      machine learning.
    </div>
    <img src="public/static/website_main.png" alt="Illustrative Statue" />
  </div>
  <div class="text" style="transform:translate(0,-{scroll * 0.5}px)">
    <div class="displaytitle shadow">Math • Machine Learning • Frontend</div>
    <div class="subtitle shadow">António Leitão</div>
  </div>
</div>

<style>
  .hero {
    width: 100%;
    display: grid;
    place-items: center;
  }
  .text {
    position: absolute;
    top: 70%;
    z-index: 1;
    text-align: center;
  }

  .shadow {
    text-shadow: var(--bg) 0px 0px 10px;
  }
  .wrapper {
    position:relative;
    padding-top: 5rem;
  }
  .description{
    position:absolute;
    top:40%;
    width:30ch;
    left:0rem;
    color: var(--text2);
    font-weight:100;
    z-index:1;
  }

  img {
    width: 45vw;
    mask: linear-gradient(var(--bg), var(--bg), var(--bg), transparent);
    filter: brightness(80%);
  }
</style>
