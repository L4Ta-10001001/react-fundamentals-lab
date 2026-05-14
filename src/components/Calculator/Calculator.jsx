import { Paper, Stack, Typography } from '@mui/material'
import CalculatorDisplay from './CalculatorDisplay'
import CalculatorPad from './CalculatorPad'
import useCalculator from '../../hooks/useCalculator'

function Calculator() {
  const { display, onClear, onInput, onOperation, onEvaluate } = useCalculator()

  return (
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
  )
}

export default Calculator
