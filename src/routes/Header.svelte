<script>
	import { page } from '$app/stores';
	import avatar from '$lib/images/avatar_svg.svg';
    export let data;
</script>

<header>
	<div class="corner">
		<a href="/">
			<img src={avatar} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/publications' ? 'page' : undefined}>
				<a href="/Publications">Publications</a>
			</li>
			<li aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}>
				<a href="/Projects">Projects</a>
			</li>
		</ul>
	</nav>

	<nav class="social">
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="https://github.com/antonio-leitao">Github</a>
			</li>
			<li aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}>
				<a href="https://scholar.google.com/citations?user=kJStlYkAAAAJ&hl=en">Scholar</a>
			</li>
		</ul>
	</nav>
</header>

<style>
    header{
        display: flex;
        flex-direction: row;
        width:100%;
        align-items: center;
        padding:1rem 1.5rem;
    }
    ul{
        list-style: none;
    }
    li {
      display: inline-block;
      margin-right: 0.8rem; /* add spacing between items */
    }
    a{
    text-decoration: none;
      color: var(--base);
      font-weight:400;
    }
    a:hover{
    text-decoration: underline;
    }
    .corner a img{
        height:1.4rem;
        margin-right:0.8rem;
        display:grid;
        place-items: center;
    }
    .social{
        margin-left:auto;
        margin-right:0;
    }
</style>

