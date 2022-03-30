import "./profile.css";
import Topbar from "../../Components/topbar/Topbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";
import Rightbar from "../../Components/rightbar/Rightbar";

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                className="profileCoverImg"
                                src="assets/post/pic3.jpeg"
                                alt=""
                            />
                            <img
                                className="profileUserImg"
                                src="assets/person/1.jpeg"
                                alt=""
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Jennifer Lawrance</h4>
                            <span className="profileInfoDesc">Hello my friends!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    );
}