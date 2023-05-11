export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between container px-20 mx-auto">
      {/* Introduction */}
      <section className="py-56 flex flex-row">
        {/* Short introduction */}
        <div className="pr-24 my-auto text-left">
          <h1 className="text-3xl font-bold mb-6">Full-Stack <span id="jstext" className="font-extrabold">JavaScript</span> Developer</h1>
          <p className="text-xl">Hi! My name is Warre Bossaert, I am a amateur developer with 3 years of experience with the focus on JavaScript frameworks.</p>
        </div>

        {/* Image */}
        <img src="me.png" alt="me" />
      </section>

      {/* Skillset */}
      <section className="w-full pb-4">
        <a id="about" className="absolute -mt-20"></a>
        <h2 className="text-2xl font-bold mb-8 text-center w-full">With what do I work?</h2>

        <h3 className="text-xl font-bold mb-6 text-left">Most used</h3>
        <div className="flex flex-row justify-between">
          <div className="w-1/6">
            <img src="react.png" alt="" className="w-full" />
            <p className="text-center mt-4">ReactJS</p>
          </div>
          <div className="w-1/6">
            <img src="node.png" alt="" className="w-full" />
            <p className="text-center mt-4">NodeJS</p>
          </div>
          <div className="w-1/6">
            <img src="tailwind.png" alt="" className="w-full" />
            <p className="text-center mt-4">TailwindCSS</p>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-6 mt-16 text-left">Currently learning</h3>
        <div className="flex flex-row justify-evenly">
          <div className="w-1/6">
            <img src="nextjs.svg" alt="" className="w-full" />
            <p className="text-center mt-4">NextJS</p>
          </div>
          <div className="w-1/6">
            <img src="typescript.png" alt="" className="w-full" />
            <p className="text-center mt-4">Typescript</p>
          </div>
        </div>
      </section>

      {/* Personal projects */}
      <section className="w-full">
        <a id="projects" className="absolute -mt-20"></a>
        <h2 className="text-2xl font-bold mb-12 text-center w-full">Personal projects</h2>

        <div className="flex flex-row justify-between">
          <div className="w-1/6">
            <img src="react.png" alt="" className="w-full" />
            <p className="text-center mt-4">RoShop</p>
          </div>
          <div className="w-1/6">
            <img src="react.png" alt="" className="w-full" />
            <p className="text-center mt-4">Speakr</p>
          </div>
          <div className="w-1/6">
            <img src="react.png" alt="" className="w-full" />
            <p className="text-center mt-4">Portfolio</p>
          </div>
        </div>

        <div id="projectsButton" className="bg-[#d6c20a] w-1/4 text-center py-2 px-6 mx-auto mt-6 rounded-xl">
          <a href="projects" className="">
            <p className="">View more</p>
          </a>
        </div>
      </section>
      {/* Contact me */}
    </main>
  )
}
 