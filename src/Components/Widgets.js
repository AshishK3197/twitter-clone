import React from "react";
import "./Widgets.css";
import {
	TwitterTimelineEmbed,
	TwitterShareButton,
	TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
function Widgets() {
	return (
		<div className="widgets">
			<div className="widgets__input">
				<SearchIcon className="widgets__searchIcon" />
				<input placeholder="Search Twitter" type="text" />
			</div>

			<div className="widgets__widgetContainer">
				<h2>Whats Happening</h2>
				<TwitterTweetEmbed tweetId={"1346026307105161217"} />
				<TwitterTimelineEmbed
					sourceType="profile"
					screenName="AshishK3197"
					options={{ height: 400 }}
				/>
				<TwitterShareButton
					url={"https://www.instagram.com/ashishk1312/?hl=en"}
					options={{ text: "#reactjs is awesome", via: "ashishkumar" }}
				/>
			</div>
		</div>
	);
}

export default Widgets;
