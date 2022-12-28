<script>
  export let name;
  export let abstract;
</script>

<div class="glass card">
  <div class="info">
    <div class="title">
      {name}
    </div>
    <div class="abstract">
      {abstract}
    </div>
  </div>
  <div class="image">
    <img src="public/static/Armilar.svg" alt="My SVG">
  </div>
</div>

<style>
  .card {
    border-radius: 0.5rem;
    margin-top: 1.3rem;
    width: 45rem;
    height: 13rem;
    display: grid;
    grid-template-columns: 3fr 1fr; /* 1fr for the left column, 3fr for the right column */
    grid-template-rows: 1fr;
  }
  .info{
    padding: 1.5rem;
    display:flex;
    flex-direction: column;
    justify-content: center;
    grid-column: 1; /* left column starts at the first grid column */
    grid-row: 1;
  }
  .image{
    grid-column: 2; /* left column starts at the first grid column */
    grid-row: 1;
    border-top-right-radius: 0.5rem; /* add border radius to top right corner */
    border-bottom-right-radius: 0.5rem;
    color:#fff
  }
</style>
