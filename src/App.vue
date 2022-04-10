<template>
  <base-layout>
    <template #header>
      <Header />
    </template>
    <template #default>
      <sidebar />
      <router-view></router-view>
    </template>
    <template #footer>
      <Footer />
    </template>
  </base-layout>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import Footer from '@/components/Footer.vue'
import BaseLayout from '@/components/BaseLayout.vue'
</script>
