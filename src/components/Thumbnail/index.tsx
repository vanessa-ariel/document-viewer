import { useDispatch } from 'react-redux';
import { openModal } from '../../reducers/artboardModalSlice';
import { setOpenArtboard } from '../../reducers/artboardSliderSlice';
import './styles.scss';

interface ThumbnailProps {
  thumbnail: any;
  index: number;
  // setClickedThumbIdx: (idx: number) => void;
}

const Thumbnail = ({
  thumbnail,
  index,
}: // setClickedThumbIdx,
ThumbnailProps) => {
  const dispatch = useDispatch();

  const handleThumbClick = () => {
    // setClickedThumbIdx(index);
    dispatch(setOpenArtboard(index));
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
        src={thumbnail.files[0].thumbnails[1].url}
        alt={thumbnail.name}
      />
      <p className="thumbnail__title">{thumbnail.name}</p>
    </button>
  );
};

export default Thumbnail;
