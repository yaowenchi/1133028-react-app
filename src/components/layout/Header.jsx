import { useState } from "react";
import { HiBars3 } from"react-icons/hi2";
import { isPathActive, NAV_ITEMS } from "../../utills/navigation"
import NavLinks from "./NavLink";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isNavItemActiv = (path) => isPathActive(path, location.pathname);
    return (
        <header className="navbar bg-base-100 shadow-lg">
            <div
                className={`navbar-start dropdown dropdown-bottom ${
                    isMenuOpen ?"dropdown-open" : ""
                }`}
            >
                <div
                    className="btn bg-ghost md:hidden"
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    <HiBars3 className ="w-6 h-6" />{" "}
                </div>
                {isMenuOpen &&(
                    <NavLinks
                        items={NAV_ITEMS}
                        isActive={isNavItemActiv}
                        onItemClick={() => setIsMenuOpen(false)}
                        listClassName={
                            "menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box min-w-max md:hidden"
                        }
                    />
                )}
                
                <Link
                    to="/"
                    className="btn bg-ghost text-lg front-bold text-primary hover:text-primary-focus transition-colors duration-200"
                    >
                        🍔早餐吃光
                    </Link>
                <div className="navbar-center hidden md:flex">
                    <NavLinks
                        items={NAV_ITEMS}
                        isActive={isNavItemActiv}
                        listClassName="menu menu-horizontal px-1"/>
                </div>
            </div>
        </header>
    );
}