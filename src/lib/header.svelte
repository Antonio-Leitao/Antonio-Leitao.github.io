
<script>
  export let content;
  export function buttonToggle(value) {
    content = value;
  }
</script>


<div class="parent">
    <div class="button-row">
        <div on:click={()=>buttonToggle("home")} class="clickable fancy">Home</div>
        <div on:click={()=>buttonToggle("about")} class="clickable fancy" >About</div>
        <div on:click={()=>buttonToggle("work")} class="clickable fancy" >Work</div>
    </div>
    <div class="divider1"></div>
</div>



<style>


.button-row {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 1.5rem;
}

.parent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:100%;
}

.clickable {
  cursor: pointer;
  background: var(--clr-white);
  display: flex;
  justify-content: center;
  width: 6.5rem;
  height: 2.25rem;
  margin: 0.25rem;
  line-height: 2.25rem;
  vertical-align: middle;
  padding: 0 1.125rem;
  font-family: "Helvetica";
  text-transform: uppercase;
  font-size: 0.625em;
  letter-spacing: 0.2rem;
  padding-left: calc(0.225rem + 1.125rem);
  font-weight: 400;
  border-radius: 1.625rem;
  transition: color 0.25s ease, background-color 0.25s ease,
    border-color 0.25s ease;
  color: var(--clr-dark);
  /* border: solid 1px var(--clr-gray); */
}

.clickable:hover {
  color: var(--clr-white);
  border-color: var(--clr-white);
  background: linear-gradient(315deg, var(--clr-drkorange), var(--clr-orange));
}

.fancy {
  box-shadow: 0 10px 6px -6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.divider1{
  margin-bottom: 0.875rem;
  margin-top: 0.875rem;
  width: 100%;
  border-top: solid 1px var(--clr-gray);
}

</style>