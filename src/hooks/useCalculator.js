import { useState } from 'react'

const OPERATIONS = ['+', '-', '*', '/']

const hasOperator = (value) =>
  OPERATIONS.some((operator) => value.includes(operator))

const isValidInput = (value) => value !== '' && value !== '.'

const parseExpression = (expression) => {
  const operator = OPERATIONS.find((item) =>
    expression.slice(1).includes(item),
  )
  if (!operator) {
    return null
  }

  const operatorIndex = expression.indexOf(operator, 1)
  const left = expression.slice(0, operatorIndex)
  const right = expression.slice(operatorIndex + 1)

  if (!isValidInput(left) || !isValidInput(right)) {
    return null
  }

  return {
    left: Number(left),
    right: Number(right),
    operator,
  }
}

const applyOperation = ({ left, right, operator }) => {
  if (operator === '+') return left + right
  if (operator === '-') return left - right
  if (operator === '*') return left * right
  if (operator === '/') {
    return right === 0 ? 'Error' : left / right
  }
  return 'Error'
}

const formatResult = (result) => {
  if (typeof result !== 'number') {
    return result
  }
  const rounded = Number.isInteger(result) ? result : Number(result.toFixed(6))
  return rounded.toString()
}

function useCalculator() {
  const [display, setDisplay] = useState('0')
  const [nextValue, setNextValue] = useState('')

  const handleClear = () => {
    setDisplay('0')
    setNextValue('')
  }

  const handleInput = (value) => {
    setNextValue((current) => {
      if (value === '.' && current.includes('.')) {
        return current
      }

      const updated = current === '0' && value !== '.' ? value : `${current}${value}`
      setDisplay(updated)
      return updated
    })
  }

  const handleOperation = (operator) => {
    if (nextValue === '' || nextValue === '-') {
      setNextValue(operator === '-' ? '-' : nextValue)
      setDisplay(operator === '-' ? '-' : display)
      return
    }

    if (hasOperator(nextValue)) {
      const result = evaluateExpression(nextValue)
      const resultString = formatResult(result)
      setNextValue(`${resultString}${operator}`)
      setDisplay(`${resultString}${operator}`)
      return
    }

    setNextValue(`${nextValue}${operator}`)
    setDisplay(`${nextValue}${operator}`)
  }

  const evaluateExpression = (expression) => {
    const parsed = parseExpression(expression)
    if (!parsed) {
      return expression
    }
    return applyOperation(parsed)
  }

  const handleEvaluate = () => {
    if (!hasOperator(nextValue)) {
      return
    }

    const result = evaluateExpression(nextValue)
    const resultString = formatResult(result)
    setDisplay(resultString)
    setNextValue(resultString === 'Error' ? '' : resultString)
  }

  return {
    display,
    onClear: handleClear,
    onInput: handleInput,
    onOperation: handleOperation,
    onEvaluate: handleEvaluate,
  }
}

export default useCalculator
