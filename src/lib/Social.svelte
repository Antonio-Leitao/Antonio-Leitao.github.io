<script>
  export let label = "facebook";
  export let color = "#1877F2";
</script>

<li class="icon" style="--color:{color}">
  <span class="tooltip">{label}</span>
  <span>
    <slot />
  </span>
</li>

<style>
  .icon {
    position: relative;
    background: #c8cacb;
    border-radius: 50%;
    margin: 10px;
    width: 50px;
    height: 50px;
    font-size: 18px;
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: all 0.1s ease-out;
  }

  .tooltip {
    left: 0;
    position: absolute;
    font-size: 14px;
    background: #ffffff;
    color: #ffffff;
    padding: 5px 8px;
    border-radius: 5px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.1s ease-out;
  }

  .tooltip::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background: #ffffff;
    left: 0.5px;
    top: 35%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.1s ease-out;
  }

  .icon:hover .tooltip {
    left: 70px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .icon:hover,
  .icon:hover .tooltip,
  .icon:hover .tooltip::before {
    background: var(--color);
    color: #ffffff;
  }
</style>
