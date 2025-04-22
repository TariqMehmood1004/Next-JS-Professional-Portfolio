"use client";

const TumigoDownloadSteps = () => {
    return (
        <section className="w-full md:px-20 py-42">
            <h1 className="w-full text-4xl md:text-5xl font-bold mb-4">How to download Tumigo?</h1>
            <p className="w-full text-lg mb-4">Follow these steps to download Tumigo:</p>
            <ol className="w-full overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-4">
                <li className="my-card hover:bg-gray-100 border-2 border-gray-100 cursor-pointer col-span-1 p-4 flex flex-col">
                    <h2 className="text-3xl font-bold mb-2">01</h2>
                    <h2 className="text-3xl font-bold mb-2">Goto Github</h2>
                    <p className="text-lg mb-4">Download Tumigo from <a href="https://tariqmehmood1004.github.io/download-tumigo" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline transition-all duration-300">https://tariqmehmood1004.github.io/download-tumigo</a></p>
                </li>
                <li className="my-card hover:bg-gray-100 border-2 border-gray-100 cursor-pointer col-span-1 p-4 flex flex-col">
                    <h2 className="text-3xl font-bold mb-2">02</h2>
                    <h2 className="text-3xl font-bold mb-2">Zip download</h2>
                    <p className="text-lg mb-4">Download Tumigo and extract it.</p>
                </li>
                <li className="my-card hover:bg-gray-100 border-2 border-gray-100 cursor-pointer col-span-1 p-4 flex flex-col">
                    <h2 className="text-3xl font-bold mb-2">03</h2>
                    <h2 className="text-3xl font-bold mb-2">Install Python interpreter</h2>
                    <p className="text-lg mb-4">Install Python interpreter & run Tumigo from <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline transition-all duration-300">https://www.python.org/downloads/</a></p>
                </li>
                <li className="my-card hover:bg-gray-100 border-2 border-gray-100 cursor-pointer col-span-1 p-4 flex flex-col">
                    <h2 className="text-3xl font-bold mb-2">04</h2>
                    <h2 className="text-3xl font-bold mb-2">Tumigo overview</h2>
                    <p className="text-lg mb-4">Welcome to Tumigo, your gateway to a simpler and more powerful coding experience. Tumigo is designed with the philosophy of making coding accessible to all, combining ease of use with robust capabilities.</p>
                </li>

                <li className="my-card hover:bg-gray-100 border-2 border-gray-100 cursor-pointer col-span-1 p-4 flex flex-col">
                    <h2 className="text-3xl font-bold mb-2">05</h2>
                    <h2 className="text-3xl font-bold mb-2"><pre>print</pre>Hello World</h2>
                    <p className="text-lg mb-4"><pre>ptr("Hello Word!")</pre></p>
                </li>
                <li className="my-card hover:bg-gray-100 border-2 border-gray-100 cursor-pointer col-span-1 p-4 flex flex-col">
                    <h2 className="text-3xl font-bold mb-2">06</h2>
                    <h2 className="text-3xl font-bold mb-2">Variables</h2>
                    <p className="text-lg mb-4">
                        <pre>
                            name = "Tariq"<br />
                            ptr(name)
                        </pre>
                    </p>
                </li>
            </ol>
        </section>
    )
}

export default TumigoDownloadSteps