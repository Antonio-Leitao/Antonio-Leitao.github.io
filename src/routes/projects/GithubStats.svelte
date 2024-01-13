<script>
  export let username;
  export let repo;

  // let repoDetails = null;

  async function fetchRepoDetails() {
    const response = await fetch(`https://api.github.com/repos/${username}/${repo}`);
    let repoDetails = await response.json();
    return repoDetails
  }
</script>

{#await fetchRepoDetails() then repoDetails }
  {repoDetails.stargazers_count}
{/await}
<!-- <main> -->
<!--   <h1>GitHub Repository Details</h1> -->
<!--   <button on:click={fetchRepoDetails}>Get Details</button> -->
<!---->
<!--   {#if repoDetails !== null} -->
<!--     <p>The repository {username}/{repo} has:</p> -->
<!--     <ul> -->
<!--       <li>{repoDetails.stargazers_count} stars</li> -->
<!--       <li>{repoDetails.language ? `Main language: ${repoDetails.language}` : 'Language information not available'}</li> -->
<!--       <li>{repoDetails.forks_count} forks</li> -->
<!--       <li>{repoDetails.watchers_count} watchers</li> -->
<!--     </ul> -->
<!--   {/if} -->
<!-- </main> -->

