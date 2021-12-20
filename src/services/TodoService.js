import Vue from "vue";

const initialState = {
  items: [],
};

const state = Vue.observable(initialState);

const addItem = (text) => {
  state.items.push({
    text,
    isCompleted: false,
    key: new Date().getTime() * Math.random(),
  });
};

const deleteItem = (key) => {
  state.items = this.items.filter((item) => item.key !== key);
};

const TodoService = { state, addItem, deleteItem };
export default TodoService;
