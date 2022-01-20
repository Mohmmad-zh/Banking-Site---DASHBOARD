import { useContext } from "react"
import { Table } from "react-bootstrap"
import BankContext from "../utils/BankContext"
import AccountCell from "../Components/AccountCell"

function Accounts() {
  const { accounts } = useContext(BankContext)

  return (
    <Table bordered hover style={{ tableLayout: "fixed" }}>
      <thead>
        <tr>
          <th style={{ width: "15%" }}>Account ID</th>
          <th style={{ width: "15%" }}>Account Type</th>
          <th style={{ width: "15%" }}>Owner</th>
          <th style={{ width: "10%" }}>Account Number</th>
          <th style={{ width: "10%" }}>Active</th>
          <th style={{ width: "10%" }}>Account Balance</th>
          <th style={{ width: "10%" }}>Cards</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map(account => (
          <AccountCell key={account._id} account={account} />
        ))}


      </tbody>
    </Table>
  )
}

export default Accounts
