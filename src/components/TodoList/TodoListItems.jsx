import { IconButton, List, ListItem, ListItemText, Typography } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

function TodoListItems({ tasks, onRemove }) {
  if (tasks.length === 0) {
    return (
      <Typography color="text.secondary">
        No tasks yet. Add your first activity.
      </Typography>
    )
  }

  return (
    <List disablePadding>
      {tasks.map((task) => (
        <ListItem
          key={task.id}
          divider
          secondaryAction={
            <IconButton
              edge="end"
              aria-label={`Delete ${task.title}`}
              onClick={() => onRemove(task.id)}
            >
              <DeleteOutlineIcon />
            </IconButton>
          }
        >
          <ListItemText
            primary={task.title}
            secondary={task.createdAtLabel}
          />
        </ListItem>
      ))}
    </List>
  )
}

export default TodoListItems
