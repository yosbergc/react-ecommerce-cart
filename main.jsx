import reactDOM from 'react-dom/client'
import { App } from './src/components/App'
import './main.css'
const nodeRoot = document.getElementById('app')
const reactRoot = reactDOM.createRoot(nodeRoot)

reactRoot.render(<App/>)