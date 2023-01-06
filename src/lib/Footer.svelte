<script>
  let year = new Date().getFullYear();
  import { Github, Twitter, Mail } from "lucide-svelte";
</script>

<div class="footer">
  <hr />
  <div class="about">
    <div class="subtitle">About</div>
    <p class="abstract">
      I'm a mathematician focused on appplied algebraic topology, topological
      data analysis and machine learning. I'm am however involved in multiple
      projects from NLP to Neuroscience. I have a passion for good aesthetics
      and frontend development.
    </p>
  </div>
  <div class="icons">
    <div
      on:click={() =>
        window.open("https://github.com/Antonio-Leitao", "_blank")}
      class="circle"
    >
      <Github color="#4A5057" strokeWidth={1} />
    </div>
    <div
      on:click={() => window.open("https://twitter.com/leitalhao", "_blank")}
      class="circle"
    >
      <Twitter color="#4A5057" strokeWidth={1} />
    </div>
    <div class="circle"><Mail color="#4A5057" strokeWidth={1} /></div>
  </div>
  <p class="abstract">António Leitão © {year}</p>
</div>

<style>
  hr {
    margin-top: 5rem;
    margin-bottom: 2rem;
    width: 60vw;
    height: 1px;
    color: var(--text3);
    background-color: var(--text3);
    opacity: 0.5;
    border: none;
  }
  .about {
    width: 40%;
  }
  .footer {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .icons {
    display: flex;
    flex-direction: row;
  }
  .circle {
    cursor: pointer;
    display: grid;
    place-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 1px solid var(--text3);
    margin: 1rem;
  }
  .circle:hover {
    background-color: var(--lvl1);
  }
</style>
