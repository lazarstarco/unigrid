import { Server, Grid, Circle, Share2, File, Upload } from 'react-feather'

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
        navLink: '/files/private'
      },
      {
        id: 'filesAdvanced',
        title: 'Shared',
        icon: <Circle size={12} />,
        navLink: '/files/shared'
      },
      {
        id: 'upload',
        title: 'Upload',
        icon: <Upload size={12} />,
        navLink: '/files/upload'
      }
    ]
  }
]
