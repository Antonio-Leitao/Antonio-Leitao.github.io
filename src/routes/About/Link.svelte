<script>
  import { annotate } from 'rough-notation';
  import { onMount } from 'svelte';

  export let text = '';
  export let link = '';

  let element;
  let annotation;

  onMount(() => {
    if (element) {
      annotation = annotate(element, {
        type: 'circle',
        color: '#4ebafd',
        animationDuration: 300,
        strokeWidth: 2,
        multiline:true,
      });
      annotation.hide();
    }
  });

  function handleMouseEnter() {
    if (annotation) {
      annotation.show();
    }
  }

  function handleMouseLeave() {
    if (annotation) {
      annotation.hide();
    }
  }
function handleClick() {
    if (link) {
      window.open(link, '_blank');
    }
  }
  </script>

<span
  bind:this={element}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  on:click={handleClick}
  style="cursor: pointer;"
>
  {text}
</span>

<style>
    span{
        font-weight:bold;
    }
</style>
