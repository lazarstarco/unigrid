import { lazy } from 'react'

const DTBasic = lazy(() => import('../../views/tables/data-tables/basic'))
const DTAdvance = lazy(() => import('../../views/tables/data-tables/advance'))
const StudentTable = lazy(() => import('../../views/Students'))
const ProfessorTable = lazy(() => import('../../views/Professors'))

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
    path: '/network/professors',
    element: <ProfessorTable />
  }
]

export default TablesRoutes
