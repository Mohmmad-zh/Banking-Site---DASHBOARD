import { Button, ListGroup, Modal } from "react-bootstrap"

function AccountViewModal(props) {
  const { show, setShow, account } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>Owner Name:</strong> {account.owner.firstName}
            {account.owner.lastName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Account Number:</strong>
            {account.accountNumber}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Balance:</strong> {account.balance}
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

export default AccountViewModal
