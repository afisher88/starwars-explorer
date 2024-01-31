import { SWAPIResponse } from "~/data/swapiTypes";

export function filterResponse<T extends object>(data: SWAPIResponse<T>, removeKeys: string[]) {
  const filteredResults = data.results.reduce<T[]>((filtered, curr) => {
    const currEntries = Object.entries(curr)
    const filteredEntries = currEntries.filter(([key])=> !removeKeys.includes(key))

    return [
      ...filtered,
      Object.fromEntries(filteredEntries) as T
    ]

  }, [])

  return {
    ...data,
    results: filteredResults
  }
}

