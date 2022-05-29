import { ArtboardInfo } from '../../types/artboardType';
import './styles.scss';
interface ArtboardProps {
  selectedArtboard: ArtboardInfo;
}

const Artboard = ({ selectedArtboard }: ArtboardProps) => {
  return (
    <div className="artboard__container">
      <picture className="artboard__img-container">
        <source
          media="(min-width:1920px)"
          srcSet={selectedArtboard.urlScale2}
          className="artboard__img"
        />
        <img
          src={selectedArtboard.urlScale1}
          alt={selectedArtboard.name}
          className="artboard__img"
        />
      </picture>
    </div>
  );
};

export default Artboard;
