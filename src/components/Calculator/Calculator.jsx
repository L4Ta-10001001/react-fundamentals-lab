import { Box, Typography } from '@mui/material'
import CalculatorDisplay from './CalculatorDisplay'
import CalculatorPad from './CalculatorPad'
import useCalculator from '../../hooks/useCalculator'

function Calculator() {
  const { display, onClear, onInput, onOperation, onEvaluate } = useCalculator()

  return (
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
  )
}

export default Calculator