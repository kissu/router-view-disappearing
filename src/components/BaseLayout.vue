<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main class="flex">
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  gap: 2rem;
}
</style>
