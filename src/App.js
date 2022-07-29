import { GlobalStyle } from "./global"
import { MainContent} from "./components/MainContext/index"
import { Sidebar } from "./components/Sidebar/index"

function App() {
  return (
    <>  
    <h1>Aklysson Roberto</h1>
    <div id="content">
    <Sidebar />
    <MainContent />
    </div>
    <GlobalStyle />
    </>
  )
}

export default App
