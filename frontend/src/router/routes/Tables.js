import { lazy } from 'react'
import PdfViewer from '../../views/files/PdfViewer'

const DTBasic = lazy(() => import('../../views/tables/data-tables/basic'))
const DTAdvance = lazy(() => import('../../views/tables/data-tables/advance'))
const StudentTable = lazy(() => import('../../views/Students'))
const FileUpload = lazy(() => import('../../views/files'))
const FilePreview = lazy(() => import('../../views/files/PdfViewer'))


const TablesRoutes = [
  {
    path: '/datatables/basic',
    element: <DTBasic />
  },
  {
    path: '/datatables/advance',
    element: <DTAdvance />
  },
  {
    path: '/network/students',
    element: <StudentTable />
  },
  {
    path: '/files',
    element: <FileUpload />
  },
  {
    path: '/preview',
    element: <PdfViewer />
  }
]

export default TablesRoutes
