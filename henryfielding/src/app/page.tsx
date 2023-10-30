import HeaderText from "../components/HeaderText";
export default function Home() {
  return (
    <div className="flex flex-col w-screen items-start justify-center m-2 gap-4">
        <h1 className="text-gray-400">&lt;h1&gt;</h1>
        <div className="flex">
            <HeaderText firstName="Henry" lastName="Fielding"/>
        </div>
        <h1 className="text-gray-400">&lt;/h1&gt;</h1>

        <h1 className="text-gray-400">&lt;p&gt;</h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text8xl">[aspiring] software developer <span className="font-bold">&&</span> second-year computer science @ <span className="italic">unimelb</span></h1>
        <h1 className="text-gray-400">&lt;/p&gt;</h1>

        <h1 className="text-gray-400">&lt;h2&gt;</h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text7xl">my tech stack == </h2>
        <h1 className="text-gray-400">&lt;/h2&gt;</h1>

        <h1 className="text-gray-400">&lt;ul&gt;</h1>
        <div className="flex flex-wrap gap-2">
            <div><span className="text-gray-400">&lt;li&gt;</span><span className="ext-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text7xl">java</span><span className="text-gray-400">&lt;/li&gt;</span></div>
            <div><span className="text-gray-400">&lt;li&gt;</span><span className="ext-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text7xl">c</span><span className="text-gray-400">&lt;/li&gt;</span></div>
            <div><span className="text-gray-400">&lt;li&gt;</span><span className="ext-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text7xl">python</span><span className="text-gray-400">&lt;/li&gt;</span></div>
            <div><span className="text-gray-400">&lt;li&gt;</span><span className="ext-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text7xl">javascript</span><span className="text-gray-400">&lt;/li&gt;</span></div>
            <div><span className="text-gray-400">&lt;li&gt;</span><span className="ext-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text7xl">react</span><span className="text-gray-400">&lt;/li&gt;</span></div>
            <div><span className="text-gray-400">&lt;li&gt;</span><span className="ext-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text7xl">tailwind</span><span className="text-gray-400">&lt;/li&gt;</span></div>
            <div><span className="text-gray-400">&lt;li&gt;</span><span className="ext-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text7xl">pandas</span><span className="text-gray-400">&lt;/li&gt;</span></div>
            <div><span className="text-gray-400">&lt;li&gt;</span><span className="ext-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text7xl">sql</span><span className="text-gray-400">&lt;/li&gt;</span></div>
        </div>
        <h1 className="text-gray-400">&lt;/ul&gt;</h1>

        <div className="flex flex-wrap items-center">

        <h1 className="text-gray-400">&lt;a&gt;</h1>
        <a href="https://github.com/developmentHF" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text7xl bg-gray-200 rounded-xl shadow-xl p-4 hover:bg-white hover:text-gray-400">github</a>
        <h1 className="text-gray-400">&lt;/a&gt;</h1>
        <h1 className="text-gray-400">&lt;a&gt;</h1>
        <a href="https://www.linkedin.com/in/henryfielding-aus/" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text7xl bg-gray-200 rounded-xl shadow-xl p-4 hover:bg-white hover:text-gray-400">linkedin</a>
        <h1 className="text-gray-400">&lt;/a&gt;</h1>

        </div>
    </div>
  )
}
