import { useContext } from "react"
import { UserContext } from "../context/userContext"
import LoggedNavbar from '../components/Navbar-logged-in'

export function Dashboard() {
    const { user } = useContext(UserContext) // use this line of code above return to access the name of the user logged in 
    return (
        <><div>
            <LoggedNavbar />
        </div>\
            <div className="text-center">
                <h1>Dashboard</h1>

                {!!user && (<h2>Welcome {user.name}!</h2>)}

            </div></>
    )
}

export default Dashboard
