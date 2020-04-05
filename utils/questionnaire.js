const OPTION_MAP = {
  true: true,
  false: false
}

function parseOption(option) {
  return Object.hasOwnProperty.call(OPTION_MAP, option)
    ? OPTION_MAP[option]
    : option
}

export function computeResultIdent(computationConfig, choices) {
  const value = choices[computationConfig.ident]
  const matchedOption = Object.keys(computationConfig)
    .filter((key) => !['ident', 'default'].includes(key))
    .map(parseOption)
    .find((option) => option === value)
  const nextConfig = computationConfig[matchedOption || 'default']

  return typeof nextConfig === 'string'
    ? nextConfig
    : computeResultIdent(nextConfig, choices)
}
