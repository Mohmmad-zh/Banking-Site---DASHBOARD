import { Button } from "react-bootstrap"
import { useState } from "react"
import AccountDeleteModal from "./AccountDeleteModal"
import AccountViewModal from "./AccountViewModal"

function AccountCell(props) {
  const { account } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{account._id}</td>
      <td>{account.accountType}</td>
      <td>
        {account.owner.firstName} {account.owner.lastName}
      </td>
      <td>{account.accountNumber}</td>
      <td>{account.isActive.toString()}</td>
      <td>{account.balance}</td>
      <td>{account.cards.length /* map(card => card._id */}</td>
      <td>
        {" "}
        <Button style={{ margin: "5px" }} variant="outline-info" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button>
        <Button style={{ margin: "5px" }} variant="outline-danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>
      <AccountViewModal show={viewShow} setShow={setViewShow} account={account} />
      <AccountDeleteModal show={deleteShow} setShow={setDeleteShow} accId={account._id} />
    </tr>
  )
}

export default AccountCell
