import './App.css'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className='d-flex flex-nowrap' style={{ minHeight: '100vh' }}>
      <Sidebar />
      <div className='flex-grow-1' style={{ maxHeight: '100vh', overflow: 'auto' }}>
        <Outlet />
      </div>
    </div>
  )
}

export default App
