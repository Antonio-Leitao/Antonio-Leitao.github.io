<script>
    let selectedId = null;

function handleClick(e) {
  selectedId = e.target.id;
}
</script>


<div class="worfklow">
  <div class="branches">
    <div class="title">Develop with an open, thought-out API.</div>
    <div class="abstract">
      One of our main goals is to provide the best possible developer
      experience. Radix Primitives provides a fully-typed API. All components
      share a similar API, creating a consistent and predictable experience.
    </div>
    <div class="radio">
        <div on:keydown="{handleClick}" id="item1" class="{selectedId === 'item1' ? 'selected' : ''}">Item 1</div>
        <div on:keydown="{handleClick}" id="item2" class="{selectedId === 'item2' ? 'selected' : ''}">Item 2</div>
        <div on:keydown="{handleClick}" id="item3" class="{selectedId === 'item3' ? 'selected' : ''}">Item 3</div>
    </div>
  </div>
  <div class="stack">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nihil ipsa
    pariatur corrupti consequuntur suscipit vero dolorem, voluptate inventore
    voluptates fugit perferendis sit, quidem necessitatibus aliquid iusto, unde
    sunt eveniet.
  </div>
</div>

<style>
  .worfklow {
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .branches {
    background-color: aqua;
    display:flex;
    flex-direction: column;
  }
  .stack {
    background-color: coral;
  }

</style>
