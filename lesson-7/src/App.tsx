import "./App.css";

function App() {
  return (
    <div>
      <input
        id="title"
        maxLength={15}
        placeholder="search"
        disabled={true}
        className={"title"}
      />
    </div>
  );
}

export default App;
