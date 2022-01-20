import { Button, ListGroup, Modal } from "react-bootstrap"

function OperationsViewModal(props) {
  const { show, setShow, operation } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Operation Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
        <ListGroup.Item>
            <strong>ID:</strong> {operation._id}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Type:</strong> {operation.type}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Amount:</strong> {operation.amount}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Sender ID:</strong> {operation.sender}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Recipient ID:</strong> {operation.recipient}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Sender Account ID:</strong> {operation.sourceAccountId}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Recipient Account ID:</strong> {operation.destAccountId}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Date:</strong> {operation.date}
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default OperationsViewModal
