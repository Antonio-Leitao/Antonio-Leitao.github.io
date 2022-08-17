<script>
  import Fa from "svelte-fa";
  import {
    faPython,
    faCss3Alt,
    faHtml5,
    faJsSquare,
    faGithub,
    faTwitter,
  } from "@fortawesome/free-brands-svg-icons";

  import {
    faFile,
    faEnvelope,
    faIcons,
  } from "@fortawesome/free-solid-svg-icons";
  export let name;
  export let color;
  export let size;
</script>

{#if name === "python"}
  <Fa icon={faPython} {color} {size} />
{:else if name === "css"}
  <Fa icon={faCss3Alt} {color} {size} />
{:else if name === "html"}
  <Fa icon={faHtml5} {color} {size} />
{:else if name === "javascript"}
  <Fa icon={faJsSquare} {color} {size} />
{:else if name === "github"}
  <Fa icon={faGithub} {color} {size} />
{:else if name === "twitter"}
  <Fa icon={faTwitter} {color} {size} />
{:else if name === "vitae"}
  <Fa icon={faFile} {color} {size} />
{:else if name === "email"}
  <Fa icon={faEnvelope} {color} {size} />
{:else if name === "svelte"}
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 98.1 118"
    style="enable-background:new 0 0 98.1 118;"
    xml:space="preserve"
  >
    <path
      class="svelte-foreground"
      d="M91.8,15.6C80.9-0.1,59.2-4.7,43.6,5.2L16.1,22.8C8.6,27.5,3.4,35.2,1.9,43.9c-1.3,7.3-0.2,14.8,3.3,21.3
        c-2.4,3.6-4,7.6-4.7,11.8c-1.6,8.9,0.5,18.1,5.7,25.4c11,15.7,32.6,20.3,48.2,10.4l27.5-17.5c7.5-4.7,12.7-12.4,14.2-21.1
        c1.3-7.3,0.2-14.8-3.3-21.3c2.4-3.6,4-7.6,4.7-11.8C99.2,32.1,97.1,22.9,91.8,15.6"
    />
    <path
      class="svelte-background"
      d="M40.9,103.9c-8.9,2.3-18.2-1.2-23.4-8.7c-3.2-4.4-4.4-9.9-3.5-15.3c0.2-0.9,0.4-1.7,0.6-2.6l0.5-1.6l1.4,1
        c3.3,2.4,6.9,4.2,10.8,5.4l1,0.3l-0.1,1c-0.1,1.4,0.3,2.9,1.1,4.1c1.6,2.3,4.4,3.4,7.1,2.7c0.6-0.2,1.2-0.4,1.7-0.7L65.5,72
        c1.4-0.9,2.3-2.2,2.6-3.8c0.3-1.6-0.1-3.3-1-4.6c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7l-10.5,6.7
        c-1.7,1.1-3.6,1.9-5.6,2.4c-8.9,2.3-18.2-1.2-23.4-8.7c-3.1-4.4-4.4-9.9-3.4-15.3c0.9-5.2,4.1-9.9,8.6-12.7l27.5-17.5
        c1.7-1.1,3.6-1.9,5.6-2.5c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.2,0.9-0.4,1.7-0.7,2.6l-0.5,1.6l-1.4-1
        c-3.3-2.4-6.9-4.2-10.8-5.4l-1-0.3l0.1-1c0.1-1.4-0.3-2.9-1.1-4.1c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7L32.4,46.1
        c-1.4,0.9-2.3,2.2-2.6,3.8s0.1,3.3,1,4.6c1.6,2.3,4.4,3.3,7.1,2.6c0.6-0.2,1.2-0.4,1.7-0.7l10.5-6.7c1.7-1.1,3.6-1.9,5.6-2.5
        c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.9,5.2-4.1,9.9-8.6,12.7l-27.5,17.5C44.8,102.5,42.9,103.3,40.9,103.9"
    />
  </svg>
{:else if name === "c++"}
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 306 344.35"
    enable-background="new 0 0 306 344.35"
  >
    <path
      class="c-background"
      fill="#00599C"
      d="M302.107,258.262c2.401-4.159,3.893-8.845,3.893-13.053V99.14c0-4.208-1.49-8.893-3.892-13.052L153,172.175
	L302.107,258.262z"
    />
    <path
      class="c-background"
      fill="#004482"
      d="M166.25,341.193l126.5-73.034c3.644-2.104,6.956-5.737,9.357-9.897L153,172.175L3.893,258.263
	c2.401,4.159,5.714,7.793,9.357,9.896l126.5,73.034C147.037,345.401,158.963,345.401,166.25,341.193z"
    />
    <path
      class="c-background"
      fill="#659AD2"
      d="M302.108,86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25,3.156c-7.287-4.208-19.213-4.208-26.5,0
	L13.25,76.19C5.962,80.397,0,90.725,0,99.14v146.069c0,4.208,1.491,8.894,3.893,13.053L153,172.175L302.108,86.087z"
    />
    <g>
      <path
        class="c-foreground"
        fill="#FFFFFF"
        d="M153,274.175c-56.243,0-102-45.757-102-102s45.757-102,102-102c36.292,0,70.139,19.53,88.331,50.968
		l-44.143,25.544c-9.105-15.736-26.038-25.512-44.188-25.512c-28.122,0-51,22.878-51,51c0,28.121,22.878,51,51,51
		c18.152,0,35.085-9.776,44.191-25.515l44.143,25.543C223.142,254.644,189.294,274.175,153,274.175z"
      />
    </g>
    <g>
      <polygon
        class="c-foreground"
        fill="#FFFFFF"
        points="255,166.508 243.666,166.508 243.666,155.175 232.334,155.175 232.334,166.508 221,166.508 
		221,177.841 232.334,177.841 232.334,189.175 243.666,189.175 243.666,177.841 255,177.841 	"
      />
    </g>
    <g>
      <polygon
        class="c-foreground"
        fill="#FFFFFF"
        points="297.5,166.508 286.166,166.508 286.166,155.175 274.834,155.175 274.834,166.508 263.5,166.508 
		263.5,177.841 274.834,177.841 274.834,189.175 286.166,189.175 286.166,177.841 297.5,177.841 	"
      />
    </g>
  </svg>
{:else}
  <Fa icon={faIcons} {color} {size} />
{/if}

<style>
  svg {
    height: 2rem;
  }
  .svelte-background {
    fill: white;
  }
  .svelte-foreground {
    fill: lightslategray;
  }

  .c-background {
    stroke: lightslategray;
    fill: lightslategray;
  }
  .c-foreground {
    fill: #ffffff;
  }
</style>
