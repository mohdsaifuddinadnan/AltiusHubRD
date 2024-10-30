import React from 'react'
import { useState } from 'react';
// importing json data into invoice item table
// fetching from json file which is in Data folder in src.
const ListInvoices = () => {
    const [invoices, setInvoices] = useState([]);
    React.useEffect(() => {
        fetch('../Data/inv.json')
            .then(response => response.json())
            .then(data => setInvoices(data))
            //console data from api.
            .then(data => console.log(data))
    }, []);
    return (
        // {/* fetching according to the data present in inv.json file in Data folder of src */}
        <div className="container">
            <h1 className="head">Invoice List</h1> 

            {/* // adding invoices. */}
            <div className="btns-add"><a href='/addinvs' style={{backgroundColor:'gray',padding:'3px 20px', fontSize:'20px',margin:'20px',textDecoration:'none',color:'black'}}>ADD</a></div>
            <table className="table" border={'1px solid black'} style={{padding:'20px',margin:'20px'}}>
                <thead >
                    <tr >
                        <th>Invoice ID</th>
                        <th>Invoice Date</th>
                        <th>Customer Name</th>
                        <th>Invoice Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* mapping all the items of invoices accordingly in table rows. */}
                    {/* here we can also list out no.of items and their details by adding a button and routing it to a component
                    for example ItemDetail.jsx */}
                    {invoices.map((invoice, index) => (
                        <tr key={index}>
                            <td>{invoice.invoice_id}</td>
                            <td>{invoice.invoice_date}</td>
                            <td>{invoice.customer_name}</td>
                            <td>{invoice.invoice_total}</td>
                            <td><button className="btn">View</button> 
                            <button className="btn">Delete</button></td>
                            {/* update button for updating invoice accordingly */}
                            <td><a href='/updateinvs' className='upd-btn'>Update</a></td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    )
}

export default ListInvoices