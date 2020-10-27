import React from 'react';

const TodoGenerator = () => {
    let input;

    const addTask = (e) => {
        e.preventDefault();

        if(!input.value.trim()) return;

        console.log(input.value);

    }
    return (
        <div>
            <form onSubmit={addTask}>
                <input ref={node => input = node}/>
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}

export default TodoGenerator;