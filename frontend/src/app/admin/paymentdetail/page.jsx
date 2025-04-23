import React from 'react'

const page = () => {
    return (
        <>

            <div className=' container mx-auto py-10'>
                <h1 className='font-bold text-4xl text-center py-10 text-blue-800'>ADMIN PANNEL</h1>
                <table className='w-full '>
                    <thead>
                        <tr className='bg-gray-800 text-white font-bold '>
                            <th className='p-3'>ID</th>
                            <th className='p-3'>PAYMENT DATE</th>
                            <th className='p-3'>NAME</th>
                            <th className='p-3'>AMOUNT</th>
                            <th className='p-3'>CURRENCTY</th>
                            <th className='p-3'>ACTION</th>
                            <th className='p-3'>ACTION</th>
                            <th className='p-3'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default page