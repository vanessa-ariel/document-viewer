import { RootState } from './app/store';
import { useSelector } from 'react-redux';
import ModalArtboard from './components/ModalArtboard';
import DocumentPage from './pages/Document';
import useFetchData from './hooks/useFetchData';
import './main.scss';

function App() {
  useFetchData();
  const documentData = useSelector(
    (state: RootState) => state.artboardData.artboardArr
  );

  return (
    <div className="App">
      <ModalArtboard />
      <DocumentPage documentData={documentData} />
    </div>
  );
}

export default App;
