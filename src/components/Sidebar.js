import React from 'react'
import "./Sidebar.css";
import { RssFeed, Chat, Bookmark, Group, Event, School, PlayCircleFilledOutlined } from "@mui/icons-material"

export default function sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <ul className='sidebarlist'>
                    <li className='sidebarListItem'>
                        <RssFeed className='sidebarIcon' />
                        <span classname='sidebarListItemText'>Feed</span>
                    </li>
                    <li className='sidebarListItem'>
                        <Chat className='sidebarIcon' />
                        <span classname='sidebarListItemText'>Chat</span>
                    </li>
                    <li className='sidebarListItem'>
                        <PlayCircleFilledOutlined className='sidebarIcon' />
                        <span classname='sidebarListItemText'>Videos</span>
                    </li>
                    <li className='sidebarListItem'>
                        <Group className='sidebarIcon' />
                        <span classname='sidebarListItemText'>Groups</span>
                    </li>
                    <li className='sidebarListItem'>
                        <Bookmark className='sidebarIcon' />
                        <span classname='sidebarListItemText'>Bookmarks</span>
                    </li>

                    <li className='sidebarListItem'>
                        <School className='sidebarIcon' />
                        <span classname='sidebarListItemText'>Courses</span>
                    </li>
                    <li className='sidebarListItem'>
                        <Event className='sidebarIcon' />
                        <span classname='sidebarListItemText'>Event</span>
                    </li>
                </ul>
                <button className='sidebarbutton'>Show More</button>
                <hr className='sidebarHr' />
                <ul className='sidebarFriendList'>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src='/assets/riteish_deshmukh.jpg' alt='' />
                        <span className='sidebarFriendName'>Riteish Deshmukh</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src='/assets/Rohit-Sharma.jpg' alt='' />
                        <span className='sidebarFriendName'>Rohit sharma</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src='/assets/gene.jpg' alt='' />
                        <span className='sidebarFriendName'>Genelia</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src='/assets/gene.jpg' alt='' />
                        <span className='sidebarFriendName'>Genelia</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src='/assets/gene.jpg' alt='' />
                        <span className='sidebarFriendName'>Genelia</span>
                    </li>
                </ul>

            </div>

        </div>
    )
}