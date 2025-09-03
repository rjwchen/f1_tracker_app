import { useState } from 'react'
import Sidebar from './components/Sidebar'
import SideItem from './components/SideItem'
import { Home, Flag, Calendar, ShoppingCart } from 'lucide-react'

function App() {

    return (
        <main>
            <Sidebar>
                <SideItem icon={<Home size={20} />} text="Home" />
                <SideItem icon={<Calendar size={20} />} text="Calendar" />
                <SideItem icon={<Flag size={20} />} text="Tracks" />
                <SideItem icon={<ShoppingCart size={20} />} text="Store" />
            </Sidebar>
            
        </main>
    )
}

export default App
