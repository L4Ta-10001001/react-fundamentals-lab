import { IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutlined'
import TodoListItems from './TodoListItems'
import useTodoList from '../../hooks/useTodoList'

function TodoList() {
  const { tasks, draft, setDraft, addTask, removeTask, canSubmit } = useTodoList()

  return (
    <Paper className="panel" elevation={0}>
      <Stack spacing={2.5}>
        <div>
          <Typography variant="h2">ToDo List</Typography>
          <Typography color="text.secondary">
            Plan, add, and remove tasks with local persistence.
          </Typography>
        </div>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
          <TextField
            fullWidth
            value={draft}
            label="New task"
            placeholder="e.g., Review hooks lesson notes"
            inputProps={{ maxLength: 80 }}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                addTask()
              }
            }}
          />
          <IconButton
            color="primary"
            sx={{
              alignSelf: { xs: 'flex-start', sm: 'center' },
              borderRadius: 3,
              border: '1px solid rgba(31, 111, 120, 0.2)',
            }}
            onClick={addTask}
            disabled={!canSubmit}
            aria-label="Add task"
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </Stack>
        <TodoListItems tasks={tasks} onRemove={removeTask} />
      </Stack>
    </Paper>
  )
}

export default TodoList
