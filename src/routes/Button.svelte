
<script>
    export let text="Projects";
</script>
<div class="button">
    {text}
</div>
<style>
    .button{
        background-color:var(--hover);
        color:var(--text1);
        border:none;
        border-radius:0.4rem;
        padding:0.3rem 1rem;
        font-weight:300;
        cursor: pointer;
    }
    .button:hover{
        background-color:var(--base);
    }
</style>
