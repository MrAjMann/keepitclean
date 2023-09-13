import Navbar from "./Navbar";

const Header = ({ Logo }) => {
	return (
		<header className='bg-[#B68467] flex justify-between  items-center  w-full '>
			<Navbar Logo={Logo} />
		</header>
	);
};

export default Header;
