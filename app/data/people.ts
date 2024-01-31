import { filterResponse } from "~/utils/filters";
import { swapiMeta } from "./swapiMeta";
import { Person, SWAPIResponse } from "./swapiTypes";

export async function getPeople(): Promise<SWAPIResponse<Person>> {
  const response = await fetch(`${swapiMeta.urlBase}/people/`)
  const people = await response.json()
  const filtered = filterResponse<Person>(people, ['created', 'edited', 'url'])

  return filtered
}
