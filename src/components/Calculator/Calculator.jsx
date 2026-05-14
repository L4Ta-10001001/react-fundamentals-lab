import { Box, Typography, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'
import CalculatorDisplay from './CalculatorDisplay'
import CalculatorPad from './CalculatorPad'
import useCalculator from '../../hooks/useCalculator'

function Calculator() {
  const navigate = useNavigate()
  const { display, onClear, onInput, onOperation, onEvaluate } = useCalculator()

  return (
    <Box className="calculator-page">
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/')}
        variant="text"
        sx={{ alignSelf: 'center', mb: 2, color: '#2d3436' }}
      >
        Back
      </Button>
      <Box className="calculator-wrapper">
        <Box className="calculator-phone">
          <Typography className="calculator-brand">
            Calculator
          </Typography>
          <CalculatorDisplay value={display} />
          <CalculatorPad
            onClear={onClear}
            onInput={onInput}
            onOperation={onOperation}
            onEvaluate={onEvaluate}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Calculator