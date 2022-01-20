import { CssBaseline } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import Sidebar from "./Components/Sidebar"
import BankContext from "./utils/BankContext"
// import Register from "./Pages/Register"
import Login from "./Pages/Login"
// import Cast from "./src/Pages/Accounts"
import Profile from "./Pages/Cards"
import Operations from "./Pages/Operations"
// import Genres from "./src/Pages/Genres"
import User from "./Pages/User"
import Accounts from "./Pages/Account"
import Cards from "./Pages/Cards"

function App() {
  const [cards, setCards] = useState([])
  const [operations, setOperations] = useState([])
  const [accounts, setAccounts] = useState([])
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  const getOperations = async () => {
    const response = await axios.get("http://localhost:5000/api/operations")
    setOperations(response.data)
  }

  const getAccounts = async () => {
    const response = await axios.get("http://localhost:5000/api/accounts")
    setAccounts(response.data)
  }

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/users", {
      headers: {
        Authorization: localStorage.tokenDashboardBank,
      },
    })
    setUsers(response.data)
  }

  const getCards = async () => {
    const response = await axios.get("http://localhost:5000/api/cards", {
      headers: {
        Authorization: localStorage.tokenDashboardBank,
      },
    })
    setCards(response.data)
    console.log(cards)
  }

  useEffect(() => {
    getOperations()
    getAccounts()
    getUsers()
    getCards()
  }, [])

  const deleteUser = async userId => {
    try {
      await axios.delete(`http://localhost:5000/api/auth/users/${userId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardBank,
        },
      })
      toast.success("user deleted")
      getUsers()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deleteAccount = async accId => {
    try {
      await axios.delete(`http://localhost:5000/api/accounts/${accId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardBank,
        },
      })
      toast.success("account deleted")
      getAccounts()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deleteCard = async cardId => {
    try {
      await axios.delete(`http://localhost:5000/api/cards/${cardId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardBank,
        },
      })
      toast.success("card deleted")
      getCards()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const adminBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:5000/api/auth/login", adminBody)
      localStorage.tokenDashboardBank = response.data
      toast.success("login success")
      navigate("/my-account")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const logout = () => {
    localStorage.removeItem("tokenDashboardBank")

    navigate("/")
  }

  const addAdmin = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const adminBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }
      await axios.post(`http://localhost:5000/api/auth/add-admin`, adminBody, {
        headers: {
          Authorization: localStorage.tokenDashboardFilms,
        },
      })
      getUsers()
      toast.success("add admin success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const store = {
    login,
    logout,
    accounts,
    operations,
    users,
    deleteUser,
    deleteAccount,
    deleteCard,
    addAdmin,
    cards,
  }

  return (
    <BankContext.Provider value={store}>
      <ToastContainer />
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/operations" element={<Operations />} />
            <Route path="/users" element={<User />} />
            <Route path="/my-account" element={<Accounts />} />
            <Route path="/cards" element={<Cards />} />
          </Routes>
        </Box>
      </Box>
    </BankContext.Provider>
  )
}

export default App
