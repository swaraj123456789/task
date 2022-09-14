import React, { useState } from 'react';
import MaterialTable from 'material-table';

 const Table = () => {

    const [tableData,setTableData]=useState([])

    const columns=[
        {title:"Name",field:"name"},
        {title:"ChefName",field:"chefname"},
        {title:"Review",field:"review"},
        {title:"Rating",field:"rating"}
    ]
      


  return (
    <div className='App'>
        <MaterialTable title="Material Table"
            data={tableData}
            columns={columns}
            />
    </div>
  )
}
export default Table;