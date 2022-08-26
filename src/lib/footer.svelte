<script>
  import Social from "./social.svelte";
</script>


<div class="parent">
  <div class="divider1" />
  <div class="button-row" id="footer">
    <Social name="Twitter" url="https://twitter.com/leitalhao" --socialcolor=#1da1f2> </Social>
    <Social name="Github" url="https://github.com/Antonio-Leitao" --socialcolor=#333333> </Social>
    <Social name="Email" url="mailto:antonio.leitao@centai.eu" --socialcolor=#e4405f> </Social>
    <Social name="Vitae" url="public/static/Antonio_Leitao_CV_updated.pdf" --socialcolor=var(--clr-wine)> </Social>
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
