<script>
  let {error} = $props();
</script>

{#if error}
  <p class="error">{error}</p>
{/if}