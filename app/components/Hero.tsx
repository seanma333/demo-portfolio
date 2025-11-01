import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="py-12 md:py-20">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Profile */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start space-y-6">
            <div className="relative w-48 h-48 rounded-2xl overflow-hidden shadow-lg ring-4 ring-blue-100">
              <Image
                src="/profile/me.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="w-full space-y-4">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-4 border border-slate-200">
                <h3 className="text-sm font-semibold text-slate-600 mb-2">Name</h3>
                <p className="text-lg font-medium text-slate-900">Your Name</p>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-4 border border-slate-200">
                <h3 className="text-sm font-semibold text-slate-600 mb-2">Contact</h3>
                <p className="text-sm text-slate-700">your.email@example.com</p>
              </div>
            </div>
          </div>

          {/* Right Column - About Me */}
          <div className="md:col-span-2">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                  Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Your Name</span>
                </h1>
                <p className="text-xl text-slate-600">Full Stack Developer & UI/UX Enthusiast</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-blue-600 pb-2 inline-block">
                  About Me
                </h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    I'm a passionate software developer with 5 years of experience in building
                    beautiful and functional web applications. I specialize in creating intuitive
                    user experiences that delight users and drive business results.
                  </p>
                  <p>
                    My expertise spans across modern web technologies including React, Next.js,
                    TypeScript, and more. I believe in writing clean, maintainable code and
                    following best practices in software development.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, contributing
                    to open-source projects, or sharing knowledge with the developer community.
                  </p>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="pt-4">
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "UI/UX Design"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200 hover:shadow-md transition-shadow"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
