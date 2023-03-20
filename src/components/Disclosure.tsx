import { FC, useState } from 'react'

interface Props {}

const Disclosure: FC<Props> = (): JSX.Element => {
  const [tabOne, setTabOne] = useState(true)
  const [tabTwo, setTabTwo] = useState(false)

  return (
    <div className='bg-orange-500 flex justify-center items-center h-screen'>
      <div className='max-w-md bg-white p-4 rounded-xl w-full flex flex-col gap-y-4'>
        {/* accordion 1 */}
        <div>
          {/* header */}
          <div
            className='bg-orange-100 text-orange-600 p-2 cursor-pointer rounded-lg flex items-center justify-between transition-all duration-500'
            onClick={() => setTabOne(!tabOne)}
          >
            <span>Whate is your refund policy?</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className={`${
                tabOne ? 'rotate-180' : ''
              } w-5 h-5 transition-all duration-300`}
            >
              <path
                fillRule='evenodd'
                d='M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z'
                clipRule='evenodd'
              />
            </svg>
          </div>

          {/* content */}
          {tabOne && (
            <div className='pt-2 px-4'>
              If you're unhappy with your purchase for any reason, email us
              within 90 days and we'll refund you in full, no questions asked.
            </div>
          )}
        </div>

        {/* accordion 2 */}
        <div>
          {/* header */}
          <div
            className='bg-orange-100 text-orange-600 p-2 cursor-pointer rounded-lg flex items-center justify-between'
            onClick={() => setTabTwo(!tabTwo)}
          >
            <span>Do you offer technical support?</span>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className={`${
                tabTwo ? 'rotate-180' : ''
              } w-5 h-5 transition-all duration-300`}
            >
              <path
                fillRule='evenodd'
                d='M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z'
                clipRule='evenodd'
              />
            </svg>
          </div>

          {/* content */}
          {tabTwo && <div className='pt-2 px-4'>No.</div>}
        </div>
      </div>
    </div>
  )
}

export default Disclosure
