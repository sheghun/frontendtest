import { ref } from 'vue';
import { useMovesStore } from '@/stores/move';

export default {
  setup() {
    const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const rows = [8, 7, 6, 5, 4, 3, 2, 1];
    const selectedSquare = ref('');
    const moveStore = useMovesStore();

    // paint shuffles rotates the background color to apply to a tile
    // by switching between css classes based on position of the current tile
    const paint = (() => {
      const firstPattern = 'bg-first-pattern';
      const secondPattern = 'bg-second-pattern';
      let pattern = firstPattern;
      // closure
      return (returnLastPattern: boolean) => {
        if (returnLastPattern) {
          return pattern;
        }
        if (pattern === firstPattern) {
          pattern = secondPattern;
        } else {
          pattern = firstPattern;
        }

        return pattern;
      };
    })();

    const selectSquare = (square: string) => {
      selectedSquare.value = square;
      moveStore.addMove(square);
    };

    return {
      paint,
      selectedSquare,
      selectSquare,
      rows,
      columns
    };
  }
};
