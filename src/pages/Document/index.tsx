import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Thumbnails from '../../components/Thumbnail';

import './styles.scss';

interface DocumentPageProps {
  documentData: any;
}

const DocumentPage = ({ documentData }: DocumentPageProps) => {
  // const [clickedThumbIdx, setClickedThumbIdx] = useState(0);

  // console.log(clickedThumbIdx);

  const thumbnails = documentData.map((thumbnail: any, index: number) => {
    return (
      <Thumbnails
        thumbnail={thumbnail}
        key={thumbnail.name}
        index={index}
        // setClickedThumbIdx={setClickedThumbIdx}
      />
    );
  });

  return (
    <>
      <Navbar />
      <section className="documents container">{thumbnails}</section>
    </>
  );
};

export default DocumentPage;
