import Logo from "../../assets/KeepItCleanLogo.svg";
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import { motion } from "framer-motion";
import { menuSlide, slide } from "../Navigation/anim";

const NavMenu = () => {
	const navItems = [
		{
			title: "Services",
			href: "/services",
		},
		{
			title: "About",
			href: "/about",
		},
		{
			title: "FAQs",
			href: "/faqs",
		},
		{
			title: "Testimonials",
			href: "/testimonials",
		},
		{
			title: "Contact",
			href: "/contact",
		},
	];

	return (
		<motion.div
			variants={menuSlide}
			animate='enter'
			exit='exit'
			initial='initial'
			className='fixed w-full right-0 text-white bg-[#B68467]  '
		>
			<div className='p-10 justify-center flex '>
				<div className='flex flex-col text-3xl '>
					<div className='flex flex-col justify-center items-center gap-12 '>
						<motion.div
							variants={slide}
							animate='enter'
							exit='exit'
							initial='initial'
						>
							<a href='/'>
								<img
									src={Logo.src}
									alt='Keep It Clean Logo'
									className='h-[150px]  '
								/>
							</a>
						</motion.div>
						<div className=' flex flex-col justify-center items-center gap-8 -mt-14'>
							{navItems.map((item) => {
								return (
									<motion.div
										variants={slide}
										animate='enter'
										exit='exit'
										initial='initial'
										key={item.title}
									>
										<a href={item.href} className='text-white font-medium '>
											{item.title}
										</a>
									</motion.div>
								);
							})}
						</div>
					</div>
					<motion.div
						variants={slide}
						animate='enter'
						exit='exit'
						initial='initial'
					>
						<div class='flex flex-row justify-center gap-8 my-12 md:mr-6'>
							<a href='https://www.facebook.com/HKLStudio' target='_blank'>
								<img
									src={facebookIcon.src}
									alt='Facebook icon'
									width={30}
									height={30}
								/>
							</a>
							<a href='https://www.facebook.com/HKLStudio' target='_blank'>
								<img
									src={instagramIcon.src}
									alt='Instagram Icon'
									width={30}
									height={30}
								/>
							</a>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};

export default NavMenu;
