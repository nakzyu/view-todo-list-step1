<template>
  <div class="count-container">
    <span class="todo-count"
      >총 <strong>{{ itemsCount }}</strong> 개</span
    >
    <ul class="filters">
      <li @click="setViewMode('all')">
        <a class="all" :class="{ selected: viewMode === 'all' }" href="/#"
          >전체보기</a
        >
      </li>
      <li @czlick="setViewMode('active')">
        <a
          class="active"
          :class="{ selected: viewMode === 'active' }"
          href="#active"
          >해야할 일</a
        >
      </li>
      <li @click="setViewMode('completed')">
        <a
          class="completed"
          :class="{ selected: viewMode === 'completed' }"
          href="#completed"
          >완료한 일</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import TodoService from "../services/TodoService";
export default {
  methods: {
    setViewMode(type) {
      TodoService.setViewMode(type);
    },
  },
  computed: {
    viewMode() {
      return TodoService.state.viewMode;
    },
    itemsCount() {
      return TodoService.getFilteredItemsByMode().length;
    },
  },
};
</script>

<style></style>
