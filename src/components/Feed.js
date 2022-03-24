import "./Feed.css";
import Share from "../components/Share"
import Post from "../components/Post"

export default function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                <Post />

            </div>
        </div>
    )
}