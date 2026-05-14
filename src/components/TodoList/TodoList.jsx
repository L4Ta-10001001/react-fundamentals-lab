import { IconButton, Stack, TextField, Typography, Box, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutlined'
import { useNavigate } from 'react-router-dom'
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
        sx={{ alignSelf: 'flex-start', mb: 1, color: '#2d3436' }}
      >
        Back
      </Button>
      <Box className="todo-panel">
        <Box className="todo-header">
          <Typography variant="h5" component="h2" sx={{ fontWeight: 700, color: '#2d3436' }}>
            ToDo List
          </Typography>
          <Typography color="text.secondary" variant="body2">
            Add and manage your tasks
          </Typography>
        </Box>
        <Box className="todo-input-row">
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
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
              }
            }}
          />
          <IconButton
            color="primary"
            onClick={addTask}
            disabled={!canSubmit}
            aria-label="Add task"
            sx={{ 
              backgroundColor: canSubmit ? '#00b894' : '#b2bec3',
              color: '#fff',
              borderRadius: '12px',
              px: 2,
              '&:hover': {
                backgroundColor: canSubmit ? '#00cec9' : '#b2bec3',
              }
            }}
          >
            <AddCircleOutlinedIcon />
          </IconButton>
        </Box>
        {tasks.length === 0 ? (
          <Typography color="text.secondary" textAlign="center" sx={{ py: 4 }}>
            No tasks yet. Add your first activity.
          </Typography>
        ) : (
          <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
            {tasks.map((task) => (
              <Box 
                key={task.id} 
                component="li"
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  p: 2,
                  mb: 1,
                  backgroundColor: '#f5f6fa',
                  borderRadius: '12px',
                  border: '1px solid #dfe6e9',
                }}
              >
                <Box>
                  <Typography sx={{ color: '#2d3436', fontWeight: 500 }}>
                    {task.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {task.createdAtLabel}
                  </Typography>
                </Box>
                <IconButton
                  edge="end"
                  aria-label={`Delete ${task.title}`}
                  onClick={() => removeTask(task.id)}
                  sx={{ color: '#ff7675' }}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default TodoList