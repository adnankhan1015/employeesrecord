import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import AddUser from './AddUser'


const EmployeeForm = () => {
    const [showModal, setShow] = useState(false);
    const [user, setUser] = useState(null);
    const [empUser, setEmpUser] = useState([]);
    const [empSeniorUser, setSeniorEmpUser] = useState([]);
    const [empWFMUser, setWFMEmpUser] = useState([]);
    const [search, setSearch] = useState('');

    const [searchedEmpUser, setSearchedEmpUser] = useState([]);
    const [searchedSeniorEmpUser, setSearchedSeniorEmpUser] = useState([]);
    const [searchedWFMEmpUser, setSearchedWFMEmpUser] = useState([]);


    useEffect(() => { 
        getUsers();

    },[]);
     
    useEffect(()=> { 
        console.log('Emp User',empUser);
        console.log('Emp Senior User',empSeniorUser);
        console.log('empWFMUser User',empWFMUser);
    
    },[empUser, empSeniorUser, empWFMUser])

    useEffect(()=> {
        if(user !== null) {
            let arrays = [];
            if(user.role === 1){
                arrays = empUser;
                arrays.push(user)
                setEmpUser(arrays); 
            }
            if(user.role === 2){
                arrays = empSeniorUser;
                arrays.push(user);
                setSeniorEmpUser(arrays)
            }
            if(user.role === 3){
                arrays = empWFMUser;
                arrays.push(user);
                setWFMEmpUser(arrays)
            }
        }
    }, [user]);

    // For Search 
    useEffect(()=> {
        if(empUser.filter(emp => emp.firstName.toLowerCase() === search.toLowerCase()).length > 0) {
            setSearchedEmpUser(empUser.filter(emp => emp.firstName.toLowerCase() === search.toLowerCase()))
        } else {
            setSearchedEmpUser([]);
        }
        if(empSeniorUser.filter(emp => emp.firstName.toLowerCase() === search.toLowerCase()).length > 0) {
            setSearchedSeniorEmpUser(empSeniorUser.filter(emp => emp.firstName.toLowerCase() === search.toLowerCase()))
        } else {
            setSearchedSeniorEmpUser([]);
        }
        if(empWFMUser.filter(emp => emp.firstName.toLowerCase() === search.toLowerCase()).length > 0) {
            setSearchedWFMEmpUser(empWFMUser.filter(emp => emp.firstName.toLowerCase() === search.toLowerCase()))
        }
        else {
            setSearchedWFMEmpUser([]);
        }
    }, [search])

    const getUsers = async () => {
        let response = await fetch('http://127.0.0.1:5000/users');
        let data = await response.json();
        setEmpUser(data.filter(user => user.role === 1));
        setSeniorEmpUser(data.filter(user => user.role === 2));
        setWFMEmpUser(data.filter(user => user.role === 3));
    }

    const getUserData = (user) => {
        setUser({
            role: user.role,
            firstName: user.firstName,
            lastName: user.lastName
        })
        // setShow(false);
        // setUser(null)
    }
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div> 
        {/* Search Bar */}
        <nav className="navbar sticky-top navbar-light bg-light">
            <div className="container-fluid w-50">
                <label htmlFor="search-user" className="col-sm-2 col-form-label">Search for employee:</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" onChange={(e) =>  
                        setSearch(e.target.value)
                    } value={search} id="search-user" placeholder="Enter Full Name"/>
                </div>
            </div>
        </nav>

        {/* Table */}
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    {/* Users table */}
                    <div className="card my-5"> 
                        <div className="card-body">
                            <h5 className="card-title">Users</h5>
                            <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                { !search ? 
                                empUser.length > 0  && 
                                empUser.map((empUserKey, index) => ( 
                                    <tr>
                                        <td scope="col">{index + 1}</td>
                                        <td>{empUserKey.firstName}</td>
                                        <td>{empUserKey.lastName}</td>
                                        <td>{empUserKey.role === 1 ? 'User' : ''}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={(e) => setEmpUser(empUser.filter(userDel => userDel.firstName === empUserKey.firstName))}>Delete</button>
                                        </td>
                                    </tr> 
                                    )) : 
                                    searchedEmpUser.length > 0 &&
                                    searchedEmpUser.map((empUserKey, index) => ( 
                                        <tr>
                                            <td scope="col">{index + 1}</td>
                                            <td>{empUserKey.firstName}</td>
                                            <td>{empUserKey.lastName}</td>
                                            <td>{empUserKey.role === 1 ? 'User' : ''}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={(e) => setEmpUser(empUser.filter(userDel => userDel.firstName === empUserKey.firstName))}>Delete</button>
                                            </td>
                                        </tr> 
                                        )) 
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Senior Users */}
                    <div className="card"> 
                        <div className="card-body">
                            <h5 className="card-title">Senior Users</h5>
                            <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                { !search ? 
                                 empSeniorUser.length > 0 && empSeniorUser.map((empUserKey, index) => ( 
                                    <tr>
                                        <td scope="col">{index + 1}</td>
                                        <td>{empUserKey.firstName}</td>
                                        <td>{empUserKey.lastName}</td>
                                        <td>{empUserKey.role === 2 ? 'Senior User' : ''}</td>
                                        <td>
                                        <button className="btn btn-danger" onClick={(e) => setSeniorEmpUser(empSeniorUser.filter(userDel => userDel.firstName !== empUserKey.firstName))}>Delete</button>
                                        </td>
                                    </tr>
                                    )) : 
                                    searchedSeniorEmpUser.length > 0 &&
                                    searchedSeniorEmpUser.map((empUserKey, index) => (
                                    <tr>
                                        <td scope="col">{index + 1}</td>
                                        <td>{empUserKey.firstName}</td>
                                        <td>{empUserKey.lastName}</td>
                                        <td>{empUserKey.role === 2 ? 'Senior User' : ''}</td>
                                        <td>
                                        <button className="btn btn-danger" onClick={(e) => setSeniorEmpUser(empSeniorUser.filter(userDel => userDel.firstName !== empUserKey.firstName))}>Delete</button>
                                        </td>
                                    </tr>
                                    )) 
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* WFM Users */}
                    <div className="card my-5"> 
                        <div className="card-body">
                            <h5 className="card-title">WFM</h5>
                            <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {!search ? 
                                empWFMUser.length > 0 && empWFMUser.map((empUserKey, index) => ( 
                                    <tr>
                                        <td scope="col">{index + 1}</td>
                                        <td>{empUserKey.firstName}</td>
                                        <td>{empUserKey.lastName}</td>
                                        <td>{empUserKey.role === 3 ? 'WFM' : ''}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={(e) => setWFMEmpUser(empWFMUser.filter(userDel => userDel.firstName !== empUserKey.firstName))}>Delete</button>
                                        </td>
                                    </tr>
                                    )) :
                                    searchedWFMEmpUser.length > 0 && searchedWFMEmpUser.map((empUserKey, index) => ( 
                                        <tr>
                                            <td scope="col">{index + 1}</td>
                                            <td>{empUserKey.firstName}</td>
                                            <td>{empUserKey.lastName}</td>
                                            <td>{empUserKey.role === 3 ? 'WFM' : ''}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={(e) => setWFMEmpUser(empWFMUser.filter(userDel => userDel.firstName !== empUserKey.firstName))}>Delete</button>
                                            </td>
                                        </tr>
                                        
                                        ))
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* Modal Button */}
                    <Button variant="primary" onClick={handleShow}>
                        Add User
                    </Button> 
                    <Modal show={showModal} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Add New User</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <AddUser getUserData={getUserData} />
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button> 
                        </Modal.Footer>
                    </Modal>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default EmployeeForm