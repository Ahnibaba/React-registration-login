import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth";


const Home = () => {
  
  const { auth, logout } = useAuth();
  

 
  
  

  return (
    <section>
            <h1>Home</h1>
            <br />
            <p>You are welcome {auth.user}</p>
            <br />
            <Link to="/editor">Go to the Editor page</Link>
            <br />
            <Link to="/admin">Go to the Admin page</Link>
            <br />
            <Link to="/lounge">Go to the Lounge</Link>
            <br />
            <Link to="/linkpage">Go to the link page</Link>
            <div className="flexGrow">
                <button onClick={logout}>Sign Out</button>
            </div>
        </section>
  )
}

export default Home