export default function Standings({rank, driver, country, team, points}) {
    return (
        <tr>
            <td class="px-5 py-5 border-b border-slate-800 bg-slate-800 text-sm">
                <p class="text-white whitespace-no-wrap">
                    1
                </p>
            </td>
            <td class="px-5 py-5 border-b border-slate-800 bg-slate-800 text-sm">
                <div class="flex items-center">
                    <div class="flex-shrink-0 w-10 h-10">
                        <img
                            class="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                        />
                    </div>
                    <p class="text-white whitespace-no-wrap ml-3">
                        Molly Sanders
                    </p>
                </div>
            </td>
            <td class="px-5 py-5 border-b border-slate-800 bg-slate-800 text-sm">
                <p class="text-white whitespace-no-wrap">
                    Spain
                </p>
            </td>
            <td class="px-5 py-5 border-b border-slate-800 bg-slate-800 text-sm">
                
            </td>
            <td class="px-5 py-5 border-b border-slate-800 bg-slate-800 text-sm text-right">
                <button
                    type="button"
                    class="inline-block text-gray-500 hover:text-gray-700"
                >
                    <svg
                        class="inline-block h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                    </svg>
                </button>
            </td>
        </tr>
    );
}