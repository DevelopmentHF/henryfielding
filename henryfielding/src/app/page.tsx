import HeaderText from "../components/HeaderText";

export default function Home() {
  return (
    <div className="flex flex-col w-screen items-start justify-center m-2 gap-4">
      <h1 className="text-gray-400">&lt;h1&gt;</h1>
    	<h1 className="text-gray-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"> const char* name = </h1> 
      <div className="flex ">
		<HeaderText firstName='"Henry' lastName='Fielding"'/>
      </div>
      <h1 className="text-gray-400">&lt;/h1&gt;</h1>

      <h1 className="text-gray-400">&lt;p&gt;</h1>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        software developer @ <span className="italic">jocapps</span> <span className="font-bold">&amp;&amp;</span> master of electrical eng @ <span className="italic">unimelb</span>
      </h1>
      <h1 className="text-gray-400">&lt;/p&gt;</h1>

      <h1 className="text-gray-400">&lt;h2&gt;</h1>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">my tech stack == </h2>
      <h1 className="text-gray-400">&lt;/h2&gt;</h1>

      <h1 className="text-gray-400">&lt;ul&gt;</h1>
      <div className="flex flex-wrap gap-2">
        <div>
          <span className="text-gray-400">&lt;li&gt;</span>
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">java</span>
          <span className="text-gray-400">&lt;/li&gt;</span>
        </div>
        <div><span className="text-gray-400">&lt;li&gt;</span><span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">c</span><span className="text-gray-400">&lt;/li&gt;</span></div>
        <div><span className="text-gray-400">&lt;li&gt;</span><span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">python</span><span className="text-gray-400">&lt;/li&gt;</span></div>
        <div><span className="text-gray-400">&lt;li&gt;</span><span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">javascript</span><span className="text-gray-400">&lt;/li&gt;</span></div>
        <div><span className="text-gray-400">&lt;li&gt;</span><span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">react</span><span className="text-gray-400">&lt;/li&gt;</span></div>
        <div><span className="text-gray-400">&lt;li&gt;</span><span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">java</span><span className="text-gray-400">&lt;/li&gt;</span></div>
        <div><span className="text-gray-400">&lt;li&gt;</span><span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">lua</span><span className="text-gray-400">&lt;/li&gt;</span></div>
        <div><span className="text-gray-400">&lt;li&gt;</span><span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">swift</span><span className="text-gray-400">&lt;/li&gt;</span></div>
        <div><span className="text-gray-400">&lt;li&gt;</span><span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">pandas</span><span className="text-gray-400">&lt;/li&gt;</span></div>
        <div><span className="text-gray-400">&lt;li&gt;</span><span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">sql</span><span className="text-gray-400">&lt;/li&gt;</span></div>
      </div>
      <h1 className="text-gray-400">&lt;/ul&gt;</h1>

      <div className="flex flex-wrap items-center">
        <h1 className="text-gray-400">&lt;a&gt;</h1>
        <a href="https://github.com/developmentHF" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gray-200 rounded-xl shadow-xl p-4 hover:bg-white hover:text-gray-400">github</a>
        <h1 className="text-gray-400">&lt;/a&gt;</h1>

        <h1 className="text-gray-400">&lt;a&gt;</h1>
        <a href="https://www.linkedin.com/in/henryfielding-aus/" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gray-200 rounded-xl shadow-xl p-4 hover:bg-white hover:text-gray-400">linkedin</a>
        <h1 className="text-gray-400">&lt;/a&gt;</h1>

        <h1 className="text-gray-400">&lt;a&gt;</h1>
        <a href="https://developmenthf.itch.io/" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gray-200 rounded-xl shadow-xl p-4 hover:bg-white hover:text-gray-400">itch.io</a>
        <h1 className="text-gray-400">&lt;/a&gt;</h1>
      </div>
    </div>
  );
}
