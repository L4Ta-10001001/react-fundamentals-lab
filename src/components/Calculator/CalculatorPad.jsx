import { Button, Grid } from '@mui/material'

const INPUT_KEYS = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.']
const OPERATION_KEYS = ['/', '*', '-', '+']

function CalculatorPad({ onClear, onInput, onOperation, onEvaluate }) {
  return (
    <Grid container spacing={1} className="calculator-keypad">
      <Grid item xs={9}>
        <Grid container spacing={1}>
          {INPUT_KEYS.map((value) => (
            <Grid item xs={4} key={value}>
              <Button
                className="calc-btn calc-btn-number"
                onClick={() => onInput(value)}
                fullWidth
                aria-label={`Input ${value}`}
              >
                {value}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid container spacing={1}>
          {OPERATION_KEYS.map((value) => (
            <Grid item xs={12} key={value}>
              <Button
                className="calc-btn calc-btn-operation"
                onClick={() => onOperation(value)}
                fullWidth
                aria-label={`Operation ${value}`}
              >
                {value}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Button
              className="calc-btn calc-btn-clear"
              onClick={onClear}
              fullWidth
              aria-label="Clear calculator"
            >
              Clear
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              className="calc-btn calc-btn-equals"
              onClick={onEvaluate}
              fullWidth
              aria-label="Evaluate expression"
            >
              =
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CalculatorPad