/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuthStore } from "../../store/useAuthStore"

const LoginContainer = () => {
  const [formData, setFormData] = useState({
    email:"",
    password: ""
  })

  const {login} = useAuthStore()

  const handleSubmit = (e) => {
    // TODO : validation
    e.preventDefault()
    login(formData)
  }
  return (
    <div className="container">
          <form className="space-y-10" onSubmit={handleSubmit}>
            
            <input
              type="mail"
              className="input"
              placeholder="Email..."
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              type="password"
              className="input"
              placeholder="Password..."
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <button type="submit" className="btn bg-green">
              let's go
            </button>
          </form>
          <p className="text-white text-center mt-4">
            Don't have an account yet?
            <Link to={"/signup"}>
              {" "}
              <span className="underline">Sign up</span>
            </Link>{" "}
          </p>
        </div>
  )
}
export default LoginContainer