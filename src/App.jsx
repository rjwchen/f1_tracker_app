import Sidebar from './components/Sidebar'
import SideItem from './components/SideItem'
import Standings from './components/Standings'
import StandingsItem from './components/StandingsItem'
import { Home, Flag, Calendar, ShoppingCart } from 'lucide-react'

function App() {

    return (
        <main className='flex bg-slate-950'>
            <Sidebar>
                <SideItem icon={<Home size={20} />} text="Home" />
                <SideItem icon={<Calendar size={20} />} text="Calendar" />
                <SideItem icon={<Flag size={20} />} text="Tracks" />
                <SideItem icon={<ShoppingCart size={20} />} text="Store" />
            </Sidebar>
            <Standings>     
                <StandingsItem />
            </Standings>
            <Standings>     
                <StandingsItem />
            </Standings>
        </main>
    )
}

export default App
