import { FaNodeJs } from "react-icons/fa"
import HomePage from "./HomePage"
async function getData() {

  const data = require('data.json');

  return data
}

export default async function page() {

  const data = await getData()

  return (
    <>
      {data ?
        <HomePage data={data} />
        :
        <div className='h-screen w-screen flex flex-col items-center justify-center gap-5 text-violet-600 fixed z-30 bg-[#f4f4f5]/80 dark:bg-[#030014]/80 backdrop-blur-md'>
          <FaNodeJs size={100} className='animate-pulse' />
          <p className='animate-pulse text-xl'>Loading...</p>
        </div>
      }
    </>
  )
}