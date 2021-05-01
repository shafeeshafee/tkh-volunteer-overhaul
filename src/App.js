import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Faq from "./screens/Faq";
import Home from "./screens/Home";
import Volunteers from "./screens/Volunteers";
import Volunteer from "./screens/Volunteer";
import Footer from "./components/Footer";
import Testimonials from "./screens/Testimonials";

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/faq">
						<Faq />
					</Route>
					<Route exact path="/volunteers">
						<Volunteers />
					</Route>
					<Route exact path="/volunteers/:id">
						<Volunteer />
					</Route>
					<Route exact path="/testimonials">
						<Testimonials />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
