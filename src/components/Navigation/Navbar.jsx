import { useState } from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DektopMenu";

const NavMenu = ({ Logo }) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<nav class='w-full'>
			<MobileMenu Logo={Logo} isActive={isActive} setIsActive={setIsActive} />
			<DesktopMenu Logo={Logo} />
		</nav>
	);
};

export default NavMenu;
