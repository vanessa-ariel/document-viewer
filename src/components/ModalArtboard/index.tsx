import { useState } from 'react';
import Navbar from '../Navbar';
import './styles.scss';

const ModalArtboard = () => {
  // if (!isModalVisible) return null;

  return (
    <section className="modal-artboard">
      <Navbar insideArtboardPage={true} />
    </section>
  );
};

export default ModalArtboard;
