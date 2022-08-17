<script>
  import { onMount } from "svelte";
  import Modal from "./modal.svelte";
  let modal;
  onMount(() => {
    document.body.appendChild(modal);
  });


  export let shown = false;
  export function toggle() {
    shown = !shown;
  }
</script>

<div bind:this={modal}>
  <Modal bind:shown={shown}>
    <slot />
  </Modal>
</div>
