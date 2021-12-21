<template>
  <ul id="todo-list" class="todo-list">
    <todo-item v-for="item in items" :key="item.key" :item="item" />
  </ul>
</template>

<script>
import TodoService from "../services/TodoService";
import TodoItem from "./TodoItem.vue";

export default {
  components: {
    TodoItem,
  },
  computed: {
    items() {
      return TodoService.getFilteredItemsByMode();
    },
  },
};
</script>

<style></style>
