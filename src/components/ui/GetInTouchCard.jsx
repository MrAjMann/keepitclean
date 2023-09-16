function GetInTouchCard() {
	return (
		<div className='relative w-full mb-16 md:mb-0 lg:absolute lg:-top-20 lg:right-8 lg:-translate-x-1/3 bg-[#B68467]  lg:h-4/6 lg:w-1/4 '>
			<div className='relative w-full'>
				<div className='flex flex-start md:justify-center w-full'>
					<h4 className='text-white p-4 font-medium text-2xl'>Get in Touch</h4>
				</div>
				<form action='' className=' my-12 md:w-72  md:m-auto w-full'>
					<ul className='flex flex-col space-y-8 mx-8 md:mx-0'>
						<li className='flex flex-col gap-2'>
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
						<li className='flex flex-col space-y-2'>
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
						<li className='flex flex-col space-y-2'>
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
						<li className='flex flex-col space-y-2 pb-8'>
							<label htmlFor='name' className='text-white '>
								Message
							</label>
							<textarea
								type='text'
								name='message'
								id=''
								className='bg-transparent border-b-[1px] border-[#DBBBA7]  outline-none text-white text-medium resize-none'
							/>
						</li>
					</ul>
				</form>
			</div>
		</div>
	);
}

export default GetInTouchCard;
