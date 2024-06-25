<script>
  import { annotate } from 'rough-notation';
  import { onMount } from 'svelte';

  export let text = '';
  export let index = 0;
  export let topic = "tda";

  let element;
  let annotation;
  
  const tagColors = {
    tda: '#4ebafd',
    ceti: '#ffd04d',
    ml: '#ff5757',
    // Add more tag-color mappings here
  };

  onMount(() => {
    if (element) {
      const words = text.split(' ');
      const annotatedWord = words[index];
      const annotatedText = text.replace(annotatedWord, `<span id="annotatedWord">${annotatedWord}</span>`);

      element.innerHTML = annotatedText;

      const annotatedElement = element.querySelector('#annotatedWord');
        
      if (annotatedElement) {
        annotation = annotate(annotatedElement, {
          type: 'circle',
          color: tagColors[topic], // Change the color here
          animationDuration:500,
          strokeWidth: 2, // Adjust the stroke width if needed
        });
      }
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
</script>

<div
  bind:this={element}
  id="myElement"
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
>
</div>
