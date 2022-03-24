import "./Share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"


export default function Share() {
    return (
        <div className="Share">
            <div className="ShareWrapper">
                <div className="ShareTop">
                    <img className="shareProfileImg" src="/assets/pic1.jpeg" />
                    <input placeholder="what's in your mind ?" className="ShareInput" />
                </div>
                <hr className="ShareHr" />
                <div className="ShareBottom">
                    <div className="ShareOptions">
                        <div className="ShareOption">
                            <PermMedia htmlcolor="tomato" className="ShareIcon" />
                            <span className="ShareOptionText">Photo or Video</span>
                        </div>
                        <div className="ShareOption">
                            <Label htmlcolor="blue" className="ShareIcon" />
                            <span className="ShareOptionText">Tag</span>
                        </div>
                        <div className="ShareOption">
                            <Room htmlcolor="green" className="ShareIcon" />
                            <span className="ShareOptionText">Location</span>
                        </div>
                        <div className="ShareOption">
                            <EmojiEmotions htmlcolor="goldenrod" className="ShareIcon" />
                            <span className="ShareOptionText">Feelings</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}