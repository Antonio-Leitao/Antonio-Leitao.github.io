<script>
  export let title;
  export let description;
  export let tags;
  export let link;
  import OuterModal from "./outer_modal.svelte";
  let modal;
  import Icon from "./Icon.svelte";

</script>

<div class="container">
  <div on:click={() => modal.toggle()} class="overlay" />
  <div class="card">
    <div class="tools">
      <div class="circles">
        <div class="circle">
          <span class="red box" />
        </div>
        <div class="circle">
          <span class="yellow box" />
        </div>
        <div class="circle">
          <span class="green box" />
        </div>
      </div>
      <div class="navbar">localhost</div>
    </div>
    <div class="card-content">
      <div class="card-title">{title}</div>
      <p>Web project</p>
    </div>
  </div>

</div>

<OuterModal bind:this={modal}>
  <div on:click={() => window.open(link, "_blank")} class="modal-title">
    {title}
  </div>
  <div class="modal-break" />
  <div class="modal-description">{description}</div>
  <div class="framework">Built With:</div>
  <div class="built-with">
    {#each tags as tag}
      <div class="tag">
        <Icon name={tag} color={"lightslategray"} size={"3x"}/>
      </div>
    {/each}
  </div>
</OuterModal>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

  .container{
    position:relative;
  }
  .modal-title,
  .card-title {
    font-size: 1.6rem;
    font-family: Poppins, serif;
    font-weight: 600;
    color: black;
    line-height: 1.25;
    transition: color 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .modal-title:hover {
    cursor: pointer;
    color: #f96d15;
  }
  .card-content {
    height: 70%;
    position: relative;
    padding: 0.8rem;
  }

  .circles {
    display: flex;
    flex-direction: row;
    margin-right: 0.5rem;
  }
  .circle {
    padding: 0 4px;
  }

  .box {
    display: inline-block;
    align-items: center;
    width: 0.5rem;
    height: 0.5rem;
    padding: 1px;
    border-radius: 50%;
  }

  .red {
    background-color: #ff605c;
  }

  .yellow {
    background-color: #ffbd44;
  }

  .green {
    background-color: #00ca4e;
  }
  .tools {
    border-radius: 0.4em 0.4em 0 0;
    background-color: #38383d;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.4rem;
  }

  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    background-color: #4a4a4f;
    border-radius: 4px;
    color: #737373;
  }
  .card {
    position:absolute;
    top: 0;
    left: 0;
    width: 190px;
    height: 228px;
    background: rgb(255, 255, 255);
    border-radius: 0.4em;
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

  p {
    position: absolute;
    bottom: 0;
    font-size: 1rem;
    color: lightslategray;
    right: 10%;
    font-weight: 100;
  }
  .modal-description {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    font-family: Helvetica, sans-serif;
    font-weight: 100;
    color: lightslategray;
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
</style>
