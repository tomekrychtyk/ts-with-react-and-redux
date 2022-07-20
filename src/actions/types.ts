import { FetchTodosAction, DeleteTodosAction } from "./todos";

export enum ActionTypes {
  fetchTodos = "FETCH_TODOS",
  deleteTodo = "DELETE_TODO",
}

export type Action = FetchTodosAction | DeleteTodosAction;
