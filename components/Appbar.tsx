import { BarMenu } from "./BarMenu"
import { Logo } from "./Logo"

export const AppBar=()=>{
    return <div className="px-40 py-5">
        <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-sky-800 via-blue-800 to-fuchsia-800 sticky">
            <Logo/>
            <BarMenu/>
        </div>
        
    </div>
}