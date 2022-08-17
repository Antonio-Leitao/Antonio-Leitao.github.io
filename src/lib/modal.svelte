<script>
 import { scale } from 'svelte/transition';
 import { cubicOut } from 'svelte/easing';

  export let shown = false;
  export function toggle() {
    shown = !shown;
  }
  
</script>

{#if shown}
  <div class="backdrop">
    <div in:scale={{ start: 0.5, duration: 200, opacity:0.2,easing:cubicOut}} class="modal">
      <button on:click={() => toggle()} class="x">❌</button>
      <slot />
    </div>
  </div>
{/if}

<style>
  .backdrop {
    background-color: rgba(0,0,0, 0.4);
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    padding: 1.5rem;
    max-width: 50ch;
    border-radius: 1.5rem;
    background: #ffffff;
    border-radius: 0.5em;
    box-shadow: 0 10px 20px rgba(0,0,0, 0.2);
  }
  .x {
    cursor: pointer;
    float: right;
    filter: grayscale(1);
    border: none;
    background: none;
    transition: transform 0.3 ease;
  }
  .x:hover {
    transform: scale(1.2);
  }
</style>
