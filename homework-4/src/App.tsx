import "./App.css";

function App() {
  const tasks = [
    { id: 1, title: "Купить продукты на неделю", isDone: false },
    { id: 2, title: "Полить цветы", isDone: true },
    { id: 3, title: "Сходить на тренировку", isDone: false },
    { id: 1, title: "Купить продукты на неделю", isDone: false },
    { id: 2, title: "Полить цветы", isDone: true },
    { id: 3, title: "Сходить на тренировку", isDone: false },
  ];

  const newTasksEl = tasks.map((task) => {
    return (
      <li key={task.id}>
        <div>{task.title}</div>
        <input type="checkbox" defaultChecked={task.isDone}></input>
      </li>
    );
  });

  return (
    <>
      <h1>Список дел</h1>
      <ul>{newTasksEl}</ul>
    </>
  );
}

export default App;
