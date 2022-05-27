import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar';
import Artboard from '../Artboard';
import './styles.scss';

const ModalArtboard = () => {
  const artboardModal = useSelector(
    (state: RootState) => state.artboardModal.value
  );
  const artboardSlider = useSelector(
    (state: RootState) => state.artboardSlider
  );
  const { currentArtboardIndex, value } = artboardSlider;

  if (!artboardModal) return null;

  return (
    <section className="modal-artboard">
      <Navbar
        insideArtboardPage={true}
        currentArtboard={currentArtboardIndex + 1}
      />
      <Artboard />
    </section>
  );
};

export default ModalArtboard;
