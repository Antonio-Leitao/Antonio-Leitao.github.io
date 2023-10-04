<script>
    export let name; 
    export let url; 
</script>

<div class="link">
    <a href={url} target="_blank">{name}</a>
</div>

<style>
    .link{
        position:relative;
        display: inline;
        width:fit-content;
        cursor: pointer;
    }
    .link::before{
        content:"";
        position:absolute;
        width:0;
        top:0;
        left:0;
        height:1.3rem;
        background-color:var(--foreground);
        transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        z-index:-1;
    }
    .link:hover::before{
        width:100%;
    }
    .link:hover{
        color:var(--hover) 
    }
    a{
        text-decoration: none;
        color: inherit;
    }
</style>
