import { Server, Grid, Circle, Share2, File } from 'react-feather'

export default [
  {
    id: 'files',
    title: 'Files',
    icon: <File size={20} />,
    children: [
      {
        id: 'filesBasic',
        title: 'Private',
        icon: <Circle size={12} />,
        navLink: '/users/basic'
      },
      {
        id: 'filesAdvanced',
        title: 'Shared',
        icon: <Circle size={12} />,
        navLink: '/user/advance'
      }
    ]
  }
]
