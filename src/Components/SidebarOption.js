import React from "react";
import "./SidebarOption.css";

function SidebarOption({ active, text, Icon }) {
	// console.log(active);
	return (
		<div className={`sidebarOption ${active && "sidebarOption--active"}`}>
			<Icon />
			<h2>{text}</h2>
		</div>
	);
}

export default SidebarOption;
