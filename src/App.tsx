import { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"
import Router from "./router"
import PageLoader from "./components/loaders/PageLoader"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <ToastContainer />
    </Suspense>
  )
}

export default App
