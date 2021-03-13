import React, { useState } from "react";
import "./Tweetbox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "../firebase";

function Tweetbox() {
	const [tweetMessage, setTweetMessage] = useState("");
	const [tweetImage, setTweetImage] = useState("");

	const sendTweet = (e) => {
		e.preventDefault();
		db.collection("posts").add({
			displayName: "Ashish Kumar",
			username: "AshishK3197",
			verified: true,
			text: tweetMessage,
			image: tweetImage,
			avatar:
				"https://yt3.ggpht.com/yti/ANoDKi5vKosgmZ6ypE2umitiPIftiZWdAs5nroMP0U6kEg=s88-c-k-c0x00ffffff-no-rj-mo",
		});
		setTweetMessage("");
		setTweetImage("");
	};
	return (
		<div className="tweetbox">
			<form action="">
				<div className="tweetbox__input">
					<Avatar src="https://yt3.ggpht.com/yti/ANoDKi5vKosgmZ6ypE2umitiPIftiZWdAs5nroMP0U6kEg=s88-c-k-c0x00ffffff-no-rj-mo" />
					<input
						value={tweetMessage}
						placeholder="What's Happening"
						type="text"
						onChange={(e) => setTweetMessage(e.target.value)}
					/>
				</div>
				<input
					className="tweetbox__imageInput"
					value={tweetImage}
					placeholder="Enter image URL"
					type="text"
					onChange={(e) => {
						setTweetImage(e.target.value);
					}}
				/>
				<Button
					onClick={sendTweet}
					type="submit"
					className="tweetbox__tweeetbutton"
				>
					Tweet
				</Button>
			</form>
		</div>
	);
}

export default Tweetbox;
