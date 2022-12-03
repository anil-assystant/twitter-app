import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('user'));
        setUser(userInfo)
    },[])

    const logout = () => {
        localStorage.clear();
        navigate('/login')
    }

    return (
        <div className="container-fulid bg-light">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div style={{display:'flex', flex:1, flexDirection:'row', justifyContent:'space-between'}}>
                    <div>
                        <a className="navbar-brand" href="/">Hello, {user?.displayName ?? "N/A"}</a>
                    </div>
                    <div>
                        <button  onClick={logout} className="btn my-2 my-sm-0">Logout</button>
                    </div>
                    </div>
                </nav>
            </div>
        </div>

    )
}