import React from "react";
import "./Navbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material"

export default function Navbar() {
    return (
        <div className="NavbarContainer">
            <div className="Navbarleft">
                <span className="logo">Talkline</span>
            </div>
            <div className="NavbarCenter">
                <div className="Searchbar">
                    <Search className="Searchicon" />
                    <input placeholder="Search for friend,post or video" className="searchInput" />
                </div>
            </div>
            <div className="NavabrRight">
                <div className="Links">
                    <span className="Link">Homepage</span>
                    <span className="Link">Timeline</span>
                </div>
                <div className="Icons">
                    <div className="IconItem">
                        <Person />
                        <span className="IconBadge">1</span>
                    </div>
                    <div className="IconItem">
                        <Chat />
                        <span className="IconBadge">2</span>
                    </div>
                    <div className="IconItem">
                        <Notifications />
                        <span className="IconBadge">1</span>
                    </div>

                </div>
                <img src="/assets/pic1.jpeg" alt="" className="navbarimg" />
            </div>
        </div>
    );
}