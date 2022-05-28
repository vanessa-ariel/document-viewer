import { useDispatch } from 'react-redux';
import { openModal } from '../../reducers/artboardModalSlice';
import { openArtboard } from '../../reducers/artboardDataSlice';
import './styles.scss';

interface ThumbnailProps {
  thumbnail: any;
  index: number;
}

const Thumbnail = ({ thumbnail, index }: ThumbnailProps) => {
  const dispatch = useDispatch();

  const handleThumbClick = () => {
    dispatch(openArtboard(index));
    dispatch(openModal());
  };

  return (
    <button
      className="thumbnail"
      key={thumbnail.name}
      onClick={handleThumbClick}
    >
      <img
        className="thumbnail__img"
        src={thumbnail.urlThumbImg}
        alt={thumbnail.name}
      />
      <p className="thumbnail__title">{thumbnail.name}</p>
    </button>
  );
};

export default Thumbnail;
