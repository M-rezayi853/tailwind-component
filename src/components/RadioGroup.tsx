import { FC, useState } from 'react'

interface Props {}

const ACTIVE_BOX_CLASS = 'ring-4 ring-blue-300 bg-blue-400 text-white'

const RadioGroup: FC<Props> = (): JSX.Element => {
  const [radio, setRadio] = useState('one')

  const handleClick = (value: string) => {
    setRadio(value)
  }

  return (
    <div className='bg-blue-600 flex flex-col justify-center items-center h-screen gap-y-4'>
      <div className='flex flex-col gap-y-4 max-w-md w-full'>
        <div
          className={`p-4 rounded-xl flex items-center justify-between cursor-pointer transition ${
            radio === 'one'
              ? 'ring-4 ring-blue-300 bg-blue-400 text-white'
              : 'bg-white'
          }`}
          onClick={() => handleClick('one')}
        >
          <div>
            <p className='font-bold text-lg mb-2'>Startup</p>
            <span>12GB/6 CPUs · 160 GB SSD disk</span>
          </div>

          {radio === 'one' && (
            <div className='w-8 h-8 rounded-full bg-white flex items-center justify-center text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                className='w-5 h-5 fill-blue-400 transition'
              >
                <path
                  fillRule='evenodd'
                  d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          )}
        </div>

        <div
          className={`p-4 rounded-xl flex items-center justify-between cursor-pointer transition ${
            radio === 'two' ? ACTIVE_BOX_CLASS : 'bg-white'
          }`}
          onClick={() => handleClick('two')}
        >
          <div>
            <p className='font-bold text-lg mb-2'>Business</p>
            <span>16GB/8 CPUs · 512 GB SSD disk</span>
          </div>

          {radio === 'two' && (
            <div className='w-8 h-8 rounded-full bg-white flex items-center justify-center text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                className='w-5 h-5 fill-blue-400 transition'
              >
                <path
                  fillRule='evenodd'
                  d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          )}
        </div>

        <div
          className={`p-4 rounded-xl flex items-center justify-between cursor-pointer transition ${
            radio === 'three' ? ACTIVE_BOX_CLASS : 'bg-white'
          }`}
          onClick={() => handleClick('three')}
        >
          <div>
            <p className='font-bold text-lg mb-2'>Enterprise</p>
            <span>32GB/12 CPUs · 1024 GB SSD disk</span>
          </div>

          {radio === 'three' && (
            <div className='w-8 h-8 rounded-full bg-white flex items-center justify-center text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                className='w-5 h-5 fill-blue-400 transition'
              >
                <path
                  fillRule='evenodd'
                  d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default RadioGroup
