'use client'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import './styles.css'; // Đường dẫn tới tệp CSS của bạn

function App() {
  const docs = [
    { 
      uri: "https://github.com/cyntler/react-doc-viewer/files/9015134/test-doc.docx",
      fileType: 'docx'
    }, // Remote file
    { 
      uri: "https://github.com/cyntler/react-doc-viewer/files/9015135/test-excelaki.xlsx",
      fileType: 'xlsx'
    }, // Remote file
    { 
      uri: "http://localhost:3000/documents/small.pdf",
      fileType: 'pdf'
    }, // Local file
  ];

  console.log(docs[0].uri);
  // https://github.com/cyntler/react-doc-viewer/files/9015135/test-excelaki.xlsx
  // https://rotciv.me/TH_Day1.docx

  return (
    <div className="docViewerContainer">
      <DocViewer
        documents={docs}
        pluginRenderers={DocViewerRenderers}
        prefetchMethod="GET"
      />
    </div>
  )
}

export default App;
