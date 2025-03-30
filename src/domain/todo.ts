export class Todo {
  id: number;
  title: string;
  done: boolean;
  created_at: string;

  constructor(setId: number,  setTitle: string, setDone: boolean, setCreatedAt: string) {
    this.id = setId;
    this.title = setTitle;
    this.done = setDone;
    this.created_at = setCreatedAt;
  }
}

