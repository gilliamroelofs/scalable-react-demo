import { Button, TextField, TextAreaField, Column, Grid } from "@task-manager/components";
import { ReactElement, useCallback } from "react";
import { useForm } from "react-hook-form";
import { ITask } from "../../types/task";

function generateId(length = 8): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

type FormFields = {
  title: string;
  description: string;
}

export type TaskFormProps = {
  onUpdate: (task: ITask) => void,
  onCreate: (task: ITask) => void,
  task?: ITask
}
export function TaskForm({
  onUpdate,
  onCreate,
  task
}: TaskFormProps): ReactElement {
  const { register, handleSubmit, formState: { errors } } = useForm<FormFields>({
    defaultValues: { title: task?.title ?? '', description: task?.description ?? '' },
  });

  const onSubmit = useCallback((data: FormFields) => {
    if (task) {
      onUpdate({ ...task, ...data })
    } else {
      onCreate({
        ...data,
        id: generateId()
      })
    }
  }, [onCreate, onUpdate, task])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid columns={1} gutter={8}>
        <Column>
          <TextField
            id="title-field"
            label="Task title"
            error={errors.title && 'Title is required'}
            {...register('title', { required: true })}
          />
        </Column>
        <Column>
          <TextAreaField
            id="description-field"
            label="Task description"
            error={errors.title && 'Description is required'}
            {...register('description', { required: true })}
            />
        </Column>
        <Column>
          <Button type="submit" color="primary" label={task ? 'Edit Task' : 'Create Task'}/>
        </Column>
      </Grid>
    </form>
  )
}