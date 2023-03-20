import { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {}

const Home: FC<Props> = (): JSX.Element => {
  return (
    <div className='bg-gray-100 flex flex-col justify-center items-center h-screen gap-y-9'>
      <Link
        className='py-2 px-5 bg-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all'
        to={'/dropdown'}
      >
        Dropdown Component
      </Link>
      <Link
        className='py-2 px-5 bg-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all'
        to={'/radioGroup'}
      >
        RadioGroup Component
      </Link>
      <Link
        className='py-2 px-5 bg-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all'
        to={'/disclosure'}
      >
        Disclosure Component
      </Link>
      <Link
        className='py-2 px-5 bg-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all'
        to={'/tab'}
      >
        Tab Component
      </Link>
    </div>
  )
}

export default Home
