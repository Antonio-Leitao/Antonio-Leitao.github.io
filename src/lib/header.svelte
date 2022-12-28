<script>
    export const threshold = 15;
    export let header_size = 60;
  
    let y0;
    let y;
    let delta;
    let hide = true;
  
    $: {
      delta = y - y0;
      if (delta > threshold) {
        hide = true;
      } else if (delta < -threshold) {
        hide = false;
      }
      y0 = y;
    }
  </script>
  
  <svelte:window bind:scrollY={y} />
  
  <div class="slotHeader" class:hide={y > header_size && hide}>
    <slot />
  </div>
  
  <style>
    .slotHeader {
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      transition: all 0.2s ease-in-out;
      z-index:2;
    }
    .slotHeader.hide {
      transform: translateY(-100%);
    }
  </style>
  