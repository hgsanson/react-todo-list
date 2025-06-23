import Footer from "../core-components/footer";
import MainContent from "../core-components/main-content";
import Header from "../core-components/header";
import { Outlet } from "react-router";

export default function LayoutMain() {
	return (
		<>
			<Header />
			<MainContent>
				<Outlet />
			</MainContent>
			<Footer />
		</>
	);
}
