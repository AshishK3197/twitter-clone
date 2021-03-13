import React from "react";
import "./Feed.css";
import Post from "./Post";
import Tweetbox from "./Tweetbox";

function Feed() {
	return (
		<div className="feed">
			{/* Header */}
			<div className="feed__header">
				<h2>Home</h2>
			</div>

			{/* Tweetbox */}
			<Tweetbox />
			{/* Post */}
			<Post
				displayName="Ashish Kumar"
				username="AshishK3197"
				verified={true}
				text="Yoo Its working"
				avatar="https://yt3.ggpht.com/yti/ANoDKi5vKosgmZ6ypE2umitiPIftiZWdAs5nroMP0U6kEg=s88-c-k-c0x00ffffff-no-rj-mo"
				image="https://media.giphy.com/media/WU6cG51Jq1DNP2gD70/giphy.gif"
			/>
		</div>
	);
}

export default Feed;
