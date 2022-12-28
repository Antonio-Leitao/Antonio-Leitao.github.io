<script>
  import { inView } from "./scripts/inview.js";
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  export let threshold=0.5;

  let visible;
  $:{console.log(visible)}
</script>

{#key visible}
  {#if visible}
    <div
      in:fly={{ duration: 300, x: -100, opacity: 0.5, easing: quintOut }}
      class:hidden={!visible}
      use:inView={{ threshold: threshold }}
      on:enter={() => (visible = true)}
      on:leave={() => (visible = false)}
    >
      <slot />
    </div>
  {:else}
    <div
      class:placeholder={!visible}
      use:inView={{ threshold: threshold }}
      on:enter={() => (visible = true)}
      on:leave={() => (visible = false)}
    >
      <slot />
    </div>
  {/if}
{/key}

<style>
  .placeholder {
    visibility: hidden;
  }
</style>
