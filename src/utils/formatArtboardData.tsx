import { ArtboardInfo } from '../types/artboardType';
import { EndpointRes } from '../types/endpointResTypes';

const formatArtboardData = (arr: EndpointRes[]) => {
  const formattedData = arr.map((item: EndpointRes) => {
    const newItem: ArtboardInfo = {
      name: item.name,
      urlScale1: item.files[0].url,
      urlScale2: item.files[1].url,
      urlThumbImg: item.files[0].thumbnails[1].url,
    };
    return newItem;
  });
  return formattedData;
};

export default formatArtboardData;
