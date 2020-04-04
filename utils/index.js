export function matchesOnce(obj, matchOrMatchList) {
  const matchList = makeArray(matchOrMatchList)
  return matchList.some((match) => matches(obj, match))
}

function matches(obj, match) {
  return Object.entries(match).every(([key, value]) => obj[key] === value)
}

export function makeArray(itemOrList) {
  return Array.isArray(itemOrList) ? itemOrList : [itemOrList]
}
