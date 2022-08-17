<script>
  import Social from "./social.svelte";
</script>


<div class="parent">
  <div class="divider1" />
  <div class="button-row" id="footer">
    <Social name="Twitter" --socialcolor=#1da1f2> </Social>
    <Social name="Github" --socialcolor=#333333> </Social>
    <Social name="Email" --socialcolor=#e4405f> </Social>
    <Social name="Vitae" --socialcolor=var(--clr-wine)> </Social>
  </div>
</div>

<style>

  .button-row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-top: 1.5rem;
  }

  .parent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:100%;
  }

  .divider1 {
    margin-bottom: 0.875rem;
    margin-top: 0.875rem;
    width: 100%;
    border-top: solid 1px var(--clr-gray);
  }
</style>
