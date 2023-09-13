import Navbar from "./Navbar";

const Header = ({ Logo }) => {
	return (
		<header class='bg-[#B68467] flex justify-between items-center px-24  max-sm:px-5 w-full '>
			<Navbar Logo={Logo} />
		</header>
	);
};

export default Header;
