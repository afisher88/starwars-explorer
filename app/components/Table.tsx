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
  children:
    | ReactElement<HTMLTableCellElement>
    | ReactElement<HTMLTableHeaderCellElement>;
}

export function TableTd({ children }: TableCellProps) {
  return <td>{children}</td>;
}

export function TableTh({ children }: TableCellProps) {
  return <th>{children}</th>;
}

export function TableRow({ children }: TableRowProps) {
  return <tr>{children}</tr>;
}

export function Table({ headerContent, children }: TableProps) {
  return (
    <table className="border-collapse border-solid">
      <thead>{headerContent}</thead>
      <tbody>{children}</tbody>
    </table>
  );
}
