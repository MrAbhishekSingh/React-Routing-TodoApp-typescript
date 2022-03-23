import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route }
from "react-router-dom";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";
import Main from "./components/Main";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/todoform" element={<TodoForm />}/>
				<Route path="/main" element={<Main />}/>
				<Route path="/todolist" element={<TodoList />}/>
				<Route path="/" element={<Main />}/>
				
			</Routes>
		</Router>
	);
}

export default App;
