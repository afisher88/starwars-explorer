import { MetaFunction, useLoaderData } from "@remix-run/react";
import { Table } from "~/components/table";
import { getPeople } from "~/data/people";

export const meta: MetaFunction = () => {
  return [
    { title: "StarWars Explorer | People" },
    { name: "description", content: "Explore the StarWars characters" },
  ];
};

export const loader = async () => {
  const people = await getPeople();

  return people;
};

export default function People() {
  const people = useLoaderData<typeof loader>();

  return (
    <section>
      <h1>People ({people.count})</h1>
      <Table id="starwars-people" data={people.results} />
    </section>
  );
}
