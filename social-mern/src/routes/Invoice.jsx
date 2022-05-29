import {useParams} from 'react-router-dom'
import { getInvoice } from "../data";
import React from 'react'

export default function Invoice() {
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <div>
        <h2>Invoice {params.invoiceId}</h2>
        <main style={{ padding: " 0rem 1rem" }}>
            <h3>Total Due: {invoice.amount}</h3>
            <p>
                {invoice.name}: {invoice.number}
            </p>
            <p>Due Date: {invoice.due}</p>
        </main>
    </div>
  )
}
