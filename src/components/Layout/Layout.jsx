import AppBar from 'components/AppBar'
import { Suspense } from 'react'
// import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
     <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <Toaster /> */}
    </div>
  )
}

export default Layout
