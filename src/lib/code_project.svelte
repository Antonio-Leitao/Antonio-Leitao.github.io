<script>
  export let title;
  export let description;
  export let tags;
  export let link;
  import OuterModal from "./outer_modal.svelte";
  import Icon from "./Icon.svelte";

  let modal;
</script>

<div class="container">
  <div on:click={() => modal.toggle()} class="overlay"></div>
  <div class="card">
    <div class="tools">
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
    <div class="card-content">
      <div class="card-title">>{title}_</div>
      <p>Code package</p>
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
  .container{
    position:relative;
  }
  .card {
    position:absolute;
    top: 0;
    left: 0;
    width: 190px;
    height: 228px;
    background-color: #011522;
    border-radius: 0.4rem;
    z-index:-1;
    box-shadow: 0.3em 0.3em 0.7em #00000015;
  }

  .card-content {
    height: 67%;
    position: relative;
    padding: 0.8rem;
  }
  .modal-title,
  .card-title {
    font-size: 1.5rem;
    font-family: "JetBrains Mono", monospace;
    font-weight: normal;
    color: white;
    line-height: 1.25;
  }

  .modal-title {
    cursor: pointer;
    color: black;
    font-weight: 600;
    transition: color 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .modal-title:hover {
    color: #f96d15;
  }

  .tools {
    display: flex;
    align-items: center;
    padding: 9px;
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
    right:10%;
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
