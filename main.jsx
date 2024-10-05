import reactDOM from 'react-dom/client'
import { App } from './App'

const nodeRoot = document.getElementById('app')
const reactRoot = reactDOM.createRoot(nodeRoot)

reactRoot.render(<App/>)