<script>
  export let title = '';
</script>

<div class="my-8">
  {#if title}
    <h3 class="text-xl font-semibold mb-4 text-text">{title}</h3>
  {/if}
  <ol class="list-none p-0 m-0">
    <slot />
  </ol>
</div>