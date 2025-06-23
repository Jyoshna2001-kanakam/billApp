import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')).render(
  <>
  <App></App>
  <Toaster></Toaster>
  </>
)

// npm install react-router-dom
// npm install tailwindcss @tailwindcss/vite
//Tailwind css Intellisence ==extension
// npm install val-pass
// npm install react-hot-toast  ->import toast component
// npm install axios
// use navigate hook