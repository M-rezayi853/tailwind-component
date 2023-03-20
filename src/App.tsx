import { FC } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Dropdown from './components/Dropdown'
import RadioGroup from './components/RadioGroup'
import Disclosure from './components/Disclosure'
import Tab from './components/Tab'

interface Props {}

const App: FC<Props> = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

      <Routes>
        <Route path='/dropdown' element={<Dropdown />} />
      </Routes>

      <Routes>
        <Route path='/radioGroup' element={<RadioGroup />} />
      </Routes>

      <Routes>
        <Route path='/disclosure' element={<Disclosure />} />
      </Routes>

      <Routes>
        <Route path='/tab' element={<Tab />} />
      </Routes>
    </Router>
  )
}

export default App
