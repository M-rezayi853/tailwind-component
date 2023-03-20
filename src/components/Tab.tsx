import { FC, useState } from 'react'

interface Props {}

const ACCTIVE_CLASS = 'bg-white text-purple-600'

const Tab: FC<Props> = (): JSX.Element => {
  const [tabNo, setTabNo] = useState('one')

  return (
    <div className='bg-purple-500 flex justify-center items-center h-screen'>
      <div className='max-w-md flex flex-col gap-y-2 w-full'>
        {/* tab header */}
        <div className='bg-purple-400 p-1 rounded-xl flex justify-between items-center gap-x-2'>
          <button
            className={`${
              tabNo === 'one' ? ACCTIVE_CLASS : ''
            } w-full p-2 hover:bg-purple-300 rounded-xl flex justify-center font-semibold text-white/90 focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-purple-400 focus:ring-opacity-50 focus:bg-white`}
            onClick={() => setTabNo('one')}
          >
            Trending
          </button>
          <button
            className={`${
              tabNo === 'two' ? ACCTIVE_CLASS : ''
            } w-full p-2 hover:bg-purple-300 rounded-xl flex justify-center font-semibold text-white/90 focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-purple-400 focus:ring-opacity-50 focus:bg-white`}
            onClick={() => setTabNo('two')}
          >
            Popular
          </button>
          <button
            className={`${
              tabNo === 'three' ? ACCTIVE_CLASS : ''
            } w-full p-2 hover:bg-purple-300 rounded-xl flex justify-center font-semibold text-white/90 focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-purple-400 focus:ring-opacity-50 focus:bg-white`}
            onClick={() => setTabNo('three')}
          >
            Recent
          </button>
        </div>
        {/* tab content */}
        <div className='bg-white p-3 rounded-xl'>
          {/* content 1 */}
          {tabNo === 'one' && (
            <div>
              <div className='hover:bg-gray-100 px-2 py-4 rounded-xl'>
                <p className='font-bold text-sm mb-2'>
                  Ask Me Anthing: 10 answers to your questions about coffee.
                </p>
                <div className='text-gray-400 text-xs'>
                  5d ago &bull; 9 comments &bull; 5 shares
                </div>
              </div>

              <div className='hover:bg-gray-100 px-2 py-4 rounded-xl'>
                <p className='font-bold text-sm mb-2'>
                  The worst advice we've ever heard about coffee.
                </p>
                <div className='text-gray-400 text-xs'>
                  4d ago &bull; 1 comments &bull; 2 shares
                </div>
              </div>
            </div>
          )}

          {/* content 2 */}
          {tabNo === 'two' && (
            <div>
              <div className='hover:bg-gray-100 px-2 py-4 rounded-xl'>
                <p className='font-bold text-sm mb-2'>
                  Is tech making coffee better or worse?
                </p>
                <div className='text-gray-400 text-xs'>
                  Jan 7 &bull; 29 comments &bull; 16 shares
                </div>
              </div>

              <div className='hover:bg-gray-100 px-2 py-4 rounded-xl'>
                <p className='font-bold text-sm mb-2'>
                  The most innovative things happening in coffee.
                </p>
                <div className='text-gray-400 text-xs'>
                  Mar 19 &bull; 24 comments &bull; 12 shares
                </div>
              </div>
            </div>
          )}

          {/* content 3 */}
          {tabNo === 'three' && (
            <div>
              <div className='hover:bg-gray-100 px-2 py-4 rounded-xl'>
                <p className='font-bold text-sm mb-2'>
                  Does drinking coffee make you smarter?
                </p>
                <div className='text-gray-400 text-xs'>
                  5h ago &bull; 5 comments &bull; 2 shares
                </div>
              </div>

              <div className='hover:bg-gray-100 px-2 py-4 rounded-xl'>
                <p className='font-bold text-sm mb-2'>
                  So you've bought coffee... now what?
                </p>
                <div className='text-gray-400 text-xs'>
                  2h ago &bull; 3 comments &bull; 2 shares
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Tab
