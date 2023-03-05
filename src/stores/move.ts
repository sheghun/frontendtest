import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useMovesStore = defineStore('moves', () => {
  const store = ref<string[]>([]);

  function addMove(move: string) {
    store.value = [...store.value, move];
  }

  return { moves: store, addMove };
});
