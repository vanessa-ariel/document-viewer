import { RootState } from './app/store';
import { useSelector } from 'react-redux';
import ModalArtboard from './components/ModalArtboard';
import DocumentPage from './pages/Document';
import useFetchData from './Hooks/useFetchData';
import './App.scss';

function App() {
  useFetchData();
  const documentData = useSelector(
    (state: RootState) => state.artboardSlider.value
  );

  return (
    <div className="App">
      <ModalArtboard />
      <DocumentPage documentData={documentData} />
    </div>
  );
}

export default App;
