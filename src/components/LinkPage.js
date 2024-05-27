import { Link } from "react-router-dom"

const LinkPage = () => {
  return (
    <section>
      <h1>Links</h1>
      
      <h1>Public</h1>
      <Link to="/login">Login</Link>
      <Link to="/Register">Register</Link>

      <h1>Private</h1>
      <Link to="/">Home</Link>
      <Link to="/editor">Editors Page</Link>
      <Link to="/lounge">Lounge Page</Link>
      <Link to="/admin">Admin Page</Link>
    </section>
  )
}

export default LinkPage