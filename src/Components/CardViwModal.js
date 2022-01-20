import { Button, ListGroup, Modal } from "react-bootstrap"

function CardViewModal(props) {
  const { show, setShow, card } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Card</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>Owner Name:</strong> {card.owner.firstName}
            {card.owner.lastName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Card Number:</strong>
            {card.cardNumber}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Balance:</strong> {card.debitBalance}
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

export default CardViewModal
