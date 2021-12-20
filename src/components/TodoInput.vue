<template>
  <input
    id="new-todo-title"
    class="new-todo"
    placeholder="할일을 추가해주세요"
    v-model="text"
    @keyup.enter="addItem(text)"
    autofocus
  />
</template>

<script>
import TodoService from "../services/TodoService";

export default {
  data() {
    return {
      text: "dd",
      addItem: TodoService.addItem,
    };
  },
};
</script>

<style></style>
