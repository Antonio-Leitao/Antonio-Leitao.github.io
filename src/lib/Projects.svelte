<script>
  import { fly, fade } from "svelte/transition";
  import Project from "./Project.svelte";
  import ScrollComponent from "./ScrollComponent.svelte";

  let projects = [
    {
      name: "JET",
      abstract:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis minus expedita ipsum dignissimos exercitationem provident est animi omnis!",
    },
    {
      name: "Heron",
      abstract:
        "Repellendus sapiente aliquid eum totam beatae. Cupiditate neque quod obcaecati dolor laboriosam.",
    },
    {
      name: "Scribe",
      abstract:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis minus expedita ipsum dignissimos exercitationem provident est animi omnis!",
    },
    {
      name: "Adamastor",
      abstract:
        "Repellendus sapiente aliquid eum totam beatae. Cupiditate neque quod obcaecati dolor laboriosam.",
    },
    {
      name: "Portuguese Iconography",
      abstract:
        "Repellendus sapiente aliquid eum totam beatae. Cupiditate neque quod obcaecati dolor laboriosam.",
    },
  ];
</script>

<ScrollComponent threshold={0.2}>
  {#each projects as { name, abstract }, i}
    <div in:fly="{{ x: -100, duration: 800, delay:i*300 }}" >
      <Project {name} {abstract} />
    </div>
  {/each}
</ScrollComponent>
