import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import BankContext from "../utils/BankContext"
import UsersCell from "../Components/UserCell"
import AddIcon from "@mui/icons-material/Add"
import AdminAddModal from "../Components/AdminAddModal"
function Users() {
  const { users } = useContext(BankContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Users</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-success">
          <AddIcon /> Add Admin
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "10%" }}>#</th>
            <th style={{ width: "20%" }}>Full Name</th>
            <th style={{ width: "25%" }}>Email</th>
            <th style={{ width: "15%" }}>PhoneNumber</th>
            <th style={{ width: "10%" }}>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UsersCell key={user._id} user={user} />
          ))}
        </tbody>
      </Table>
      <AdminAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Users
