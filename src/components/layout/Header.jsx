import { useState } from "react";                    // 4.6k (gzipped: 1.9k)
import { HiBars3, HiMoon, HiSun } from "react-icons/hi2"; // 4.4k (gzipped: 1.7k)
import { Link, useLocation } from "react-router-dom"; // 193k (gzipped: 61.2k)
import NavLinks from "./NavLink";
import { NAV_ITEMS, isPathActive } from "../../utills/navigation";
import UserMenu from "./UserMenu";
import useTheme from "../../hooks/useTheme";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme("dark");
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
                <div className="navbar-end flex items-center gap-2">
                 <button
                    onClick={toggleTheme}
                    aria-label="切換主題"
                    className="btn btn-ghost btn-circle border-2 bg-base-300"
                >
                    {theme === "dark" ? (
                    <HiMoon className="w-6 h-6" />
                    ) : (
                    <HiSun className="w-6 h-6" />
                    )}
                    </button>
                    <UserMenu />
                </div>
            </div>
        </header>
    );
}