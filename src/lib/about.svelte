<div class="about glass">
  <div class="left">
    <div class="title">Publications</div>
    <div class="description">
      Mathematician with passion for frontend and we development. My main
      reserach is on Topological Data Analysis and mathematical fundamentals of
      machine learning.
    </div>
  </div>

  <div class="right">
    <div class="card"><div class="front">Publications</div></div>
  </div>
</div>

<style>
  .about {
    position: relative;
    height: 70vh;
    display: grid;
    grid-template-columns: 1fr 1fr; /* 1fr for the left column, 3fr for the right column */
    grid-template-rows: 1fr;
    place-items: center;
  }
  .left {
    grid-column: 1; /* left column starts at the first grid column */
    grid-row: 1;
  }
  .right {
    grid-column: 2; /* left column starts at the first grid column */
    grid-row: 1;
    height: 100%;
    width: 100%;
    display: grid;
    position: relative;
    place-items: center;
  }
  .description {
    font-size: 1.4rem;
    font-weight: 100;
    color: var(--text2);
  }
  .card {
    position: relative;
    width: 60%;
    aspect-ratio: 1/1.44;
    background-color: var(--text1);
    border-radius: 1.5rem;
  }
  .front {
    position: absolute;
    top: 1rem;
    right: 1rem;
    bottom: 1rem;
    left: 1rem;
    border: 2px solid var(--bg);
    border-radius: 0.5rem;
  }
</style>
