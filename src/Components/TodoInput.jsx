export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props
    return (
        <header>
            <input
                type="text"
                placeholder="Enter Todo..."
                value={todoValue}
                onChange={e => setTodoValue(e.target.value)}
            />
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )
}