
<script>
    export let name;
    export let url;
    let classname;

    switch(name) {
    case "Email":
        classname="fab fa-solid fa-envelope";
        break;
    case "Vitae":
        classname = "fab fa-solid fa-file";
        break;
    default:
        classname = `fab fa-${name.toLowerCase()}`;
    };
</script>



<div class="fancy icon social">
    <!-- <span class="tooltip">{name}</span>
    <span> <Icon name={name.toLowerCase()} color={"lightslategray"} size={"1.4x"}/></span> -->
        <span class="tooltip">{name}</span>
        <a href={url} target="_blank">
          <span><i class={classname}></i></span>
        </a>
  </div>

<style>
    .icon {
    position: relative;
    background: #ffffff;
    border-radius: 50%;
    padding: 0.5rem;
    margin: 0.75rem;
    width: 2rem;
    height: 2rem;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
  }

  .fancy {
    box-shadow: 0 10px 6px -6px rgba(0, 0, 0, 0.2);
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .tooltip {
    position: absolute;
    top: 0;
    font-size: 14px;
    background: #ffffff;
    color: #ffffff;
    padding: 5px 8px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .tooltip::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background: #ffffff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .icon:hover .tooltip {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .icon:hover span,
  .icon:hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  }

  .social:hover,
  .social:hover .tooltip,
  .social:hover .tooltip::before {
    background: var(--socialcolor, #1da1f2);
    color: #ffffff;
  }

  a { color: inherit; } 
</style>