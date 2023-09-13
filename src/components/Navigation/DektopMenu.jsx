const DektopMenu = ({ Logo, PhoneIcon }) => {
	return (
		<div className='hidden lg:w-full lg:flex lg:justify-between lg:items-center mx-auto  '>
			<a href='/' className='flex items-center gap-x-4'>
				<img src={Logo} alt='Keep It Clean Logo' width={120} height={160} />
			</a>
			<ul className='flex gap-x-8 justify-center '>
				<li>
					{" "}
					<a href='/services' className='text-white font-normal text-xl'>
						Services{" "}
					</a>
				</li>
				<li>
					{" "}
					<a href='/about' className='text-white font-normal text-xl'>
						About
					</a>
				</li>
				<li>
					{" "}
					<a href='/faq' className='text-white font-normal text-xl '>
						FAQs
					</a>
				</li>
				<li>
					<a href='testimonials' className='text-white font-normal text-xl '>
						Testimonials
					</a>
				</li>
				<li>
					<a href='/contact' className='text-white font-normal text-xl '>
						Contact
					</a>
				</li>
			</ul>
			<div className='flex gap-x-8 items-center '>
				<a
					className='cursor-pointer gap-x-1 flex text-white font-normal'
					href='tel:+6146965555'
				>
					{/* <img src={PhoneIcon} height={30} width='24' /> */}
					6146965555
				</a>
				<button className='font-normal text-slate-900 bg-[#DBBBA7] whitespace-nowrap rounded-md px-7 py-2 '>
					Book a Clean
				</button>
			</div>
		</div>
	);
};
export default DektopMenu;
