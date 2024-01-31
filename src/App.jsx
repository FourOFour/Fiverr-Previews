import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Login1 from './components/logins/login-1'

function App() {
  return (
    <div className='w-full'>
      <Sidebar />
      <div className='relative md:ml-64'>
        <Login1 />
      </div>
    </div>
  )
}

export default App
