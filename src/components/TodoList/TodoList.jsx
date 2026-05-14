import { IconButton, Paper, Stack, TextField, Typography, Box } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'
import { useNavigate } from 'react-router-dom'
import TodoListItems from './TodoListItems'
import useTodoList from '../../hooks/useTodoList'

function TodoList() {
  const navigate = useNavigate()
  const { tasks, draft, setDraft, addTask, removeTask, canSubmit } = useTodoList()

  return (
    <Box className="todo-wrapper">
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/')}
        variant="text"
        sx={{ alignSelf: 'flex-start', mb: 1 }}
      >
        Back
      </Button>
      <Paper className="panel" elevation={2}>
        <Stack spacing={2}>
          <div>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
              ToDo List
            </Typography>
            <Typography color="text.secondary" variant="body2">
              Add and manage your tasks
            </Typography>
          </div>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
            <TextField
              fullWidth
              size="small"
              value={draft}
              label="New task"
              placeholder="Add a task..."
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
              onClick={addTask}
              disabled={!canSubmit}
              aria-label="Add task"
              sx={{ 
                border: '1px solid',
                borderColor: canSubmit ? 'primary.main' : 'grey.300',
                borderRadius: 2,
                px: 2
              }}
            >
              <AddCircleOutlinedIcon />
            </IconButton>
          </Stack>
          <TodoListItems tasks={tasks} onRemove={removeTask} />
        </Stack>
      </Paper>
    </Box>
  )
}

export default TodoList