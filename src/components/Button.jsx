import {Link} from "react-router-dom";
import "../components/Button.css";
import pendaftaran from "../pages/pendaftaran";

function Button() {
    return(
        <button className="pendaftaran" onClick={pendaftaran}>
            Pendaftaran
        </button>
    )
}

export default Button;