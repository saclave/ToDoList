import './App.css';
import TodoGenerator from './components/TodoGenerator';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoGenerator />
        <TodoList />
      </header>
    </div>
  );
}

export default App;