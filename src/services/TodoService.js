import Vue from "vue";

const initialState = {
  items: [],
  viewMode: "all", // all |  active | completed
};

const state = Vue.observable(initialState);

const addItem = (text) => {
  state.items.push({
    text,
    isCompleted: false,
    key: new Date().getTime() * Math.random(),
  });
};

const setViewMode = (type) => {
  state.viewMode = type;
};

const updateItemText = (targetKey, text) => {
  const foundIdx = state.items.findIndex(({ key }) => key === targetKey);
  if ((foundIdx !== 0) & !foundIdx) return;

  const newItemsArr = [...state.items];
  const targetItem = newItemsArr[foundIdx];
  targetItem.text = text;

  state.items = newItemsArr;
};

const deleteItem = (targetKey) => {
  state.items = state.items.filter(({ key }) => key !== targetKey);
};

const getFilteredItemsByMode = () => {
  const filterdItems = {
    all: TodoService.state.items,
    active: TodoService.state.items.filter(({ isCompleted }) => !isCompleted),
    completed: TodoService.state.items.filter(({ isCompleted }) => isCompleted),
  };

  //default case
  if (!filterdItems[state.viewMode]) return TodoService.state.items;
  return filterdItems[state.viewMode];
};

const TodoService = {
  state,
  addItem,
  deleteItem,
  updateItemText,
  getFilteredItemsByMode,
  setViewMode,
};
export default TodoService;
