import { useDispatch } from 'react-redux';
import { closeModal } from '../../reducers/artboardModalSlice';
import Controller from '../Controls';
import SketchLogo from '../../assets/sketch-logo.svg';
import Separator from '../../assets/separator.svg';
import CloseIcon from '../../assets/close.svg';
import { ArtboardInfo } from '../../types/artboardType';

import './styles.scss';

interface NavbarProps {
  insideArtboardPage?: boolean;
  selectedArtboard?: ArtboardInfo;
}

const Navbar = ({
  insideArtboardPage = false,
  selectedArtboard,
}: NavbarProps) => {
  const dispatch = useDispatch();

  const defaultNav = (
    <div className="nav__group">
      <div className="nav__logo">
        <img className="nav__img" src={SketchLogo} alt="Sketch logo" />
      </div>
      <div className="nav__separator">
        <img className="nav__img" src={Separator} alt="Sketch logo" />
      </div>
      <p className="nav__title">[Document Name]</p>
    </div>
  );

  const artBoardNav = (
    <div className="nav__group-artboard">
      <div className="nav__column">
        <button className="nav__close" onClick={() => dispatch(closeModal())}>
          <img className="nav__close-icon" src={CloseIcon} alt="Close modal" />
        </button>
        <div className="nav__separator">
          <img className="nav__img" src={Separator} alt="Sketch logo" />
        </div>
        <Controller />
      </div>
      <div className="nav__column">
        <div className="nav__artboard-title">
          {selectedArtboard ? selectedArtboard.name : ''}
        </div>
      </div>
    </div>
  );
  return (
    <nav className="nav">{insideArtboardPage ? artBoardNav : defaultNav}</nav>
  );
};

export default Navbar;
