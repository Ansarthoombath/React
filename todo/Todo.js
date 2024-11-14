import React, { useEffect, useRef, useState } from "react";
import "./Todo.css";
import { IoMdDoneAll } from "react-icons/io";

import { MdDelete } from "react-icons/md";

function Todo() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        setTodos([...todos, { list: todo, id: Date.now(), status: false }]);
        console.log(todos);
        setTodo("");
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const inputRef = useRef("null");

    useEffect(() => {
        console.log(inputRef.current);
        inputRef.current.focus();
    });

    const onDelete = (id) => {
        setTodos(todos.filter((to) => to.id !== id));
    };
    const onComplete = (id) => {
        let complete = todos.map((list) => {
            if (list.id === id) {
                return { ...list, status: !list.status };
            }
            return list;
        });
        setTodos(complete);
    };

    return (
        <div className="container">
            <h2>TODO App</h2>
            <form className="form-group" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={todo}
                    ref={inputRef}
                    placeholder="Enter your Todo"
                    className="form-control"
                    onChange={(event) => setTodo(event.target.value)}
                />
                <button onClick={addTodo}>ADD</button>
            </form>

            <div className="list">
                <ul>
                    {todos.map((to) => (
                        <li className="list-items">
                            <div className="list-items-list" id={to.status ? "list-item" : ""}>
                                {to.list}
                            </div>
                            <span>
                                <IoMdDoneAll
                                    className="list-items-icons"
                                    id="complete"
                                    title="Complete"
                                    onClick={() => onComplete(to.id)}
                                />

                                <MdDelete
                                    className="list-items-icons"
                                    id="delete"
                                    title="Delete"
                                    onClick={() => onDelete(to.id)}
                                />
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Todo;
