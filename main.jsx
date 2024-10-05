import reactDOM from 'react-dom/client'
import { App } from './src/components/App/App'
import { FilterContextProvider } from './src/context/FilterContext'
import './main.css'

const nodeRoot = document.getElementById('app')
reactDOM.createRoot(nodeRoot).render(<FilterContextProvider>
    <App/>
</FilterContextProvider>)