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
  5: { title: 'Professional', color: 'light-success' },
  3: { title: 'Rejected', color: 'light-danger' },
  4: { title: 'Professor', color: 'light-warning' },
  2: { title: 'Student', color: 'light-info' }
}

export let data

// ** Get initial Data
axios.get('/api/datatables/initial-data/professors').then(response => {
  data = response.data
})

// ** Table Zero Config Column
export const basicColumns = [
  {
    name: 'ID',
    sortable: true,
    maxWidth: '100px',
    selector: row => row.id
  },
  {
    name: 'Name',
    sortable: true,
    minWidth: '225px',
    selector: row => row.full_name
  },
  {
    name: 'Email',
    sortable: true,
    minWidth: '310px',
    selector: row => row.email
  },
  {
    name: 'Position',
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  },
  {
    name: 'Age',
    sortable: true,
    minWidth: '100px',
    selector: row => row.age
  },
  {
    name: 'Salary',
    sortable: true,
    minWidth: '175px',
    selector: row => row.salary
  }
]
// ** Table ReOrder Column
export const reOrderColumns = [
  {
    name: 'ID',
    reorder: true,
    sortable: true,
    maxWidth: '100px',
    selector: row => row.id
  },
  {
    name: 'Name',
    reorder: true,
    sortable: true,
    minWidth: '225px',
    selector: row => row.full_name
  },
  {
    name: 'Email',
    reorder: true,
    sortable: true,
    minWidth: '310px',
    selector: row => row.email
  },
  {
    name: 'Position',
    reorder: true,
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  },
  {
    name: 'Age',
    reorder: true,
    sortable: true,
    minWidth: '100px',
    selector: row => row.age
  },
  {
    name: 'Salary',
    reorder: true,
    sortable: true,
    minWidth: '175px',
    selector: row => row.salary
  }
]

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
    minWidth: '170px',
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
    minWidth: '270px',
    maxWidth: '270px',
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

// ** Table Intl Column
export const multiLingColumns = [
  {
    name: 'Name',
    sortable: true,
    minWidth: '200px',
    selector: row => row.full_name
  },
  {
    name: 'Position',
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  },
  {
    name: 'Email',
    sortable: true,
    minWidth: '250px',
    selector: row => row.email
  },
  {
    name: 'Date',
    sortable: true,
    minWidth: '150px',
    selector: row => row.start_date
  },

  {
    name: 'Salary',
    sortable: true,
    minWidth: '150px',
    selector: row => row.salary
  },
  {
    name: 'Status',
    sortable: true,
    minWidth: '150px',
    selector: row => row.status,
    cell: row => {
      return (
        <Badge color={status[row.status].color} pill>
          {status[row.status].title}
        </Badge>
      )
    }
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: () => {
      return (
        <div className='d-flex'>
          <UncontrolledDropdown>
            <DropdownToggle className='pe-1' tag='span'>
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>
                <FileText size={15} />
                <span className='align-middle ms-50'>Details</span>
              </DropdownItem>
              <DropdownItem>
                <Archive size={15} />
                <span className='align-middle ms-50'>Archive</span>
              </DropdownItem>
              <DropdownItem>
                <Trash size={15} />
                <span className='align-middle ms-50'>Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Edit size={15} />
        </div>
      )
    }
  }
]

// ** Table Server Side Column
export const serverSideColumns = [
  {
    sortable: true,
    name: 'Full Name',
    minWidth: '225px',
    selector: row => row.full_name
  },
  {
    sortable: true,
    name: 'Email',
    minWidth: '250px',
    selector: row => row.email
  },
  {
    sortable: true,
    name: 'Position',
    minWidth: '250px',
    selector: row => row.post
  },
  {
    sortable: true,
    name: 'Office',
    minWidth: '150px',
    selector: row => row.city
  },
  {
    sortable: true,
    name: 'Start Date',
    minWidth: '150px',
    selector: row => row.start_date
  },
  {
    sortable: true,
    name: 'Salary',
    minWidth: '150px',
    selector: row => row.salary
  }
]

// ** Table Adv Search Column
export const advSearchColumns = [
  {
    name: 'Name',
    sortable: true,
    minWidth: '200px',
    selector: row => row.full_name
  },
  {
    name: 'Email',
    sortable: true,
    minWidth: '250px',
    selector: row => row.email
  },
  {
    name: 'Post',
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  },
  {
    name: 'City',
    sortable: true,
    minWidth: '150px',
    selector: row => row.city
  },
  {
    name: 'Date',
    sortable: true,
    minWidth: '150px',
    selector: row => row.start_date
  },

  {
    name: 'Salary',
    sortable: true,
    minWidth: '100px',
    selector: row => row.salary
  }
]

export default ExpandableTable
