import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Chat } from "../pages/Chat"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import { PrivateRouter } from "./auth.routes"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/app" element={
            <PrivateRouter>
              <Chat />
            </PrivateRouter>
          } 
        />
        <Route path="*" element={<Navigate to="/app" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;