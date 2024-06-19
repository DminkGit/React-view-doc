'use client'
import React, { useState } from 'react';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import './styles.css'; // Path to your CSS file

interface Document {
  uri: string;
  fileType: 'pptx' | 'xlsx' | 'pdf' | 'docx' | 'png' | 'txt';
  name?: string;
}

function App() {
  const [currentDoc, setCurrentDoc] = useState<Document | null>(null);

  const docs: Document[] = [
    { 
      uri: "https://gmt-s3.s3.ap-southeast-1.amazonaws.com/master-contract/samplepptx_1718719981.pptx",
      fileType: 'pptx',
      name: 'samplepptx_1718719981.pptx'
    },
    { 
      uri: "https://gmt-s3.s3.ap-southeast-1.amazonaws.com/master-contract/Individuals.xlsx",
      fileType: 'xlsx',
      name: 'Individuals.xlsx'
    },
    { 
      uri: "https://gmt-s3.s3.ap-southeast-1.amazonaws.com/master-contract/small.pdf",
      fileType: 'pdf',
      name: 'small.pdf'
    },
    // Uncomment additional documents as needed
    { 
      uri: "https://gmt-s3.s3.ap-southeast-1.amazonaws.com/master-contract/sample.docx",
      fileType: 'docx',
      name: 'sample.docx'
    },
    { 
      uri: "https://gmt-s3.s3.ap-southeast-1.amazonaws.com/master-contract/Screenshot%20from%202024-06-14%2017-14-05.png",
      fileType: 'png',
      name: 'Screenshot from 2024-06-14 17-14-05.png'
    },
    { 
      uri: "https://gmt-s3.s3.ap-southeast-1.amazonaws.com/master-contract/Unit%20Test%20l%C3%A0%20m%E1%BB%99t%20lo%E1%BA%A1i.txt",
      fileType: 'txt',
      name: 'TxtFile'
    }
  ];

  const handleDocClick = (doc: Document) => {
    setCurrentDoc(doc);
  };

  return (
    <div className="docViewerContainer">
      <div className="buttonContainer">
        {docs.map((doc, index) => (
          <button key={index} onClick={() => handleDocClick(doc)}>
            Preview - {doc.name || `Document ${index + 1}`}
          </button>
        ))}
      </div>
      {currentDoc && (
        <DocViewer
          documents={[currentDoc]}
          pluginRenderers={DocViewerRenderers}
        />
      )}
    </div>
  );
}

export default App;
