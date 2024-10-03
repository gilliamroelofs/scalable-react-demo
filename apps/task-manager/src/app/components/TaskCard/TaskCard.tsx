import { ReactElement } from "react";

import { Box, Button, Card, CardContent, CardFooter, Typography } from '@task-manager/components';

export type TaskCardProps = {
  title: string
  description: string
  onEdit: () => void
  onComplete: () => void
}
export function TaskCard({
  title,
  description,
  onEdit,
  onComplete,
}: TaskCardProps): ReactElement {
  return (
    <Card>
      <CardContent>
        <Box as="div" padding={8}>
          <Typography as="p" variant="text-lg">{title}</Typography>
          <Typography as="p" variant="text-xs">{description}</Typography>
        </Box>
      </CardContent>
      <CardFooter>
        <Box as="div" padding={8}>
          <Button label="Edit" onClick={onEdit} />
          <Button color="primary" label="Complete" onClick={onComplete} />
        </Box>
      </CardFooter>
    </Card>
  )
}
