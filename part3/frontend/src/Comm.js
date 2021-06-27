// import React, { useState, useEffect } from 'react'
import axios from "axios"

const baseUrl = "/api/persons"

// Added this `result` definition because they used it 
// to fix an Ajax problem.
const listRecords = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
// This may have been a problem. But regardless...

const createRecord = (newData) => {
    const request = axios.post(baseUrl, newData)
    return request.then(response => response.data)
}

const deleteRecord = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const updateRecord = (id, newData) => {
    const request = axios.put(`${baseUrl}/${id}`, newData)
    return request.then(response => response.data)
}

export default { listRecords, createRecord, deleteRecord, updateRecord }