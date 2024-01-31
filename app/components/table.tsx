interface TableDataProps {
  id: string;
  data: Record<string, unknown>[];
}

interface CellDataProps {
  id: string;
  isHeader?: boolean;
  data: unknown;
}

function Cells({ isHeader, data, id }: CellDataProps) {
  const keyVals = Object.entries(data);

  return keyVals.map(([key, value]) => {
    if (typeof value !== "string" && typeof value !== "number") {
      return null;
    }

    if (isHeader) {
      return <th key={`${id}-${key}-header`}>{key}</th>;
    }

    return <td key={`${id}-${key}-value`}>{value}</td>;
  });
}

export function Table({ data, id }: TableDataProps) {
  return (
    <table>
      <thead>
        <tr>
          <Cells id={id} isHeader data={data[0]} />
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={`${id}-row-${i}`}>
            <Cells id={id} data={row} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
