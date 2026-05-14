import { Paper, Typography } from '@mui/material'

function CalculatorDisplay({ value }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        padding: 2,
        borderRadius: 2,
        backgroundColor: 'rgba(31, 111, 120, 0.06)',
      }}
    >
      <Typography variant="overline" color="text.secondary">
        Result
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 600 }}>
        {value}
      </Typography>
    </Paper>
  )
}

export default CalculatorDisplay
