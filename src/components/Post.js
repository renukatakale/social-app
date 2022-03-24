import "./Post.css";
import { MoreVert } from "@mui/icons-material";
export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="PostProfileImg" src="./assets/rithesh11.jpeg" alt="" />
                        <span className="postuserName">sapana Jadhav</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postcenter"></div>
                <div className="postBottom"></div>

            </div>

        </div>
    );
}