import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";


const EmployeeForm = () => {


    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div> 
        {/* Search Bar */}
        <nav className="navbar sticky-top navbar-light bg-light">
            <div className="container-fluid w-50">
                <label htmlFor="search-user" className="col-sm-2 col-form-label">Search for employee:</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="search-user" placeholder="Enter a name"/>
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
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   
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
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   
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
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   
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
                            <form>
                                <div className="row">
                                    <div className="form-group ">
                                        <label htmlFor="firstName">First Name</label>
                                        <input type="text" className="form-control" name="firstName" id="firstName" placeholder="First Name"/>
                                    </div>
                                    <div className="form-group my-4">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input type="text" className="form-control" name="lastName" id="lastName" placeholder="Last Name"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="role">Select a Role</label>
                                        <select className="form-control" name="role" id="role">
                                            <option value="">Select a Role</option>
                                            <option value="user">User</option>
                                            <option value="seniorUser">Senior User</option>
                                            <option value="wfm">WFM</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row my-4 mx-1"> 
                                        <button className="btn btn-primary btn-block">Submit</button>
                             
                                </div>
                            </form>
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