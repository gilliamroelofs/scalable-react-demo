import { ReactElement } from "react";

import { Dialog } from '@task-manager/components';

import { TaskForm, TaskFormProps } from "../TaskForm";

export type TaskFormDialogProps = TaskFormProps & {
  isVisible?: boolean
  onClose: () => void
}
export function TaskFormDialog({
  isVisible,
  onClose,
  onUpdate,
  onCreate,
  task
}: TaskFormDialogProps): ReactElement {
  return (
    <Dialog isVisible={isVisible} onClose={onClose}>
      <TaskForm onCreate={onCreate} onUpdate={onUpdate} task={task} />
    </Dialog>
  )
}

