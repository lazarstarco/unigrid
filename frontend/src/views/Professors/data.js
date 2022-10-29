// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import axios from 'axios'
import { MoreVertical, Edit, FileText, Archive, Trash } from 'react-feather'

// ** Reactstrap Imports
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

// ** Vars
const states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary']

const role = {
  1: { title: 'Current', color: 'light-primary' },
  2: { title: 'Student', color: 'light-info' },
  3: { title: 'Rejected', color: 'light-danger' },
  4: { title: 'Professor', color: 'light-warning' },
  5: { title: 'Professional', color: 'light-success' }
}

export let data

// ** Get initial Data
axios.get('/api/datatables/initial-data/professors').then(response => {
  data = response.data
})

// ** Expandable table component
const ExpandableTable = ({ data }) => {
  return (
    <div className='expandable-content p-2'>
      <p>
        <span className='fw-bold'>City:</span> {data.city}
      </p>
      <p className='m-0'>
        <span className='fw-bold'>Email:</span> {data.email}
      </p>
    </div>
  )
}

// ** Table Common Column
export const columns = [
  {
    name: 'Name',
    minWidth: '250px',
    sortable: false,
    cell: row => (
      <div className='d-flex align-items-center'>
        {row.avatar === '' ? (
          <Avatar color={`light-${states[row.role]}`} content={row.full_name} initials />
        ) : (
          <Avatar img={require(`@src/assets/images/portrait/small/avatar-s-${row.avatar}`).default} />
        )}
        <div className='user-info text-truncate ms-1'>
          <span className='d-block fw-bold text-truncate'>{row.full_name}</span>
          <small>{row.studies}</small>
        </div>
      </div>
    )
  },
  {
    name: 'Date of birth',
    sortable: true,
    minWidth: '168px',
    selector: row => row.date_of_birth
  },
  {
    name: 'Degree',
    sortable: true,
    minWidth: '150px',
    maxWidth: '150px',
    selector: row => row.degree
  },
  {
    name: 'University',
    sortable: true,
    minWidth: '220px',
    maxWidth: '220px',
    selector: row => row.university
  },
  {
    name: 'Faculty',
    sortable: true,
    minWidth: '255px',
    maxWidth: '255px',
    selector: row => row.faculty
  },
  {
    name: 'Role',
    minWidth: '110px',
    sortable: row => row.role.title,
    cell: row => {
      return (
        <Badge color={role[row.role].color} pill>
          {role[row.role].title}
        </Badge>
      )
    }
  }
]

export default ExpandableTable
