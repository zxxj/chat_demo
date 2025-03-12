import { createContext, useContext, useState } from 'react';

const TableContext = createContext();

export const TableProvider = ({ children }) => {
	const [tableData, setTableData] = useState([]);

	return (
		<TableContext.Provider value={{ tableData, setTableData }}>
			{children}
		</TableContext.Provider>
	);
};

export const useTable = () => useContext(TableContext);
