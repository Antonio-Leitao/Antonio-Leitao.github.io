<script>
  import ResearchPapers from "./ResearchPapers.svelte";

  let topics = [
    {
      topic: "Topological Data Analysis",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa perspiciatis libero necessitatibus provident qui rerum, eveniet ipsum magnam beatae doloribus, corporis nemo quisquam aliquam, excepturi repudiandae et at similique. Modi.",
      papers: [
        {
          title: "Topological expressive power of Neural Networks",
          url: "https://www.w3schools.com/jsref/jsref_length_array.asp",
          published: "NeurIPS 2020",
        },
        {
          title: "On the Topological Complexity of Decision Boundaries",
          url: "someurl",
          published: "NeurIPS 2020",
        },
        {
          title: "Topological expressive power of Neural Networks",
          url: "https://www.w3schools.com/jsref/jsref_length_array.asp",
          published: "NeurIPS 2020",
        },
        {
          title: "On the Topological Complexity of Decision Boundaries",
          url: "someurl",
          published: "NeurIPS 2020",
        },
      ],
    },
  ];
</script>

<div class="research">
  <div class="text">
    <div class="title">Research</div>
  </div>
  {#each topics as { topic, description, papers }}
    <ResearchPapers {topic} {description} {papers} />
  {/each}
</div>

<style>
  .research {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 100%;
  }
  .title {
    font-weight: 800;
  }

  .text {
    text-align: center;
  }
</style>
