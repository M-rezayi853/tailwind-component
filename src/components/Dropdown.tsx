import { FC, useState } from 'react'

interface Props {}

const Dropdown: FC<Props> = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  console.log(isOpen)

  return (
    <div className='bg-gray-100 flex flex-col gap-5 justify-center items-center h-screen'>
      <div className='relative z-10'>
        <div
          className={`${
            isOpen && 'bg-gray-300 opacity-70 transition'
          } inset-0 fixed `}
          onClick={() => {
            if (isOpen) setIsOpen(false)
          }}
        ></div>

        <button
          className='px-4 py-2 bg-blue-500 text-white rounded-lg inline-flex items-center focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white z-10 relative'
          onClick={handleClick}
        >
          <span>Show more</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='w-5 h-5 ml-1'
          >
            <path
              fillRule='evenodd'
              d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
              clipRule='evenodd'
            />
          </svg>
        </button>

        {isOpen && (
          <div className='bg-white w-56 mt-2 rounded-lg overflow-hidden border border-gray-200 absolute left-0'>
            <a href='/' className='block text-gray-700 p-2 hover:bg-gray-100'>
              Account
            </a>
            <a href='/' className='block text-gray-700 p-2 hover:bg-gray-100'>
              Support
            </a>
            <a href='/' className='block text-gray-700 p-2 hover:bg-gray-100'>
              Settings
            </a>
          </div>
        )}
      </div>

      <div className='max-w-md'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ipsa
        libero laboriosam harum, quam dicta voluptas blanditiis odio dolores
        numquam hic aspernatur saepe eum. Perspiciatis culpa autem iusto
        molestias nulla? Voluptas, voluptatem odit! Nisi quaerat quos autem
        debitis harum perferendis suscipit laudantium commodi rem veniam.
        Voluptas temporibus maxime veritatis quidem?
      </div>
    </div>
  )
}

export default Dropdown
