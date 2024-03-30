import CreateUser from "./components/CreateUser"
import Home from "./components/Home"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Users from "./components/Users"
import Editor from "./components/Editor"



const App=()=>{
    return(
        <div>
           <BrowserRouter>
                <Home></Home>
                <Routes>
                    <Route element={<CreateUser/>} path="/"/>
                    <Route element={<Users/>} path="/users"/>
                    <Route element={<Editor/>} path='/edit/:abc'/>

                </Routes>
           </BrowserRouter>
        </div>
    )
}
export default App