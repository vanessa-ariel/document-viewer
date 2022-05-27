import { useState, useEffect } from 'react';
import './App.scss';
import ModalArtboard from './components/ModalArtboard';
import DocumentPage from './pages/Document';

function App() {
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
  const [documentData, setDocumentData] = useState([]);

  console.log('documentData', documentData);

  useEffect(() => {
    fetch(endpoint, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ query: SKETCH_QUERY }),
    })
      .then((response) => response.json())
      .then((data) => {
        setDocumentData(data.data.share.version.document.artboards.entries);
      });
  }, []);

  return (
    <div className="App">
      <ModalArtboard />
      <DocumentPage documentData={documentData} />
    </div>
  );
}

export default App;
