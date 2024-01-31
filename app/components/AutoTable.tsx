import { sanitiseKey } from "~/utils/string";
import { Table, TableRow, TableTd, TableTh } from "./Table";

interface AutoTableDataProps {
  id: string;
  data: Record<string, unknown>[];
}

interface CellDataProps extends Omit<AutoTableDataProps, "data"> {
  isHeader?: boolean;
  data: Record<string, unknown>;
}

function Cells({ isHeader, data, id }: CellDataProps) {
  const keyVals = Object.entries(data);

  return keyVals.map(([key, value]) => {
    if (typeof value !== "string" && typeof value !== "number") {
      return null;
    }

    if (isHeader) {
      return <TableTh key={`${id}-${key}-header`}>{sanitiseKey(key)}</TableTh>;
    }

    return <TableTd key={`${id}-${key}-value`}>{value}</TableTd>;
  });
}

export function AutoTable({ data, id }: AutoTableDataProps) {
  return (
    <Table
      headerContent={
        <TableRow>
          <Cells id={id} isHeader data={data[0]} />
        </TableRow>
      }
    >
      {data.map((row, i) => (
        <TableRow key={`${id}-row-${i}`}>
          <Cells id={id} data={row} />
        </TableRow>
      ))}
    </Table>
  );
}
