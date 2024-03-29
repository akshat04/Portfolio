import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Home from "./home";
import Login from '../Login';

const Dashboard = () => {

    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => {
            unsubscribe(); // Cleanup function for unsubscribing from the auth state changes
        }
    }, [auth]); // Include 'auth' in the dependency array

    return (
       <div>
           {user ? <Home /> : <Login />}
       </div>
    )
}

export default Dashboard;
