import React from 'react'
import ListInvoices from './ListInvoices'

const Invoice = () => {
  return (
    <div className='invoices container'>

        {/* list of invoices will be displayed. */}

        <div className="list-invoice">
            <ListInvoices/>
        </div>

    </div>
  )
}

export default Invoice