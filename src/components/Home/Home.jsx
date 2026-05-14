import { Button, Typography, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <Box className="home">
      <Typography 
        variant="h3" 
        component="h1" 
        textAlign="center" 
        sx={{ 
          fontFamily: 'Playfair Display, serif', 
          fontWeight: 600,
          mb: 1
        }}
      >
        Erik Herrera
      </Typography>
      <Typography 
        variant="body1" 
        color="text.secondary" 
        textAlign="center"
        sx={{ mb: 3 }}
      >
        Select a tool:
      </Typography>
      <Box className="home-buttons">
        <Button 
          variant="contained" 
          size="large" 
          onClick={() => navigate('/calculator')}
          fullWidth
          sx={{ py: 1.5 }}
        >
          Calculator
        </Button>
        <Button 
          variant="contained" 
          size="large" 
          onClick={() => navigate('/todo')}
          fullWidth
          sx={{ py: 1.5 }}
        >
          ToDo List
        </Button>
      </Box>
    </Box>
  )
}

export default Home