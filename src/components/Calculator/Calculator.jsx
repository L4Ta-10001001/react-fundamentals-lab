import { Paper, Typography, Box, Grid } from '@mui/material'
import CalculatorDisplay from './CalculatorDisplay'
import CalculatorPad from './CalculatorPad'
import useCalculator from '../../hooks/useCalculator'

function Calculator() {
  const { display, onClear, onInput, onOperation, onEvaluate } = useCalculator()

  return (
    <Box className="calculator-wrapper">
      <Paper className="calculator-phone" elevation={8}>
        <Typography variant="h6" className="calculator-brand">
          Calculator
        </Typography>
        <CalculatorDisplay value={display} />
        <CalculatorPad
          onClear={onClear}
          onInput={onInput}
          onOperation={onOperation}
          onEvaluate={onEvaluate}
        />
      </Paper>
    </Box>
  )
}

export default Calculator