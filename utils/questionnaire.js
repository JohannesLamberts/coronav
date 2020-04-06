import { matches } from '@/utils/index'

const OPTION_MAP = {
  true: true,
  false: false
}

const RESERVED_KEYS = ['ident', 'default']

function isValidOption(option) {
  return !RESERVED_KEYS.includes(option)
}

function parseOption(option) {
  return Object.hasOwnProperty.call(OPTION_MAP, option)
    ? OPTION_MAP[option]
    : option
}

function findMatchedConfig(computationConfig, value) {
  const matchedOption = Object.keys(computationConfig)
    .filter(isValidOption)
    .map(parseOption)
    .find((option) => option === value)
  return computationConfig[matchedOption || 'default']
}

export function computeResultIdent(computationConfig, choicesWithDerived) {
  const value = choicesWithDerived[computationConfig.ident]
  const matchedConfig = findMatchedConfig(computationConfig, value)
  return typeof matchedConfig === 'string'
    ? matchedConfig
    : computeResultIdent(matchedConfig, choicesWithDerived)
}

export function shouldSkipQuestion({ skipIf, ident }, choices) {
  return (
    skipIf &&
    matches(choices, skipIf) &&
    // do not skip already answered questions
    !Object.hasOwnProperty.call(choices, ident)
  )
}
