import { lazy } from 'react'
import PdfViewer from '../../views/files/PdfViewer'

const DTBasic = lazy(() => import('../../views/tables/data-tables/basic'))
const DTAdvance = lazy(() => import('../../views/tables/data-tables/advance'))
const StudentTable = lazy(() => import('../../views/Students'))
<<<<<<< HEAD
const FileUpload = lazy(() => import('../../views/files'))
const FilePreview = lazy(() => import('../../views/files/PdfViewer'))

=======
const ProfessorTable = lazy(() => import('../../views/Professors'))
>>>>>>> f0a73471e6423d3e1e4e8b8f9b606a8e11b4ef27

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
<<<<<<< HEAD
    path: '/files',
    element: <FileUpload />
  },
  {
    path: '/preview',
    element: <PdfViewer />
=======
    path: '/network/professors',
    element: <ProfessorTable />
>>>>>>> f0a73471e6423d3e1e4e8b8f9b606a8e11b4ef27
  }
]

export default TablesRoutes
