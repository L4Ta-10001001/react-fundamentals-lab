import { Paper, Typography } from '@mui/material'

function CalculatorDisplay({ value }) {
  return (
    <Paper className="calculator-display" elevation={0}>
      <Typography variant="h3" className="calculator-result" aria-live="polite">
        {value}
      </Typography>
    </Paper>
  )
}

export default CalculatorDisplay