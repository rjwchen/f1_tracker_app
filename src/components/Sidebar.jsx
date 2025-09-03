import { useState, createContext } from "react"
import { ChevronLast, ChevronFirst } from "lucide-react"
import f1Logo from "../../public/F1.svg"

//slate-800 for ui elements
//slate-950 for backgrounds

export const SidebarContext = createContext()

export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(true)

    return (
        <aside className={`h-screen ${expanded ? "w-64" : "flex"} transition-all shadow-md`}>
            <nav className="h-full flex flex-col bg-slate-800 border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <img
                        src={f1Logo}
                        className={`overflow-hidden transition-all ${
                        expanded ? "w-32" : "w-0"
                        }`}
                        alt="filler"
                    />
                    <button
                        onClick={() => setExpanded(curr => !curr)}
                        className="p-1.5 rounded-lg bg-gray-300 hover:bg-gray-100"
                    >
                        {expanded ? <ChevronFirst /> : <ChevronLast />}
                    </button>
                </div>
                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3">{children}</ul>
                </SidebarContext.Provider>
                <div className="border-t flex p-3">
                    <img
                        src=""
                        alt=""
                        className="w-10 h-10 rounded-md"
                    />
                    <div
                        className={`
                        flex justify-between items-center
                        overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
                    `}
                    >
                        <div className="leading-4 text-stone-50">
                            <h4 className="font-semibold">John Doe</h4>
                            <span className="text-xs">JohnDoe@gmail.com</span>
                        </div>
                    </div>
                </div>
            </nav>
        </aside>
    )
}
