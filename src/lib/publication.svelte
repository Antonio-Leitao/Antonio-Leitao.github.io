<script>
  export let title;
  export let authors;
  export let abstract;
  export let tags;
  export let link;
  import OuterModal from "./outer_modal.svelte";
  let modal;
</script>

<div class="container">
  <div on:click={() => modal.toggle()} class="overlay"></div>
  <div class="card">
    <div class="card-content">
      {#if title.length < 65}
      <div class="card-title">{title}</div>
      {:else}
      <div class="card-title">{title.slice(0,65)+"..."}</div>
      {/if}
      <p>Publication</p>
    </div>
  </div>
</div>


<OuterModal bind:this={modal}>
  <div on:click={() => window.open(link, "_blank")} class="modal-title">
    {title}
  </div>
  <div class="modal-authors">{authors}</div>
  <div class="modal-break" />
  <div class="modal-abstract">{abstract}</div>
  <div class="framework">Tags</div>
  <div class="built-with">
    {#each tags as tag}
      <div class="tag solo">{tag}</div>
    {/each}
  </div>
</OuterModal>

<style>
  @import url("https://fonts.googleapis.com/css?family=Arbutus+Slab|Open+Sans&display=swap");
  .container{
    position:relative;
  }
  .card {
    position:absolute;
    top: 0;
    left: 0;
    width: 190px;
    height: 228px;
    background: rgb(255, 255, 255);
    border-radius: 0.4rem;
    box-shadow: 0.3em 0.3em 0.7em #00000015;
    z-index:-1;
  }
  .overlay {
    cursor: pointer;
    width: calc(190px - 0.2rem);
    height: calc(228px - 0.2rem);
    border-radius: 0.4rem;
    border: rgba(249, 109, 21,0) 0.2rem solid;
    transition: border 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .overlay:hover {
    border: rgba(249, 109, 21,1) 0.2rem solid;
  }
  .card-content {
    height: 86%;
    position: relative;
    padding: 0.8rem;
  }
  .modal-title,
  .card-title {
    font-family: Arbutus Slab, serif;
    margin-top: 0.1rem;
    font-size: 1.4rem;
    font-weight: 400;
    color: #000;
    line-height: 1.25;
    transition: color 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .modal-title:hover {
    cursor: pointer;
    color: #f96d15;
  }

  p {
    position: absolute;
    bottom: 0;
    right:10%;
    font-size: 1rem;
    color: lightslategray;
    font-weight: 100;
  }

  .modal-authors,
  .modal-abstract {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    font-family: Helvetica, sans-serif;
    font-weight: 100;
    color: lightslategray;
  }

  .modal-authors {
    font-size: 0.8rem;
  }
  .modal-break {
    margin: 1rem 15% 1rem 15%;
    width: 70%;
    border: 0.05rem solid lightslategray;
  }

  .built-with {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

  .framework {
    margin: 0;
    font-family: Helvetica, sans-serif;
    color: lightslategray;
    display: flex;
    justify-content: flex-end;
    font-size: 0.8rem;
    font-weight: 100;
  }

  .tag {
    position: relative;
    background: #ffffff;
    margin: 0.2rem;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    font-size: 0.7rem;
    line-height: 1;
  }

  .solo {
    color: white;
    background-color: lightslategray;
    border-radius: 0.4rem;
    height: 3ch;
    padding: 0.2rem;
  }
</style>
