export class Todo {
  constructor(
    public id: number,
    public title: string,
    public done: boolean,
    public created_at: string,
  ){}
}

const newTodo = new Todo(1, "title", true, "20250330");
console.log('newTodoだよ', newTodo);
