import { lazy } from 'react'

const DTBasic = lazy(() => import('../../views/tables/data-tables/basic'))
const DTAdvance = lazy(() => import('../../views/tables/data-tables/advance'))
const StudentTable = lazy(() => import('../../views/Students'))

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
  }
]

export default TablesRoutes
