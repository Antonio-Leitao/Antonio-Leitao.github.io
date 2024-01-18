
<script>
    export let text="Projects";
    export let disabled = false;
</script>
<div class="button" class:disabled>
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
        display: grid;
        align-items: center;
    }
    .button:hover{
        background-color:var(--base);
    }
    .disabled{
        background-color: var(--color-bg-1);
        color: var(--hover);
    }
    .disabled:hover{
        color: var(--text1)
    }
</style>
