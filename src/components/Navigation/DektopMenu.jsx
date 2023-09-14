const DektopMenu = ({ Logo, PhoneIcon }) => {
	return (
		<div className='max-w-7xl hidden md:w-full md:flex md:justify-around md:items-center mx-auto  '>
			<a href='/' className='flex items-center '>
				<img src={Logo} alt='Keep It Clean Logo' width={120} height={160} />
			</a>
			<ul className='flex sm:gap-x-4 gap-x-8 justify-center '>
				<li>
					{" "}
					<a href='/services' className='text-white font-normal text-lg'>
						Services{" "}
					</a>
				</li>
				<li>
					{" "}
					<a href='/about' className='text-white font-normal text-lg'>
						About
					</a>
				</li>
				<li>
					{" "}
					<a href='/faq' className='text-white font-normal text-lg '>
						FAQs
					</a>
				</li>
				<li>
					<a href='testimonials' className='text-white font-normal text-lg '>
						Testimonials
					</a>
				</li>
				<li>
					<a href='/contact' className='text-white font-normal text-lg '>
						Contact
					</a>
				</li>
			</ul>
			<div className='flex gap-x-8 items-center '>
				<a
					className='cursor-pointer gap-x-1 flex text-white font-normal'
					href='tel:+61469655551'
				>
					{/* <img src={PhoneIcon} height={30} width='24' /> */}
					0469655551
				</a>
				<button className='font-normal text-slate-900 bg-[#DBBBA7] whitespace-nowrap rounded-md px-7 py-2 '>
					Book a Clean
				</button>
			</div>
		</div>
	);
};
export default DektopMenu;
