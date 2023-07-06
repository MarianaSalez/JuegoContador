import { CounterContextProvider } from "./context/counterContext";
import "./App.css";
import { Counter } from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterContextProvider>
          <Counter />
        </CounterContextProvider>
      </header>
    </div>
  );
}

export default App;
