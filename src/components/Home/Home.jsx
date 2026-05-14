import { Button, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <Stack spacing={3} alignItems="center" className="home">
      <Typography variant="h3" component="h1" textAlign="center" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 600 }}>
        Erik Herrera
      </Typography>
      <Typography variant="body1" color="text.secondary" textAlign="center">
        Select a tool:
      </Typography>
      <Stack spacing={1.5} width="100%" maxWidth={440}>
        <Button variant="contained" size="large" onClick={() => navigate('/calculator')}>
          Calculator
        </Button>
        <Button variant="contained" size="large" onClick={() => navigate('/todo')}>
          ToDo List
        </Button>
      </Stack>
    </Stack>
  )
}

export default Home