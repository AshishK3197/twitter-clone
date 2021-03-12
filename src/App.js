import "./App.css";
import Feed from "./Components/Feed";
import Sidebar from "./Components/Sidebar";

function App() {
	return (
		<div className="app">
			{/* Sidebar */}
			<Sidebar />
			{/* Feed */}
			<Feed />
			{/* Widget */}
		</div>
	);
}

export default App;
