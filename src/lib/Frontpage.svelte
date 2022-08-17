<div class="parent">
  <div id="image01" class="image">
    <span class="frame">
      <img class="fancy" src="images/avatar_leitao.png" alt="António Leitão" />
    </span>
  </div>
  <h1 id="name">António Leitão</h1>
  <div class="divider2" />
  <p id="subtitle">PhD Student</p>
</div>


<style>
  @import url("https://fonts.googleapis.com/css2?family=Arbutus+Slab&family=Poppins&display=swap");

  .parent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .image .frame img {
    width: 9rem;
    border-radius: 100%;
    margin-top: 1.875rem;
    margin-bottom: 1.875rem;
  }

  .fancy {
    box-shadow: 0 10px 6px -6px rgba(0, 0, 0, 0.2);
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .divider2 {
    margin-bottom: 0.875rem;
    margin-top: 0.875rem;
    width: 100%;
    border-top: solid 1px var(--clr-gray);
    width: 10%;
    margin-bottom: 0.2rem;
    margin-top: 0.2rem;
  }

  #name {
    /* text-transform: uppercase; */
    font-family: Arbutus Slab, serif;
    color: var(--clr-dark);
    /* letter-spacing: 0.25rem; */
    font-size: 2em;
    line-height: 1.25;
  }

  #subtitle {
    font-family: Helvetica;
    font-weight: 100;
    text-transform: uppercase;
    color: var(--clr-dark);
    letter-spacing: 0.225rem;
    font-size: 0.75rem;
    line-height: 1.5;
    margin: 1rem;

  }
</style>
