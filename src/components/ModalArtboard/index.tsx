import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar';
import Artboard from '../Artboard';
import './styles.scss';
import { ArtboardInfo } from '../../types/artboardType';

const ModalArtboard = () => {
  const artboardModalVisible = useSelector(
    (state: RootState) => state.artboardModal.value
  );
  const artboardData = useSelector((state: RootState) => state.artboardData);

  const { artboardArr, currentArtboardIndex } = artboardData;
  const findArtboard = (arr: ArtboardInfo[]) => {
    const currentArtboard = arr.find((item: ArtboardInfo, index: number) => {
      return index === currentArtboardIndex;
    });

    return currentArtboard
      ? currentArtboard
      : {
          name: '',
          urlScale1: '',
          urlScale2: '',
          urlThumbImg: '',
        };
  };

  const selectedArtboard: ArtboardInfo = findArtboard(artboardArr);

  if (!artboardModalVisible) return null;

  return (
    <section className="modal-artboard">
      <Navbar insideArtboardPage={true} selectedArtboard={selectedArtboard} />
      <Artboard selectedArtboard={selectedArtboard} />
    </section>
  );
};

export default ModalArtboard;
