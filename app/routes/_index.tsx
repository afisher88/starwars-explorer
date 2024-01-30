import { type MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "StarWars Explorer" },
    { name: "description", content: "Explore the StarWars Universe!" },
  ];
};

export default function Index() {
  return (
    <section>
      <h1>StarWars Explorer</h1>
      <p>
        Explorer the StarWars universe with help from the{" "}
        <a href="https://swapi.dev/" target="_blank" rel="noreferrer">
          SWAPI
        </a>
        .
      </p>
    </section>
  );
}
