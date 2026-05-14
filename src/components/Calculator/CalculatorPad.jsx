import { Button, Stack } from '@mui/material'

const INPUT_ROWS = [
  ['7', '8', '9'],
  ['4', '5', '6'],
  ['1', '2', '3'],
  ['0', '.'],
]
const OPERATION_KEYS = ['/', '*', '-', '+']

function CalculatorPad({ onClear, onInput, onOperation, onEvaluate }) {
  return (
    <Stack spacing={1.5}>
      <Stack direction="row" spacing={1.5}>
        <Button variant="outlined" color="secondary" onClick={onClear} fullWidth>
          Clear
        </Button>
        <Button variant="contained" onClick={onEvaluate} fullWidth>
          Equals
        </Button>
      </Stack>
      <Stack direction="row" spacing={1.5}>
        <Stack spacing={1.5} flex={1}>
          {INPUT_ROWS.map((row) => (
            <Stack key={row.join('-')} direction="row" spacing={1.5}>
              {row.map((value) => (
                <Button
                  key={value}
                  variant="outlined"
                  onClick={() => onInput(value)}
                  fullWidth
                  aria-label={`Input ${value}`}
                >
                  {value}
                </Button>
              ))}
            </Stack>
          ))}
        </Stack>
        <Stack spacing={1.5} minWidth={80}>
          {OPERATION_KEYS.map((value) => (
            <Button
              key={value}
              variant="contained"
              color="secondary"
              onClick={() => onOperation(value)}
              fullWidth
              aria-label={`Operation ${value}`}
            >
              {value}
            </Button>
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default CalculatorPad
