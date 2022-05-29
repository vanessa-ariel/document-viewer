import Navbar from '../../components/Navbar';
import Thumbnails from '../../components/Thumbnail';
import { ArtboardInfo } from '../../types/artboardType';

import './styles.scss';

interface DocumentPageProps {
  documentData: ArtboardInfo[];
}

const DocumentPage = ({ documentData }: DocumentPageProps) => {
  const thumbnails = documentData.map(
    (thumbnail: ArtboardInfo, index: number) => {
      return (
        <Thumbnails thumbnail={thumbnail} key={thumbnail.name} index={index} />
      );
    }
  );

  return (
    <>
      <Navbar />
      <section className="documents container">{thumbnails}</section>
    </>
  );
};

export default DocumentPage;
