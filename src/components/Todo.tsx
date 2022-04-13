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
      <table className="table table-bordered table-active">
        <thead>
          <tr style={{ width: '20%' }}>
            <th style={{ width: '20%' }}>{todo.text}</th>
            <th style={{ width: '20%' }}>{todo.contact}</th>
            <th style={{ width: '20%' }}>{todo.email}</th>
            <th style={{ width: '20%' }}>{todo.city}</th>
            <th style={{ width: '20%' }}> <button type="button" className="btn btn-danger" aria-label="delete" onClick={e => todosRef.child(todo.id).remove()}>Delete
            </button></th>
          </tr>
        </thead>
      </table>
    </>
  );
}

export default Todo;
