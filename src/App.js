import './App.css';
import TodoList from "./components/TodoList";
import TodoGenerator from "./components/TodoGenerator";

function App() {
  return (
    <div className="App">
      <TodoGenerator />
      <TodoList />
    </div>
  );
}

export default App;
