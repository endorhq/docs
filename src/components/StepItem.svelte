<script>
  export let step = 1;
</script>

<li class="relative pl-12 pb-2 last:pb-0 {$$props.class || ''}">
  <!-- Vertical line -->
  <div class="absolute left-4 top-8 bottom-0 w-px bg-light last:hidden" aria-hidden="true"></div>
  
  <!-- Step number -->
  <div class="step-number absolute left-0 w-8 h-8 rounded-full bg-light text-text-light flex items-center justify-center text-sm font-medium ring-2 ring-background">
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
    margin-top: 1rem;
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

  .step-number {
    top: 0;
    margin-top: 0 !important;
  }
</style>