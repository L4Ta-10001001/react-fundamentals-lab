import { IconButton, Paper, Stack, TextField, Typography, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'
import { useNavigate } from 'react-router-dom'
import TodoListItems from './TodoListItems'
import useTodoList from '../../hooks/useTodoList'

function TodoList() {
  const navigate = useNavigate()
  const { tasks, draft, setDraft, addTask, removeTask, canSubmit } = useTodoList()

  return (
    <Stack spacing={2}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/')}
        variant="text"
        sx={{ alignSelf: 'flex-start' }}
      >
        Back
      </Button>
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
              <AddCircleOutlinedIcon />
            </IconButton>
          </Stack>
          <TodoListItems tasks={tasks} onRemove={removeTask} />
        </Stack>
      </Paper>
    </Stack>
  )
}

export default TodoList
