import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addArray } from '../reducers/artboardDataSlice';
import formatArtboardData from '../utils/formatArtboardData';

const useFetchData = () => {
  const dispatch = useDispatch();
  const SKETCH_QUERY = `{
  share(id: "e981971c-ff57-46dc-a932-a60dc1804992") {
    identifier
    version {
      document {
        name
        artboards {
          entries {
            name
            isArtboard
            files {
              url
              height
              width
              scale
              thumbnails {
                url
                height
                width
              }
            }
          }
        }
      }
    }
  }
}
`;
  const endpoint = 'https://graphql.sketch.cloud/api';

  useEffect(() => {
    fetch(endpoint, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ query: SKETCH_QUERY }),
    })
      .then((response) => response.json())
      .then((data) => {
        const formattedData = formatArtboardData(
          data.data.share.version.document.artboards.entries
        );
        dispatch(addArray(formattedData));
      });
  }, []);
};

export default useFetchData;
