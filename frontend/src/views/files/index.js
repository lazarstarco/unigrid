
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle } from 'reactstrap'
import UploadForm from './UploadForm'

const StudentTable = () => {
  // ** State
 

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Upload your files</CardTitle>
      </CardHeader>
      <UploadForm />
    </Card>
  )
}

export default StudentTable
