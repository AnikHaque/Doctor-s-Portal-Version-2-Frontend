import { Table as AntTable } from "antd";
import type { ColumnsType } from "antd/es/table";

interface TableProps<T> {
  columns: ColumnsType<T>;
  data: T[];
}
function Table<T>({ columns, data }: TableProps<T[]>) {
  return <AntTable columns={columns} dataSource={data} />;
}

export default Table;
