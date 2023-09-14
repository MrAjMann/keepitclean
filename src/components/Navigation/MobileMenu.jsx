import { AnimatePresence } from "framer-motion";
import NavMenu from "./NavMenu";

const MobileMenu = ({ isActive, setIsActive, Logo }) => {
	return (
		<>
			<div
				className={`md:hidden bg-[#B68467] fixed w-full flex  z-50 transition-colors ${
					isActive ? "opacity-85" : "opacity-80"
				}`}
			>
				<div className=''>
					<a href='/' className='flex items-center aspect-video '>
						<img
							src={Logo}
							alt='Keep It Clean Logo'
							className='overflow-hidden bg-transparent max-w-[6rem] '
						/>
					</a>

					<div
						onClick={() => {
							setIsActive(!isActive);
						}}
						className={`${"button "} `}
					>
						<div
							id='nav-icon'
							className={` ${"burger"} ${isActive ? "burgerActive" : ""}`}
						></div>
					</div>
				</div>
				<AnimatePresence mode='wait'>{isActive && <NavMenu />}</AnimatePresence>
			</div>
		</>
	);
};

export default MobileMenu;
