<script>
    import Link from "./About/Link.svelte";
    import Header from "./Header.svelte";
    import "./styles.css";
    export const prerender = true;
</script>

<div class="app">
    <Header />
    <main>
        <slot />
        <footer>
            <p>
                Made by <Link
                    text={"António Leitão"}
                    link={"https://antonio-leitao.github.io/"}
                />
            </p>
        </footer>
    </main>
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 0rem 1rem;
        width: 100%;
        margin: 0 auto;
        box-sizing: border-box;
    }
    footer {
        width: 100%;
        display: grid;
        place-items: center;
        font-size: 0.7rem;
    }
</style>
