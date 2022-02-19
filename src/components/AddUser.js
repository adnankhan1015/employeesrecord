import React, {useState} from 'react'

const AddUser = ({getUserData}) => {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [role, setRole] = useState();

  const addUser = (e) => {
    e.preventDefault();
    getUserData({
      firstName,
      lastName,
      role: parseInt(role)
    })
  }



  return (
    <form onSubmit={addUser}>
        <div className="row">
            <div className="form-group ">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" onChange={e => setFirstName(e.target.value)} value={firstName} name="firstName" id="firstName" placeholder="First Name" required/>
            </div>
            <div className="form-group my-4">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className="form-control" onChange={e => setLastName(e.target.value)} value= {lastName} name="lastName" id="lastName" placeholder="Last Name" required/>
            </div>
            <div className="form-group">
                <label htmlFor="role">Select a Role</label>
                <select className="form-control" name="role" onChange={e => setRole(e.target.value)} value={role} id="role" required>
                    <option value="">Select a Role</option>
                    <option value="1">User</option>
                    <option value="2">Senior User</option>
                    <option value="3">WFM</option>
                </select>
            </div>
        </div>

        <div className="row my-4 mx-1"> 
                <input className="btn btn-primary btn-block" type="submit" />
        </div>
    </form>
  )
}

export default AddUser