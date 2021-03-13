import React from "react";
import "./Tweetbox.css";
import { Avatar, Button } from "@material-ui/core";

function Tweetbox() {
	return (
		<div className="tweetbox">
			<form action="">
				<div className="tweetbox__input">
					<Avatar src="https://yt3.ggpht.com/yti/ANoDKi5vKosgmZ6ypE2umitiPIftiZWdAs5nroMP0U6kEg=s88-c-k-c0x00ffffff-no-rj-mo" />
					<input placeholder="What's Happening" type="text" />
				</div>
				<input
					className="tweetbox__imageInput"
					placeholder="Enter image URL"
					type="text"
				/>
				<Button className="tweetbox__tweeetbutton">Tweet</Button>
			</form>
		</div>
	);
}

export default Tweetbox;
