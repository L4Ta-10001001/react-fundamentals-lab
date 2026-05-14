import { useState } from 'react'

const OPERATIONS = ['+', '-', '*', '/']

const hasOperator = (value) =>
  OPERATIONS.some((operator) => value.slice(1).includes(operator))

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

const formatInput = (current, value) => {
  if (current === '') {
    return value === '.' ? '0.' : value
  }
  if (value === '.' && current.includes('.')) {
    return current
  }
  if (current === '0' && value !== '.') {
    return value
  }
  return `${current}${value}`
}

function useCalculator() {
  const [display, setDisplay] = useState('0')
  const [nextValue, setNextValue] = useState('')

  const setExpression = (value) => {
    setNextValue(value)
    setDisplay(value || '0')
  }

  const handleClear = () => {
    setExpression('')
  }

  const handleInput = (value) => {
    const updated = formatInput(nextValue, value)
    setExpression(updated)
  }

  const handleOperation = (operator) => {
    if (nextValue === '' || nextValue === '-') {
      if (operator === '-') {
        setExpression('-')
      }
      return
    }

    if (hasOperator(nextValue)) {
      const resultString = finalizeResult(evaluateExpression(nextValue))
      if (resultString !== 'Error') {
        setExpression(`${resultString}${operator}`)
      }
      return
    }

    setExpression(`${nextValue}${operator}`)
  }

  const evaluateExpression = (expression) => {
    const parsed = parseExpression(expression)
    if (!parsed) {
      return expression
    }
    return applyOperation(parsed)
  }

  const finalizeResult = (result) => {
    const resultString = formatResult(result)
    if (resultString === 'Error') {
      setDisplay(resultString)
      setNextValue('')
      return resultString
    }

    setExpression(resultString)
    return resultString
  }

  const handleEvaluate = () => {
    if (!hasOperator(nextValue)) {
      return
    }

    finalizeResult(evaluateExpression(nextValue))
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
