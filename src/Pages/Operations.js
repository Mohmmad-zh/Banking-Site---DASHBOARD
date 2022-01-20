import { useContext } from "react"
import { Table } from "react-bootstrap"
import BankContext from "../utils/BankContext"
import OperationsCell from "../Components/OperationsCell"

function Operations() {
  const { operations } = useContext(BankContext)

  return (
    <Table bordered hover style={{ tableLayout: "fixed" }}>
      <thead>
        <tr>
          <th style={{ width: "15%" }}>#</th>
          <th style={{ width: "15%" }}>Type</th>
          <th style={{ width: "15%" }}>Amount</th>
          <th style={{ width: "25%" }}>Date</th>
          <th style={{ width: "10%" }}>Action</th>
        </tr>
      </thead>
      <tbody>
        {operations.map(operation => (
          <OperationsCell key={operation._id} operation={operation} />
        ))}
      </tbody>
    </Table>
  )
}

export default Operations
