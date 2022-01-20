import { useContext } from "react"
import { Button } from "react-bootstrap"
import { useState } from "react"
import BankContext from "../utils/BankContext"
import CardDeleteModal from "./CardDeleteModal"
import CardViewModal from "./CardViwModal"

function CardCell(props) {
  const { card } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  return (
    <>
      <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
        <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{card._id}</td>
        <td>{card.cardType}</td>

        <td>
          {card.owner.firstName} {card.owner.lastName}
        </td>
        <td>{card.accountId.accountNumber}</td>
        <td>{card.cardNumber}</td>

        <td>{card.accountId.balance}</td>

        <td>{card.debitBalance}</td>
        <td>
          <Button style={{ margin: "5px" }} variant="outline-info" className="me-2" onClick={() => setViewShow(true)}>
            View
          </Button>
          <Button style={{ margin: "5px" }} variant="outline-danger" onClick={() => setDeleteShow(true)}>
            Delete
          </Button>
        </td>
        <CardViewModal show={viewShow} setShow={setViewShow} card={card} />
        <CardDeleteModal show={deleteShow} setShow={setDeleteShow} cardId={card._id} />
      </tr>
    </>
  )
}

export default CardCell
