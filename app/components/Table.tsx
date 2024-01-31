import type { ReactElement, ReactNode } from "react";

interface TableProps {
  headerContent: ReactElement<HTMLTableRowElement>;
  children:
    | ReactElement<HTMLTableRowElement>
    | ReactElement<HTMLTableRowElement>[];
}

interface TableCellProps {
  children: ReactNode;
}

interface TableRowProps {
  children: ReactElement<HTMLTableCellElement>;
}

export function TableTd({ children }: TableCellProps) {
  return <td className="border-default p-2">{children}</td>;
}

export function TableTh({ children }: TableCellProps) {
  return <th className="border-default p-2">{children}</th>;
}

export function TableRow({ children }: TableRowProps) {
  return <tr>{children}</tr>;
}

export function Table({ headerContent, children }: TableProps) {
  return (
    <table className="border-collapse border-default">
      <thead>{headerContent}</thead>
      <tbody>{children}</tbody>
    </table>
  );
}
