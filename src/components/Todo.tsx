import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import todosRef from "../Firebase";

function Todo(props: any) {
  const { todo } = props;
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(todo));
  }, [todo]);
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <td>{todo.text}</td>
            <td>{todo.contact}</td>
            <td>{todo.email}</td>
            <td>{todo.city}</td>
            <td><button type="button" className="btn btn-danger" aria-label="delete" onClick={e => todosRef.child(todo.id).remove()}>Delete
            </button></td>
          </tr>
        </thead>
      </table>
    </>
  );
}

export default Todo;
