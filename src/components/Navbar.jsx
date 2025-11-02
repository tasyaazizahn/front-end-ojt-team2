import {Link} from "react-router-dom";
import logo from "../assets/Logo Group.png";
import Button from "../components/Button";

function Navbar() {
    return(
        <div>
            <div className="navbar">
                <img src={logo} alt="Logo Perusahaan" />
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/pelatihan-k3">Pelatihan K3</Link>
                <Link className="nav-link" to="/jadwal-training">Jadwal Training</Link>
                <Button></Button>
            </div>
        </div>
    )
}

export default Navbar;