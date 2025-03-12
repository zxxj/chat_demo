import { Table } from 'antd';
import { useTable } from './TableContext';
import { useState, useEffect } from 'react';

const TableComponent = () => {
  const { tableData } = useTable();
  const [columns, setColumns] = useState([]);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    if (tableData && tableData.columns) {
      setColumns(tableData.columns);
    }

    if (tableData && tableData.dataSource) {
      setDataSource(tableData.dataSource);
    }
  }, [tableData]);

  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        style={{ width: '50%' }}
      />
    </>
  );
};

export default TableComponent;
