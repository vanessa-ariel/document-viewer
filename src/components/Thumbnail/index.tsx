import { useDispatch } from 'react-redux';
import { openModal } from '../../reducers/artboardModalSlice';
import { openArtboard } from '../../reducers/artboardDataSlice';
import { ArtboardInfo } from '../../types/artboardType';
import './styles.scss';

interface ThumbnailProps {
  thumbnail: ArtboardInfo;
  index: number;
}

const Thumbnail = ({ thumbnail, index }: ThumbnailProps) => {
  const dispatch = useDispatch();

  const handleThumbClick = () => {
    dispatch(openArtboard(index));
    dispatch(openModal());
  };

  return (
    <div className="thumbnail">
      <button
        className="thumbnail__btn"
        key={thumbnail.name}
        onClick={handleThumbClick}
      >
        <img
          className="thumbnail__img"
          src={thumbnail.urlThumbImg}
          alt={thumbnail.name}
        />
      </button>
      <p className="thumbnail__title">{thumbnail.name}</p>
    </div>
  );
};

export default Thumbnail;
