<template>
  <li :class="liClass" @dblclick="toggleEditMode">
    <div class="view">
      <input class="toggle" type="checkbox" v-model="item.isCompleted" />
      <label class="label">{{ item.text }}</label>
      <button class="destroy" @click="deleteItem(item.key)"></button>
    </div>
    <input
      class="edit"
      value="새로운 타이틀"
      v-model="item.text"
      @keyup.enter="updateItemText(item.key, item.text)"
    />
  </li>
</template>

<script>
import TodoService from "../services/TodoService";

export default {
  props: {
    item: {
      text: String,
      key: String,
      isCompleted: Boolean,
    },
  },
  data() {
    return { nowEditing: false };
  },
  methods: {
    updateItemText(key, text) {
      TodoService.updateItemText(key, text);
      this.toggleEditMode();
    },
    deleteItem(key) {
      TodoService.deleteItem(key);
    },

    toggleEditMode() {
      this.nowEditing = !this.nowEditing;
    },
  },
  computed: {
    liClass() {
      if (!this.nowEditing && this.item.isCompleted) return "completed";
      if (this.nowEditing) return "editing";
      return "";
    },
  },
};
</script>

<style></style>
