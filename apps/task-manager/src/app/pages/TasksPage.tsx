import { TaskCard } from "../components/TaskCard";
import { Button, Column, Grid } from "@task-manager/components";
import { useTaskContext } from "../components/TaskProvider";
import { useState } from "react";
import { TaskFormDialog } from "../components/TaskFormDialog";
import { ITask } from "../types/task";

const TasksPage = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [taskToEdit, setTaskToEdit] = useState<ITask>()
  const { tasks, addTask, updateTask, removeTask } = useTaskContext()
  return (
    <>
      <Grid columns={2} columnsMd={4} gutter={8}>
        <Column span={2} spanMd={4}>
          <Button label="Add task" onClick={() => setIsVisible(true)}/>
        </Column>
        {tasks.map(task => <Column key={task.id}>
          <TaskCard
            title={task.title}
            description={task.description}
            onEdit={() => {
              setTaskToEdit(task)
              setIsVisible(true)
            }}
            onComplete={() => removeTask(task)} />
        </Column>
        )}
      </Grid>
      <TaskFormDialog
        task={taskToEdit}
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
        onCreate={task => {
          addTask(task)
          setIsVisible(false)
        }}
        onUpdate={task => {
          updateTask(task)
          setIsVisible(false)
        }}
      />
    </>
  );
};

export default TasksPage;