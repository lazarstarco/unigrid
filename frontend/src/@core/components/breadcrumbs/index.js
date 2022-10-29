// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'


import withReactContent from 'sweetalert2-react-content'

// ** Third Party Components
import Swal from 'sweetalert2'

import '@styles/base/plugins/extensions/ext-component-sweet-alerts.scss'


// ** Third Party Components
import Proptypes from 'prop-types'
import classnames from 'classnames'
import { Grid, CheckSquare, MessageSquare, Mail, Calendar, Download } from 'react-feather'

// ** Reactstrap Imports
import {
  Breadcrumb,
  DropdownMenu,
  DropdownItem,
  BreadcrumbItem,
  Button,
  DropdownToggle,
  UncontrolledButtonDropdown
} from 'reactstrap'

const BreadCrumbs = props => {

  const MySwal = withReactContent(Swal)

  const handleConfirmDelete = () => {
    return MySwal.fire({
      title: 'Payment Required!',
      text: 'You need to pay 3.99$ to download this file',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, pay and download!',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ms-1'
      },
      buttonsStyling: false
    }).then(function (result) {
      if (result.value) {
        MySwal.fire({
          icon: 'success',
          title: 'Download starting!',
          text: 'Your files are being downloaded',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
      } else if (result.dismiss === MySwal.DismissReason.cancel) {
        MySwal.fire({
          title: 'Cancelled',
          text: 'Download canceled!',
          icon: 'error',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
      }
    })
  }
  // ** Props
  const { data, title } = props

  const renderBreadCrumbs = () => {
    return data.map((item, index) => {
      const Wrapper = item.link ? Link : Fragment
      const isLastItem = data.length - 1 === index
      return (
        <BreadcrumbItem
          tag='li'
          key={index}
          active={!isLastItem}
          className={classnames({ 'text-primary': !isLastItem })}
        >
          <Wrapper {...(item.link ? { to: item.link } : {})}>{item.title}</Wrapper>
        </BreadcrumbItem>
      )
    })
  }

  return (
    <div className='content-header row'>
      <div className='content-header-left col-md-9 col-12 mb-2'>
        <div className='row breadcrumbs-top'>
          <div className='col-12'>
            {title ? <h2 className='content-header-title float-start mb-0'>{title}</h2> : ''}
            <div className='breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12'>
              <Breadcrumb>
                <BreadcrumbItem tag='li'>
                  <Link to='/'>Home</Link>
                </BreadcrumbItem>
                {renderBreadCrumbs()}
              </Breadcrumb>
            </div>
          </div>
        </div>
      </div>
      <div className='content-header-right text-md-end col-md-3 col-12 d-md-block d-none'>
        <div className='breadcrumb-right dropdown'>
        <Button color="primary" onClick={() => handleConfirmDelete()} className="mb-2 ms-auto me-1" style={{width:"15rem"}}>Download <Download /></Button>
        </div>
      </div>
    </div>
  )
}
export default BreadCrumbs

// ** PropTypes
BreadCrumbs.propTypes = {
  title: Proptypes.string.isRequired,
  data: Proptypes.arrayOf(
    Proptypes.shape({
      link: Proptypes.string,
      title: Proptypes.string.isRequired
    })
  )
}
