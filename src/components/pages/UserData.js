// import React, { useState } from 'react';
// import Swal from 'sweetalert2';

// import Header from './Header';
// import List from './List';
// import Add from './Add';
// import Edit from './Edit';


// import { employeesData } from '../../data';

// const UserData = () => {

//   const [Employees, setEmployees] = useState(employeesData);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
//   const [isAdding, setIsAdding] = useState(false);
//   const [isEditing, setIsEditing] = useState(false)

//   return (
//     <div className="container">
//       <div className="py-4">
//         <h1>User Data</h1>
//       </div>
//       {!isAdding && !isEditing && (
//         <>
//           <header
//             setIsAdding={setIsAdding}
//           />
//           <list
//           employees={employees}
//           handleEdit={handleEdit}
//           handleDelete={handleDelete}
//           />
//         </>
//       )}
//     </div>
//   )
// }

// export default UserData


import React, { useState } from 'react';
import './UserData.css'
import Swal from 'sweetalert2';

import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';
import Navtag from '../layout/Navtag';
import { employeesData } from '../../data';

function UserData() {

    const [employees, setEmployees] = useState(employeesData);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (id) => {
        const [employee] = employees.filter(employee => employee.id === id);

        setSelectedEmployee(employee);
        setIsEditing(true);
    }

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [employee] = employees.filter(employee => employee.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setEmployees(employees.filter(employee => employee.id !== id));
            }
        });
    }


    return (
        <div className='container'>
            {/* List */}
            <Navtag>
            {!isAdding && !isEditing && (
                <>
                    <Header
                        setIsAdding={setIsAdding}
                    />
                    <List
                        employees={employees}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}
            {/* Add */}
            {isAdding && (
                <Add
                    employees={employees}
                    setEmployees={setEmployees}
                    setIsAdding={setIsAdding}
                />
            )}
            {/* Edit */}
            {isEditing && (
                <Edit
                    employees={employees}
                    selectedEmployee={selectedEmployee}
                    setEmployees={setEmployees}
                    setIsEditing={setIsEditing}
                />
            )}
            </Navtag>
        </div>
    )
}

export default UserData;