import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { nextSlide, prevSlide } from '../../reducers/artboardDataSlice';
import ArrowLeft from '../../assets/arrow-left.svg';
import ArrowRight from '../../assets/arrow-right.svg';
import './styles.scss';

const Controller = () => {
  const dispatch = useDispatch();
  const artboardData = useSelector((state: RootState) => state.artboardData);
  const { currentArtboardIndex, value } = artboardData;
  const itemsTotal = value.length;
  const itemNumber = currentArtboardIndex + 1;

  const handleClickPrev = () => {
    if (itemNumber > 0) {
      return dispatch(prevSlide());
    }
  };
  const handleClickNext = () => {
    if (itemNumber < itemsTotal) {
      return dispatch(nextSlide());
    }
  };

  return (
    <div className="controls">
      <button className="controls__arrow" onClick={handleClickPrev}>
        <img src={ArrowLeft} alt="Go to previous artboard" />
      </button>
      <span className="controls___numbers">
        {itemNumber} / {itemsTotal}
      </span>
      <button className="controls__arrow" onClick={handleClickNext}>
        <img src={ArrowRight} alt="Go to next artboard" />
      </button>
    </div>
  );
};

export default Controller;
