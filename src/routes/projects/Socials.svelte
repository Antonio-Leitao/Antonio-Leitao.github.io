<script>
    export let url;
    export let pip;
    // Split the URL by "/"
    $:urlParts = url.split("/");
    // Get the last part (repo name) of the URL
    $:repo = urlParts[urlParts.length - 1];
    import {Download, Star} from "lucide-svelte";
</script>
<div class="socials">
    {#if pip}
    <div class="icon">
        <Download size=16 color=#656d76/> 
    </div>
    <img src={`https://img.shields.io/pepy/dt/${pip}?style=flat-square&label=%20&labelColor=rgba(255%2C255%2C255)&color=rgba(255%2C255%2C255)`} alt="downloadcount">
    Downloads &nbsp;&nbsp;
    {/if}
    <div class="icon">
        <Star size=16 color=#656d76/> 
    </div>
    <img src={`https://img.shields.io/github/stars/antonio-leitao/${repo}?style=flat-square&label=%20&labelColor=rgb(255%2C255%2C255)&color=rgb(255%2C255%2C255)`} alt="downloadcount">Stars
</div>

<style>
    .socials{
        position:absolute;
        bottom:2rem;
        display: flex;
        align-items: center;
        font-size:0.8rem;
        color:#656d76;
    }
    .icon{
        z-index: 1;
        display: grid;
        place-items: center;
    }
    img{
        margin-left:-0.5rem;
    }
</style>
