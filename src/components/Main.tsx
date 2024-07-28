import { KeyboardEvent, SyntheticEvent, useState } from "react";

type Task = {
  description: string;
  completed: boolean;
};

export default function Main() {
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState<Task[]>([
    {
      description:
        " Finish coding assignment - Complete the remaining tasks and test the program",
      completed: true,
    },
    {
      description:
        "Review testing plan - Go through the test cases for the new feature.",
      completed: false,
    },
    {
      description: "Buy groceries - Purchase milk, bread, and eggs",
      completed: false,
    },
    {
      description:
        "Reply to emails - Respond to the messages from team members and clients.",
      completed: false,
    },
  ]);

  const handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    setTaskDescription(event.currentTarget.value);
  };

  const handleSend = (event: KeyboardEvent) => {
    if (
      (event.key != "Enter" && event.key != "NumpadEnter") ||
      taskDescription.trim() == ""
    ) {
      return;
    }

    setTasks((tasks) => [
      ...tasks,
      { description: taskDescription, completed: false },
    ]);
    setTaskDescription("");
  };

  const handleCheck = (
    event: SyntheticEvent<HTMLInputElement>,
    index: number
  ) => {
    const tasksCopy = tasks.slice();
    tasksCopy[index].completed = event.currentTarget.checked;
    setTasks(tasksCopy);
  };

  const handleDeleteTask = (index: number) => {
    const tasksCopy = tasks.slice();
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy);
  };

  return (
    <div className="main">
      <div className="inputWrapper">
        <label>
          <input
            enterKeyHint="enter"
            type="text"
            name="description"
            value={taskDescription}
            onChange={handleChange}
            onKeyDown={handleSend}
            placeholder=""
          />
          <span>Add a Task</span>
        </label>
      </div>
      <div className="tasks">
        {tasks.map((task, index) => {
          return (
            <div className="task" key={index} data-completed={task.completed}>
              <label className="taskContent">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={(e) => handleCheck(e, index)}
                />
                <span className="checkmark"></span>
                {task.description}
                <button onClick={() => handleDeleteTask(index)} type="button">
                  X
                </button>
              </label>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <div className="statistics">
          <span className="checkmark">
            <span />
          </span>
          Completed: {tasks.filter((task) => task.completed).length} /{" "}
          {tasks.length}
        </div>
      </div>
    </div>
  );
}
