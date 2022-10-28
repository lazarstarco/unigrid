
import DocViewer, {PDFRenderer} from "react-doc-viewer"
import { Download } from "react-feather"
import { Card, Button, CardHeader, CardTitle } from 'reactstrap'
import Breadcrumbs from '@components/breadcrumbs'
import Pdf from './pdf-sample.pdf'
const PdfViewer = () => {
    const docs = [{uri: Pdf}]
    return (
        <Card>
            <div className="mt-3 px-1">
      <Breadcrumbs title='Preview And Download' className="mt-5" data={[{ title: 'File' }, { title: 'Preview and Download' }]} />
      </div>
        <DocViewer
        pluginRenderers={[PDFRenderer]}
         documents={docs}
         style={{height:"700px", overflow:"hidden"}}
         theme={{
            primary: "#7367f0",
            secondary: "#ffffff",
            tertiary: "#5296d899",
            text_primary: "#ffffff",
            text_secondary: "#5296d8",
            text_tertiary: "#00000099",
            disableThemeScrollbar: true
          }}
          />
         </Card>
    )
}

export default PdfViewer