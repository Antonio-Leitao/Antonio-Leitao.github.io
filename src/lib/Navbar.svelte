<script>
  function scrollIntoView({ target }) {
    const el = document.querySelector(target.getAttribute("href"));
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
    });
  }
</script>

<div class="glass header">
  <div class="navbar">
    <div class="sides">
      <div class="name">António</div>
      <div class="name" style="font-weight:700">Leitão</div>
    </div>

    <div class="center" />

    <ul class="sides">
      <li>
        <a href="#hero" on:click|preventDefault={scrollIntoView}>Home</a>
      </li>
      <li>•</li>
      <li>
        <a href="#research" on:click|preventDefault={scrollIntoView}
          >Research
        </a>
      </li>
      <li>•</li>
      <li>
        <a href="#projects" on:click|preventDefault={scrollIntoView}>Projects</a
        >
      </li>
    </ul>
  </div>
</div>

<style>
  ul {
    list-style: none;
  }
  li {
    display: table-cell;
  }
  .navbar {
    height: 5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100vw;
  }
  .center {
    flex: 2;
  }
  .sides {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .header {
    line-height: 56px;
    color: var(--text1);
    box-shadow: var(--shadow);
    height: 5rem;
    border: none;
    z-index: 1;
  }
  a {
    color: var(--text1);
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.12rem;
    font-weight: 100;
    display: inline-block;
    padding: 0px 1rem;
    position: relative;
  }
  a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  a:hover:after {
    width: 100%;
    left: 0;
  }

  .name {
    color: var(--text1);
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.12rem;
    font-weight: 100;

    display: inline-block;
    padding-left: 0.5rem;
  }
</style>
