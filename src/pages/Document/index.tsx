import React from 'react';
import Navbar from '../../components/Navbar';

import './styles.scss';

interface DocumentPageProps {
  documentData: any;
}

const DocumentPage = ({ documentData }: DocumentPageProps) => {
  const artboards = documentData.map((artboard: any) => {
    return (
      <div className="documents__thumbnail">
        <img
          className="documents__thumbnail-img"
          src={artboard.files[0].thumbnails[1].url}
          alt={artboard.name}
        />
        <p className="documents__thumbnail-title">{artboard.name}</p>
      </div>
    );
  });
  return (
    <>
      <Navbar />
      <section className="documents container">{artboards}</section>
    </>
  );
};

export default DocumentPage;
