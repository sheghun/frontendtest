<script lang="ts">
import { useMovesStore } from '@/stores/move';
import { computed } from 'vue';

export default {
  setup() {
    const movesStore = useMovesStore();
    const moves = computed(() => movesStore.moves.join(' -> '));

    return {
      moves
    };
  }
};
</script>

<style scoped>
.frame {
  border: solid 0.5px grey;
  font-size: 13px;
  font-family: Menlo;
}
</style>

<template>
  <div class="basis-full md:basis-4/12 pt-16 px-4 flex flex-col items-center">
    <h1 class="text-3xl">Dashboard</h1>
    <div class="pt-4 w-full">
      <h3 class="text-xl pb-2 text-center">Moves</h3>
      <div class="frame min-w-full h-96 text-slate-400">
        {{ moves }}
      </div>
    </div>
  </div>
</template>
