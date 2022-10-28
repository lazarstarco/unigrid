// ** React Imports
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const User = lazy(() => import('../../views/apps/user'))

const AppRoutes = [
  {
    element: <User />,
    path: '/apps/user'
  }
]

export default AppRoutes
