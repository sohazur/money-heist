import "./App.css";
import Category from "./components/Category/Category";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <Header></Header>
      {/* Category and Cart Section */}
      <Category></Category>
    </div>
  );
}

export default App;
