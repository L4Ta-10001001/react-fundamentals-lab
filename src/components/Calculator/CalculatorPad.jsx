import { Button, Stack } from '@mui/material'

const INPUT_KEYS = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.']
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
          <Stack direction="row" spacing={1.5}>
            {INPUT_KEYS.slice(0, 3).map((value) => (
              <Button
                key={value}
                variant="outlined"
                onClick={() => onInput(value)}
                fullWidth
              >
                {value}
              </Button>
            ))}
          </Stack>
          <Stack direction="row" spacing={1.5}>
            {INPUT_KEYS.slice(3, 6).map((value) => (
              <Button
                key={value}
                variant="outlined"
                onClick={() => onInput(value)}
                fullWidth
              >
                {value}
              </Button>
            ))}
          </Stack>
          <Stack direction="row" spacing={1.5}>
            {INPUT_KEYS.slice(6, 9).map((value) => (
              <Button
                key={value}
                variant="outlined"
                onClick={() => onInput(value)}
                fullWidth
              >
                {value}
              </Button>
            ))}
          </Stack>
          <Stack direction="row" spacing={1.5}>
            {INPUT_KEYS.slice(9).map((value) => (
              <Button
                key={value}
                variant="outlined"
                onClick={() => onInput(value)}
                fullWidth
              >
                {value}
              </Button>
            ))}
          </Stack>
        </Stack>
        <Stack spacing={1.5} minWidth={80}>
          {OPERATION_KEYS.map((value) => (
            <Button
              key={value}
              variant="contained"
              color="secondary"
              onClick={() => onOperation(value)}
              fullWidth
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
