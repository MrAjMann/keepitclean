const DektopMenu = ({ Logo, PhoneIcon }) => {
	return (
		<div className='max-w-[120rem] hidden md:w-full md:flex md:justify-around md:items-center mx-auto max-h-[8rem] '>
			<a href='/' className='flex items-center '>
				<img src={Logo} alt='Keep It Clean Logo' className='max-w-[9rem]' />
			</a>
			<ul className='flex sm:gap-x-4 gap-x-8 justify-center 3xl:gap-x-16'>
				<li>
					{" "}
					<a
						href='/services'
						className='text-white font-normal text-lg 2xl:text-2xl'
					>
						Services{" "}
					</a>
				</li>
				<li>
					{" "}
					<a
						href='/about'
						className='text-white font-normal text-lg 2xl:text-2xl'
					>
						About
					</a>
				</li>
				<li>
					{" "}
					<a
						href='/faq'
						className='text-white font-normal text-lg 2xl:text-2xl'
					>
						FAQs
					</a>
				</li>
				<li>
					<a
						href='testimonials'
						className='text-white font-normal text-lg 2xl:text-2xl'
					>
						Testimonials
					</a>
				</li>
				<li>
					<a
						href='/contact'
						className='text-white font-normal text-lg 2xl:text-2xl '
					>
						Contact
					</a>
				</li>
			</ul>
			<div className='flex gap-x-8 items-center '>
				<a
					className='cursor-pointer gap-x-1 flex text-white font-normal 2xl:text-2xl'
					href='tel:+61469655551'
				>
					{/* <img src={PhoneIcon} height={30} width='24' /> */}
					0469655551
				</a>
				<button className='font-normal text-slate-900 bg-[#DBBBA7] whitespace-nowrap rounded-md px-7 py-2 2xl:text-2xl'>
					Book a Clean
				</button>
			</div>
		</div>
	);
};
export default DektopMenu;
