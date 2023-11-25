import "./Navbar.css";
import { IconMenu2 } from "@tabler/icons-react";

export function Navbar(){
    return (
        <header>
            <img className="logo" src="/img/logo.svg" alt="River ID logo" />
            <IconMenu2 color={"white"} size={"36px"} />
        </header>
    )
}