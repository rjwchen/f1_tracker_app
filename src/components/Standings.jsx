export default function Standings({ children }) {
    return (
        <div class="container mx-auto px-4 sm:p-8">
            
            <h2 class="text-2xl font-semibold leading-tight text-gray-100">Driver Standings</h2>
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <table class=" min-w-3xl shadow-md rounded-lg overflow-hidden leading-normal">
                    <thead>
                        <tr>
                            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-800 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                                Rank
                            </th>
                            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-800 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                                Driver
                            </th>
                            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-800 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                                Country
                            </th>
                            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-800 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                                Team
                            </th>
                            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-800 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                                Points
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {children}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
