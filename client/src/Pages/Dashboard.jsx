import { useContext } from "react"
import { UserContext } from "../context/userContext"
import LoggedNavbar from '../components/Navbar-logged-in'
import { useLocation } from 'react-router-dom';

export function Dashboard() {
    const { user } = useContext(UserContext) // use this line of code above return to access the name of the user logged in 
    const location = useLocation();
    const userName = location.state?.name;

    return (
        <><div>
            <LoggedNavbar />
        </div>\
            <div className="text-center">
                <h1>Dashboard</h1>

                {!!user && (<h2>Welcome {user.name}!</h2>)}

            </div>
            <div>
                <h1> {userName}</h1>
                {/* Other dashboard content */}
            </div>

        </>


    )
}

export default Dashboard
