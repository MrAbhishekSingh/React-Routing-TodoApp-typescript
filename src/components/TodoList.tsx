import React, { useState } from 'react';
import { useEffect } from "react";
import todosRef from "../Firebase";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Todo from './Todo';
import { useTable } from 'react-table'

function TodoList() {
    const navigate = useNavigate();
    const goToSecondsComp = () => {
        navigate('/todoform');
    };
    const gotToMainComp = () => {
        navigate('/main');
    };
    var styles1 = {
        backgroundColor: 'white',
    };
    const [todos, setTodos] = useState<any>([]);
    useEffect(() => {
        todosRef.on('value', snapshot => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    text: items[item].text,
                    email: items[item].email,
                    contact: items[item].contact,
                    city: items[item].city,
                    done: items[item].done
                });
            }
            setTodos(newState)
        });
    }, [])
    return (
        <>
            <div className="App">
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" onClick={gotToMainComp}><b><i className="text-danger">TODO APP</i></b></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <a className="nav-link" onClick={gotToMainComp} >HOME <span className="sr-only"></span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={goToSecondsComp}>TODO FORM</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <div>
                    <table className="table table-dark table-bordered">
                        <thead>
                            <tr style={{width: '20%'}}>
                                <th style={{width: '20%'}}>NAME</th>
                                <th style={{width: '20%'}}>PHONE NO.</th>   
                                <th style={{width: '20%'}}>EMAIL</th>  
                                <th style={{width: '20%'}}>CITY</th>  
                                <th style={{width: '20%'}}>REMOVE</th>                               
                            </tr>
                        </thead>
                    </table>
                    <table className="table table-bordered ">
                        <thead>
                            <tr>
                                {todos.map((todo: any, i: number) => (
                                    <React.Fragment key={todo.id}>
                                        <Todo todo={todo} />
                                        {i < todos.length - 1}
                                    </React.Fragment>
                                ))}
                            </tr>
                        </thead>
                    </table>
                    
                </div>
            </div >
        </>
    );
}


export default TodoList;
