import { useState } from 'react';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar';
import './styles.scss';

const ModalArtboard = () => {
  const dashboardModal = useSelector(
    (state: RootState) => state.dashboardModal.value
  );

  if (!dashboardModal) return null;

  return (
    <section className="modal-artboard">
      <Navbar insideArtboardPage={true} />
    </section>
  );
};

export default ModalArtboard;
