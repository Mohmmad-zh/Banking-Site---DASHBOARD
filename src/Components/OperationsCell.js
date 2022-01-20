import { useState } from "react"
import { Button } from "react-bootstrap"
import OperationsViewModal from "./OperationsViewModal"
import Moment from "react-moment"

function OperationCell(props) {
  const { operation } = props
  const [viewShow, setViewShow] = useState(false)
  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{operation._id}</td>
      <td>{operation.type}</td>
      <td>{operation.amount}</td>
      <td>
        <Moment>{operation.date}</Moment>
      </td>
      <td>
        <Button style={{ margin: "5px" }} variant="outline-info" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button>
      </td>
      <OperationsViewModal show={viewShow} setShow={setViewShow} operation={operation} />
    </tr>
  )
}

export default OperationCell
