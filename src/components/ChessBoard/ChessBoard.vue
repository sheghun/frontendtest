<template>
  <div class="max-w-3xl flex-grow basis-5/12 sm:h-4/5 grid grid-row-8 h-[100vw] row-span-full">
    <div v-for="(row, i) in rows" :key="i" class="grid gap-0 grid-cols-8">
      <div
        v-for="(col, i) in columns"
        :key="i"
        @click="selectSquare(`${col}${row}`)"
        :class="[paint(col === 'a'), { active: selectedSquare === `${col}${row}` }]"
        class="pl-1.5 relative"
      >
        <p v-if="col === 'a'" class="absolute top-0 left-1.5">{{ row }}</p>
        <p v-if="row === 1" class="absolute bottom-0 right-1.5">{{ col }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  font-size: 12px;
}

.active {
  background-color: brown !important;
}

.bg-first-pattern {
  background-color: var(--first-pattern);
  color: var(--second-pattern);
}

.bg-second-pattern {
  background-color: var(--second-pattern);
  color: var(--first-pattern);
}
</style>

<script lang="ts" src="./chess-board.script.ts"></script>
