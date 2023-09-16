function GetInTouchCard() {
	return (
		<div className=' w-full  pb-16  md:pb-8 lg:absolute lg:-top-20 lg:right-8 lg:-translate-x-1/3 bg-[#B68467]   lg:w-1/4'>
			<div className='relative w-full'>
				<div className='flex flex-start justify-center w-full'>
					<h4 className='text-white p-4 font-medium text-2xl'>Get in Touch</h4>
				</div>
				<form action='' className=' w-full mt-16 max-w-xl m-auto'>
					<ul className=' flex flex-col  px-8 md:mx-0 gap-4  justify-center'>
						<li className='flex flex-col gap-2 '>
							<label htmlFor='name' className='text-white'>
								Name
							</label>
							<input
								type='text'
								name='name'
								id=''
								placeholder='Your name'
								className='bg-transparent border-b-[1px] border-[#DBBBA7] placeholder-[#DBBBA7] outline-none text-white text-medium'
							/>
						</li>
						<li className='flex flex-col gap-2'>
							<label htmlFor='email' className='text-white'>
								Email
							</label>
							<input
								type='email'
								name='email'
								id=''
								placeholder='youremail@email.com'
								className='bg-transparent border-b-[1px] border-[#DBBBA7] placeholder-[#DBBBA7] outline-none text-white text-medium'
							/>
						</li>
						<li className='flex flex-col gap-2'>
							<label htmlFor='phone' className='text-white'>
								Phone
							</label>
							<input
								type='tel'
								name='phone'
								id=''
								placeholder='04555555555'
								className='bg-transparent border-b-[1px] border-[#DBBBA7] placeholder-[#DBBBA7] outline-none text-white text-medium'
							/>
						</li>
						<li className='flex flex-col  '>
							<label htmlFor='name' className='text-white '>
								Message
							</label>
							<textarea
								type='text'
								name='message'
								id=''
								className='bg-transparent border-b-[1px] border-[#DBBBA7]  outline-none text-white text-medium resize-none h-8'
							/>
						</li>
					</ul>
				</form>
			</div>
		</div>
	);
}

export default GetInTouchCard;
