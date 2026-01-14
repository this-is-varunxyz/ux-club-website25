import React from 'react'

export default function UpcomingEvent() {
    return (
        <div className='overflow-x-hidden bg-black lg:space-y-20'>
            <div className='bg-black min-h-fit w-full lg:flex justify-between px-4 py-5 space-y-6 lg:space-y-0 lg:gap-6 lg:px-6'>
                <div className='flex flex-col w-full lg:w-[42%]'>
                    <div className='bg-white lg:h-[581.475px] h-[50vh] w-full mx-auto'>
                        <img
                            src="https://images.unsplash.com/photo-1655240633864-7a133ccbe232?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Upcoming Event"
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div className='text-medium font-bold pt-2 text-slate-100 font-mono flex justify-between w-full mx-auto'>
                        <h1>
                            001 / M_013
                        </h1>

                        <h1>
                            DINING CHAIR
                        </h1>
                    </div>
                </div>
                <div className='flex flex-col w-full lg:w-[55%]'>
                    <div className='bg-white h-[60vh] lg:h-[900px] w-full mx-auto'>
                        <img
                            src="https://images.unsplash.com/photo-1552139118-812eaf0f7dc5?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D"
                            alt="Upcoming Event"
                            className='w-full h-full object-cover'
                        />

                    </div>
                    <div className='text-medium font-bold pt-2 text-slate-100 font-mono flex justify-between w-full mx-auto'>
                        <h1>
                            002 / M_001
                        </h1>

                        <h1>
                            CHAIR
                        </h1>
                    </div>
                </div>
            </div>

            {/* another two divs */}
            <div className='bg-black min-h-fit w-full lg:flex justify-between px-4 py-5 space-y-6 lg:space-y-0 lg:gap-6 lg:px-6'>
                <div className='flex flex-col w-full lg:w-[70%]'>
                    <div className='bg-white lg:h-[599.438px] h-[32vh] w-full mx-auto'>
                        <img
                            src="https://images.unsplash.com/photo-1655240633864-7a133ccbe232?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Upcoming Event"
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div className='text-medium font-bold pt-2 text-slate-100 font-mono flex justify-between w-full mx-auto'>
                        <h1>
                            001 / M_013
                        </h1>

                        <h1>
                            DINING CHAIR
                        </h1>
                    </div>
                </div>
                <div className='flex flex-col w-full lg:w-[28%]'>
                    <div className='bg-white h-[60vh] lg:h-[377.038px] w-full mx-auto'>
                        <img
                            src="https://images.unsplash.com/photo-1552139118-812eaf0f7dc5?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D"
                            alt="Upcoming Event"
                            className='w-full h-full object-cover'
                        />

                    </div>
                    <div className='text-medium font-bold pt-2 text-slate-100 font-mono flex justify-between w-full mx-auto'>
                        <h1>
                            002 / M_001
                        </h1>

                        <h1>
                            CHAIR
                        </h1>
                    </div>
                </div>


            </div>
        </div>
    )
}