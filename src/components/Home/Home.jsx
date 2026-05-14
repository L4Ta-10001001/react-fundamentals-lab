import { Button, Typography, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <Box className="home">
      <Typography 
        variant="h3" 
        component="h1" 
        className="home-title"
        sx={{ 
          fontFamily: 'Playfair Display, serif', 
          fontWeight: 700,
          color: '#2d3436'
        }}
      >
        Erik Herrera
      </Typography>
      <Typography 
        variant="body1" 
        color="text.secondary" 
        className="home-subtitle"
      >
        Select a tool:
      </Typography>
      <Box className="home-buttons">
        <Button 
          variant="contained" 
          size="large" 
          onClick={() => navigate('/calculator')}
          className="home-btn"
          sx={{ 
            backgroundColor: '#00b894',
            '&:hover': { backgroundColor: '#00cec9' }
          }}
        >
          Calculator
        </Button>
        <Button 
          variant="contained" 
          size="large" 
          onClick={() => navigate('/todo')}
          className="home-btn"
          sx={{ 
            backgroundColor: '#6c5ce7',
            '&:hover': { backgroundColor: '#a29bfe' }
          }}
        >
          ToDo List
        </Button>
      </Box>
    </Box>
  )
}

export default Home