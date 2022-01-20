import { useContext } from "react"
import { Table } from "react-bootstrap"
import BankContext from "../utils/BankContext"
import CardCell from "../Components/CardCell"

function Cards() {
  const { accounts, cards } = useContext(BankContext)
  return (
    <Table bordered hover style={{ tableLayout: "fixed" }}>
      <thead>
        <tr>
          <th style={{ width: "15%" }}>Card ID</th>
          <th style={{ width: "15%" }}>Card Type</th>
          <th style={{ width: "15%" }}>Owner</th>
          <th style={{ width: "10%" }}>Account Number</th>
          <th style={{ width: "10%" }}>Card Number</th>
          <th style={{ width: "10%" }}>Account Balance</th>
          <th style={{ width: "10%" }}>Debit Balance</th>
        </tr>
      </thead>
      <tbody>{cards?.map(card => <CardCell key={card._id} card={card} />)}</tbody>
    </Table>
  )
}

export default Cards
