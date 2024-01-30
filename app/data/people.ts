import { swapiMeta } from "./swapiMeta";
import { Person, SWAPIResponse } from "./swapiTypes";

export async function getPeople(): Promise<SWAPIResponse<Person>> {
  const people = await fetch(`${swapiMeta.urlBase}/people/`)

  return people.json()
}
