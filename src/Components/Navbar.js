import { useContext } from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import BankContext from "../utils/BankContext"

function NavbarItem() {
  const { logout } = useContext(BankContext)
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src="https://directory-cdn.anymailfinder.com/01db1769-4820-4024-9334-3456823c0d74"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <span> My Bank</span>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/my-account">
              Account
            </Link>
            <NavDropdown title="Cast" id="basic-nav-dropdown">
              <Link className="dropdown-item" to="/stats">
                Stats
              </Link>

              <NavDropdown.Divider />
              {/* <Link className="dropdown-item" to="/">
                
              </Link> */}
            </NavDropdown>
          </Nav>
          {localStorage.tokenBank ? (
            <Nav className="ms-auto">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
              <Link className="nav-link" to="/" onClick={logout}>
                Logout
              </Link>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Link className="nav-link" to="/login">
                Login
              </Link>
              <Link className="nav-link" to="/signup">
                Sign Up
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarItem
