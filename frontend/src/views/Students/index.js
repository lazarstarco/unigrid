// ** React Imports
import {useState } from 'react'

// ** Table columns & Expandable Data
import ExpandableTable, { data, columns } from './data'

import { useTranslation } from 'react-i18next'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'

import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle } from 'reactstrap'

const StudentTable = () => {
  // ** State
  const [currentPage, setCurrentPage] = useState(0)

  // ** Function to handle filter
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  const {t} = useTranslation()
  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel={''}
      nextLabel={''}
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={Math.floor(data.length / 6)}
      breakLabel={'...'}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName='active'
      pageClassName='page-item'
      breakClassName='page-item'
      nextLinkClassName='page-link'
      pageLinkClassName='page-link'
      breakLinkClassName='page-link'
      previousLinkClassName='page-link'
      nextClassName='page-item next-item'
      previousClassName='page-item prev-item'
      containerClassName={'pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1'}
    />
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>{t("Your Student connections")}</CardTitle>
      </CardHeader>
      <div className='react-dataTable'>
        <DataTable
          noHeader
          pagination
          data={data}
          expandableRows
          columns={columns}
          expandOnRowClicked
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationComponent={CustomPagination}
          paginationDefaultPage={currentPage + 1}
          expandableRowsComponent={ExpandableTable}
          paginationRowsPerPageOptions={[10, 25, 50, 100]}
        />
      </div>
    </Card>
  )
}

export default StudentTable
