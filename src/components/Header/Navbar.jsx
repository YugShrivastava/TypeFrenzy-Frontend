import React from "react";
import { Link, NavLink } from "react-router-dom";
function Navbar({ authStatus }) {
  const navLinks = [
    { url: "/", name: "Home", place: true },
    { url: "/login", name: "Login", place: !authStatus },
    { url: "/signup", name: "Sign up", place: !authStatus },
    { url: "/rooms", name: "Rooms", place: authStatus },
    { url: "/create-room", name: "Create Room", place: authStatus },
    { url: "/leaderboard", name: "Leaderboard", place: true },
  ];

  return (
    <div className="w-full py-10 flex justify-between gap-10 items-center">
      <Link to={'/'} className="cursor-pointer text-5xl font-[rajdhani] font-bold bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
        TypeFrenzy
      </Link>
      <nav className="flex gap-5 text-xl">
        {navLinks.map(
          (link) =>
            link.place && (
              <NavLink to={link.url} key={link.url} className={({isActive}) => (isActive ? 'text-sky-400' : 'hover:text-sky-400')}>
                {link.name}
              </NavLink>
            )
        )}
        {authStatus && <div className="">User Profile</div>}
      </nav>
    </div>
  );
}

export default Navbar;
