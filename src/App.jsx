import Chat from './Chat';
import TableComponent from './Table';
import { TableProvider } from './TableContext';

function App() {
  return (
    <TableProvider>
      <div style={{ display: 'flex', height: '100vh' }}>
        <Chat />
        <TableComponent />
      </div>
    </TableProvider>
  );
}

export default App;
