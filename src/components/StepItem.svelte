<script>
  export let step = 1;
</script>

<li class="group relative pl-12 pb-2 last:pb-0 last: {$$props.class || ''}">
  <!-- Vertical line -->
  <div
    class="step-line absolute left-4 top-10 bottom-0 w-px mb-6 group-last:hidden"
    aria-hidden="true"
  ></div>

  <!-- Step number -->
  <div
    class="step-number absolute left-0 w-8 h-8 rounded-full flex items-center justify-center text-sm"
  >
    {step}
  </div>

  <!-- Step content -->
  <div class="step-content">
    <slot />
  </div>
</li>

<style>
  .step-content {
    margin-top: 0;
    margin-bottom: 0;
  }

  :global(.step-content > *:first-child) {
    margin-top: 0;
  }

  :global(.step-content > *:last-child) {
    margin-bottom: 0;
  }

  :global(.step-content pre) {
    margin-bottom: 1rem;
  }

  @media (max-width: 50rem) {
    li {
      padding-left: 3rem;
    }

    div:nth-child(2) {
      width: 2rem;
      height: 2rem;
      font-size: 0.875rem;
    }

    div:first-child {
      left: 1rem;
    }
  }

  .step-line {
    background-color: var(--sl-rapide-ui-border-color);
  }

  .step-number {
    top: 0;
    font-weight: bold;
    margin-top: 0 !important;
    color: var(--sl-color-accent-high);
    border: 2px solid var(--sl-color-accent);
  }
</style>
