// ** Custom Components
import AvatarGroup from '@components/avatar-group'

// ** Images
import react from '@src/assets/images/icons/react.svg'
import vuejs from '@src/assets/images/icons/vuejs.svg'
import angular from '@src/assets/images/icons/angular.svg'
import bootstrap from '@src/assets/images/icons/bootstrap.svg'
import avatar1 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import avatar2 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import avatar3 from '@src/assets/images/portrait/small/avatar-s-7.jpg'

// ** Icons Imports
import { MoreVertical, Edit, Trash } from 'react-feather'

// ** Reactstrap Imports
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, Card, DropdownToggle, CardHeader } from 'reactstrap'

const avatarGroupData1 = [
  {
    title: 'Lilian',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Alberto',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Bruce',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData2 = [
  {
    title: 'Diana',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Rey',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData3 = [
  {
    title: 'Lee',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Oswald',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData4 = [
  {
    title: 'Barnes',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  }
]

const subjects = [
    {
        name: "Programming",
        professor: "Petar Petrović",
        students: avatarGroupData1,
        status: "Active"
    },
    {
        name: "Science",
        professor: "Radica Fredić",
        students: avatarGroupData2,
        status: "Completed"
    },
    {
        name: "Math",
        professor: "Jovana Obrenović",
        students: avatarGroupData3,
        status: "Upcoming"
    },
    {
        name: "Web Development",
        professor: "Jovan Milivojević",
        students: avatarGroupData4,
        status: "Active"
    }
]

const TableBasic = () => {
  return (
    <Card>
        <CardHeader tag='h4'>
            Subjects
        </CardHeader>
    <Table responsive>
      <thead>
        <tr>
          <th>Subject</th>
          <th>Professor</th>
          <th>Students</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img className='me-75' src={angular} alt='angular' height='20' width='20' />
            <span className='align-middle fw-bold'>{subjects[0].name}</span>
          </td>
          <td>{subjects[0].professor}</td>
          <td>
            <AvatarGroup data={subjects[0].students} />
          </td>
          <td>
            <Badge pill color='light-primary' className='me-1'>
              {subjects[0].status}
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr>
          <td>
            <img className='me-75' src={react} alt='react' height='20' width='20' />
            <span className='align-middle fw-bold'>{subjects[1].name}</span>
          </td>
          <td>{subjects[1].professor}</td>
          <td>
            <AvatarGroup data={subjects[1].students} />
          </td>
          <td>
            <Badge pill color='light-success' className='me-1'>
              {subjects[1].status}
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr>
          <td>
            <img className='me-75' src={vuejs} alt='vuejs' height='20' width='20' />
            <span className='align-middle fw-bold'>{subjects[2].name}</span>
          </td>
          <td>{subjects[2].professor}</td>
          <td>
            <AvatarGroup data={subjects[2].students} />
          </td>
          <td>
            <Badge pill color='light-info' className='me-1'>
              {subjects[2].status}
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr>
          <td>
            <img className='me-75' src={bootstrap} alt='bootstrap' height='20' width='20' />
            <span className='align-middle fw-bold'>{subjects[3].name}</span>
          </td>
          <td>{subjects[3].professor}</td>
          <td>
            <AvatarGroup data={subjects[3].students} />
          </td>
          <td>
            <Badge pill color='light-primary' className='me-1'>
              {subjects[3].status}
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
      </tbody>
    </Table>
    </Card>
  )
}

export default TableBasic