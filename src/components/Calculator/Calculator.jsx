import { Paper, Stack, Typography, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'
import CalculatorDisplay from './CalculatorDisplay'
import CalculatorPad from './CalculatorPad'
import useCalculator from '../../hooks/useCalculator'

function Calculator() {
  const navigate = useNavigate()
  const { display, onClear, onInput, onOperation, onEvaluate } = useCalculator()

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
        <Stack spacing={2}>
          <div>
            <Typography variant="h2">Standard Calculator</Typography>
            <Typography color="text.secondary">
              Basic operations with precision-focused input.
            </Typography>
          </div>
          <CalculatorDisplay value={display} />
          <CalculatorPad
            onClear={onClear}
            onInput={onInput}
            onOperation={onOperation}
            onEvaluate={onEvaluate}
          />
        </Stack>
      </Paper>
    </Stack>
  )
}

export default Calculator
