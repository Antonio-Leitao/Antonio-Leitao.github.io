<script>
    import HighlightText from "../HighlightText.svelte";
    function trimElipsis(text) {
        if (text.length > 100) {
            text = text.slice(0, 100) + "...";
        }
        return text;
    }
    export let title = "Topological effectivenes of machine learning paradigms";
    export let published;
    export let topic;
    export let size = 7;
    export let url;
    const colormap = {
        tda: "#7acbfe",
        ceti: "#ffdc7a",
        ml: "#ff8181",
    };
    let isHovered = false;
    function trimSize(x) {
        return Math.floor(Math.max(1, Math.min(15, Math.sqrt(x) / 1.5)));
    }

    function clampValue(value, limit) {
        if (Math.abs(value) > limit) {
            return value > 0 ? limit : -limit;
        }
        return value;
    }

    function stringToHash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }

    function getComponentSeed(title) {
        const today = new Date();
        const dateSeed =
            today.getFullYear() * 10000 +
            (today.getMonth() + 1) * 100 +
            today.getDate();
        const titleHash = stringToHash(title);
        return dateSeed + titleHash; // Combine date and title hash
    }

    // Use a faster PRNG (e.g., Mulberry32)
    function mulberry32(a) {
        return function () {
            let t = (a += 0x6d2b79f5);
            t = Math.imul(t ^ (t >>> 15), t | 1);
            t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
    }

    // Marsaglia polar method for generating normally distributed random numbers
    function getTRandomNumberMarsaglia(df, random) {
        let u, v, s;
        do {
            u = random() * 2 - 1;
            v = random() * 2 - 1;
            s = u * u + v * v;
        } while (s >= 1 || s === 0);

        let t = u * Math.sqrt(df * (s / (1 - s))); // Calculate t using one of the values

        t = clampValue(t, 7.5);
        return t;
    }

    // Create random number generator with today's seed
    const componentSeed = getComponentSeed(title);
    const random = mulberry32(componentSeed);

    function getTRandomNumber(df) {
        return getTRandomNumberMarsaglia(df, random);
    }
</script>

<a
    href={url}
    target="_blank"
    id={title}
    on:mouseenter={() => (isHovered = true)}
    on:mouseleave={() => (isHovered = false)}
>
    <div class="stack">
        {#each { length: trimSize(size) } as _, i}
            <div
                class="paper"
                style="--random:{getTRandomNumber(3)}; --order:{i}"
            />
        {/each}
        <div
            class="paper"
            style="--random:{getTRandomNumber(2)}; --order:{trimSize(size)};"
        >
            <div class="cover">
                <div class="content">
                    <div class="title">
                        <HighlightText
                            text={trimElipsis(title)}
                            color={colormap[topic]}
                            animationDuration={350}
                            delay={0}
                            iterations={1}
                            {isHovered}
                        />
                    </div>
                    <div class="count">{published}</div>
                </div>
            </div>
            <div />
        </div>
    </div>
</a>

<style>
    .stack {
        display: grid;
        place-items: center;
        /* margin: 1rem; */
        position: relative;
        min-width: 10rem;
        aspect-ratio: 1/1.4;
        z-index: 2;
    }
    .paper {
        position: absolute;
        top: 0;
        display: grid;
        place-items: center;
        /* border: 1px solid rgba(0, 0, 0, 0.2); */
        border-radius: 5px;
        width: 9rem;
        aspect-ratio: 1/1.4;
        cursor: pointer;
        /* Functional props*/
        --rotation: calc(
            calc(30deg / -4) + calc(calc(30deg / 25)) * var(--order)
        );
        transform: rotate(calc(var(--random) * 2deg))
            translate(calc(var(--order) * -2px), calc(var(--order) * -2px));
        transform-origin: center;
        transition: all 0.5s cubic-bezier(0.05, 0.43, 0.25, 0.95);
        background-color: white;
        --shadow: calc(var(--order) * 1px);
        box-shadow: 0px calc(var(--order) * 0.5px) min(var(--shadow), 10px)
            rgba(0, 0, 0, 0.25);
    }
    .paper:first-child {
        box-shadow: none;
    }
    .stack:hover > .paper {
        transform: rotate(calc(var(--random) * 1deg))
            translate(calc(var(--order) * -1px), calc(var(--order) * -1px));
        box-shadow: 0px calc(var(--order) * 0.2px) min(var(--shadow), 5px)
            rgba(0, 0, 0, 0.25);
    }
    a {
        color: inherit;
        font: inherit;
        text-decoration: inherit;
    }
    .cover {
        position: absolute;
        color: var(--hover);
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
    }
    .content {
        position: absolute;
        width: 92%;
        height: 95%;
        border-radius: 0.15rem;
        padding: 0.25rem;
    }
    .title {
        font-family: "Lora", serif;
        font-weight: 400;
        font-size: 0.82rem;
        line-height: 1rem;
        text-align: left;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -65%);
        width: 90%;
        /* margin-top: 0.5rem; */
    }
    .count {
        font-size: 0.6rem;
        color: lightgrey;
        position: absolute;
        bottom: 10%;
        right: 10%;
    }
</style>
