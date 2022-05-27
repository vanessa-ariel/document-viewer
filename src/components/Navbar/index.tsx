import { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../reducers/dashboardModalSlice';
import SketchLogo from '../../assets/sketch-logo.svg';
import Separator from '../../assets/separator.svg';
import CloseIcon from '../../assets/close.svg';
import ArrowLeft from '../../assets/arrow-left.svg';
import ArrowRight from '../../assets/arrow-right.svg';

import './styles.scss';

interface NavbarProps {
  insideArtboardPage?: boolean;
}

const Navbar = ({ insideArtboardPage = false }: NavbarProps) => {
  const dashboardModal = useSelector(
    (state: RootState) => state.dashboardModal.value
  );
  const dispatch = useDispatch();

  if (!dashboardModal) return null;

  return (
    <nav className="nav">
      {insideArtboardPage ? (
        <div className="nav__group-artboard">
          <div className="nav__column">
            <button
              className="nav__close"
              onClick={() => dispatch(closeModal())}
            >
              <img
                className="nav__close-icon"
                src={CloseIcon}
                alt="Close modal"
              />
            </button>
            <div className="nav__separator">
              <img className="nav__img" src={Separator} alt="Sketch logo" />
            </div>
            <div className="nav__controls ">
              <button className="nav__arrow snav__controls-left">
                <img src={ArrowLeft} alt="Go to previous artboard" />
              </button>
              <span className="nav__controls-numbers">4 / 10</span>
              <button className="nav__arrow snav__controls-right">
                <img src={ArrowRight} alt="Go to next artboard" />
              </button>
            </div>
          </div>
          <div className="nav__column">
            <div className="nav__artboard-title">Android</div>
          </div>
        </div>
      ) : (
        <div className="nav__group">
          <div className="nav__logo">
            <img className="nav__img" src={SketchLogo} alt="Sketch logo" />
          </div>
          <div className="nav__separator">
            <img className="nav__img" src={Separator} alt="Sketch logo" />
          </div>
          <p className="nav__title">[Document Name]</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
