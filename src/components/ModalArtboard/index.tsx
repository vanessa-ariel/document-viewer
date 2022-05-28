import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar';
import Artboard from '../Artboard';
import './styles.scss';

const ModalArtboard = () => {
  const artboardModalVisible = useSelector(
    (state: RootState) => state.artboardModal.value
  );
  const artboardData = useSelector((state: RootState) => state.artboardData);
  const { currentArtboardIndex, value } = artboardData;

  if (!artboardModalVisible) return null;

  return (
    <section className="modal-artboard">
      <Navbar insideArtboardPage={true} />
      <Artboard />
    </section>
  );
};

export default ModalArtboard;
