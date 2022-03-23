import React from 'react';
import { useState } from "react";
import todosRef from "../Firebase";
import { useNavigate } from 'react-router-dom';

function TodoForm() {
    const navigate = useNavigate();
    const goToSecondsComp = () => {
        navigate('/todolist');
    };
    const gotToMainComp = () => {
        navigate('/main');
    };
    const [text, settext] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [city, setCity] = useState("");
    const createTodo = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        const item = {
            text: text,
            email: email,
            contact: contact,
            city: city,

            done: false,
        };
        todosRef.push(item);
        settext("");
        setEmail("");
        setContact("");
        setCity("");
    };
    return (
        <div className="App">
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">TODO APP</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" onClick={gotToMainComp} >HOME <span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " onClick={goToSecondsComp}>TODO LIST</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <form className="row g-3" onSubmit={createTodo}>
                <div className="col-sm-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Enter your full name" value={text} onChange={(e) => settext(e.target.value)} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Moblie No.</label>
                    <input type="text" className="form-control" placeholder="Enter your Mobile No." value={contact} onChange={(e) => setContact(e.target.value)} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" placeholder="Enter your City" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">SUBMIT</button>
                </div>
            </form>
        </div>
    );
}

export default TodoForm;
