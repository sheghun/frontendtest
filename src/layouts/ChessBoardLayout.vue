<script setup>
import ChessBoard from '@/components/ChessBoard/ChessBoard.vue';
import Dashboard from '@/components/Dashboard/Dashboard.vue';
</script>

<template>
  <div
    class="w-screen md:mx-auto sm:flex justify-center flex-wrap h-screen max-w-screen-2xl mx-auto pt-16 px-4 bg-black"
  >
    <ChessBoard />
    <Dashboard />
  </div>
</template>
