import { useState } from "react";
import { toast } from "react-toastify";
import { toastConfig } from "../utils/toast";
import Counter from "./Counter";

export default function About() {
  const [activeTab, setActiveTab] = useState("mission");
  const [activeTeam, setActiveTeam] = useState(1);
  const [email, setEmail] = useState("");

  const teamMembers = [
    {
      id: 1,
      name: "Muhammad Sheraz",
      role: "Founder & CEO",
      bio: "Former fashion director with 10+ years in sustainable fashion. Passionate about creating ethical supply chains.",
      quote: "We're not just selling clothes; we're crafting a movement.",
      imgUrl:
        "https://res.cloudinary.com/djsj10dmo/image/upload/v1750705799/adminjpg_x164dm.jpg",
    },
    {
      id: 2,
      name: "Maya Rodriguez",
      role: "Creative Director",
      bio: "Award-winning designer focused on minimalist aesthetics. Believes in timeless fashion over trends.",
      quote: "True style is sustainable by design.",
      imgUrl:
        "https://images.pexels.com/photos/14841928/pexels-photo-14841928.jpeg?_gl=1*xzsoph*_ga*MjAwMDQ1NzE2Mi4xNzUxMjEyNzQ4*_ga_8JE65Q40S6*czE3NTEyMTI3NDgkbzEkZzEkdDE3NTEyMTI4NzMkajU3JGwwJGgw",
    },
    {
      id: 3,
      name: "David Chen",
      role: "Head of Operations",
      bio: "Supply chain expert with a passion for ethical manufacturing. Ensures every product meets our standards.",
      quote: "Transparency isn't optional - it's our foundation.",
      imgUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    },
    {
      id: 4,
      name: "Sophie Williams",
      role: "Community Manager",
      bio: "Building our global community of conscious consumers. Believes in the power of collective action.",
      quote: "Every purchase is a vote for the world you want.",
      imgUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    },
  ];

  return (
    <div
      id="about"
      className="min-h-screen bg-transparent  md:bg-gradient-to-b from-gray-50 to-white mt-24"
    >
      {/* Hero Section */}
      <section className="hidden md:block relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Our Story
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Trendora is more than a fashion brand. We're a movement dedicated
              to sustainable style and ethical practices.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
                Shop Collection
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300">
                Our Sustainability
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="hidden md:block py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          </div>

          <div className="flex flex-wrap justify-center mb-8">
            <button
              onClick={() => setActiveTab("mission")}
              className={`px-6 py-3 rounded-t-lg font-medium transition-colors ${
                activeTab === "mission"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Our Mission
            </button>
            <button
              onClick={() => setActiveTab("sustainability")}
              className={`px-6 py-3 rounded-t-lg font-medium transition-colors ${
                activeTab === "sustainability"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Sustainability
            </button>
            <button
              onClick={() => setActiveTab("community")}
              className={`px-6 py-3 rounded-t-lg font-medium transition-colors ${
                activeTab === "community"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Community
            </button>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
            {activeTab === "mission" && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Redefining Fashion Responsibly
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    At Trendora, we believe style shouldn't come at the expense
                    of our planet or people. Founded in 2018, we set out to
                    create a fashion brand that combines cutting-edge design
                    with ethical manufacturing and sustainable materials.
                  </p>
                  <p className="text-lg text-gray-600">
                    Our mission is to transform the fashion industry by proving
                    that beautiful, high-quality clothing can be produced
                    responsibly. We're committed to transparency at every step
                    of our supply chain, from sourcing organic cotton to
                    ensuring fair wages for our artisans.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-200 rounded-xl w-full h-64">
                    <img
                      src="https://images.unsplash.com/photo-1739169585918-84f6fba6c6f7?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="something"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="bg-gray-200 rounded-xl w-full h-80 mt-8">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1675253290701-a7b7b2c6c9f6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="something"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "sustainability" && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-200 rounded-xl w-full h-64">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1680836316227-ef17dbbcfb27?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="something"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div className="bg-gray-200 rounded-xl w-full h-80 mt-8">
                      <img
                        src="https://images.unsplash.com/photo-1455134925191-2f1a9db13902?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Our Sustainability Promise
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                        <svg
                          className="w-6 h-6 text-indigo-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">
                          Ethical Sourcing
                        </h4>
                        <p className="text-gray-600">
                          All materials come from certified sustainable sources
                          with fair labor practices.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                        <svg
                          className="w-6 h-6 text-indigo-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">
                          Circular Design
                        </h4>
                        <p className="text-gray-600">
                          Products designed for longevity with recycling
                          programs at end-of-life.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                        <svg
                          className="w-6 h-6 text-indigo-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">
                          Carbon Neutral
                        </h4>
                        <p className="text-gray-600">
                          We offset 200% of our carbon emissions through
                          reforestation projects.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "community" && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Building Conscious Community
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    We're more than a brand - we're a community of conscious
                    consumers making a difference. Through our initiatives,
                    we've connected over 50,000 like-minded individuals who
                    share our passion for sustainable living.
                  </p>
                  <div className="bg-indigo-50 rounded-xl p-6 border-l-4 border-indigo-500">
                    <p className="text-gray-800 italic">
                      "Trendora helped me transition my entire wardrobe to
                      sustainable pieces without compromising on style. I'm
                      proud to support a brand that aligns with my values."
                    </p>
                    <p className="mt-4 text-gray-600">
                      - Sarah K., Trendora Community Member since 2020
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-200 rounded-xl w-full h-64">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1664476946415-19cdad721c53?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="something"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="bg-gray-200 rounded-xl w-full h-64">
                    <img
                      src="https://images.unsplash.com/photo-1599842057874-37393e9342df?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="bg-gray-200 rounded-xl w-full h-64">
                    <img
                      src="https://img.freepik.com/premium-photo/woman-stands-front-clock-tower_1096804-533.jpg?w=1380"
                      alt="something"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="bg-gray-200 rounded-xl w-full h-64">
                    <img
                      src="https://images.unsplash.com/photo-1606406054219-619c4c2e2100?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="something"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-transparent md:bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate individuals dedicated to changing fashion for the
              better
            </p>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer hover:shadow-xl ${
                  activeTeam === member.id ? "ring-2 ring-indigo-500" : ""
                }`}
                onClick={() => setActiveTeam(member.id)}
              >
                <div className="overflow-hidden w-full h-64">
                  <img src={member.imgUrl} alt={member.name} className="" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 mb-2">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          {activeTeam && (
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <img
                  src={teamMembers.find((m) => m.id === activeTeam).imgUrl}
                  className="object-cover rounded-full w-16 h-16 mr-4"
                  alt=""
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {teamMembers.find((m) => m.id === activeTeam).name}
                  </h3>
                  <p className="text-indigo-600">
                    {teamMembers.find((m) => m.id === activeTeam).role}
                  </p>
                </div>
              </div>
              <blockquote className="text-2xl italic text-gray-800 border-l-4 border-indigo-500 pl-6 py-2 mb-6">
                "{teamMembers.find((m) => m.id === activeTeam).quote}"
              </blockquote>
              <p className="text-gray-600">
                {teamMembers.find((m) => m.id === activeTeam).bio} Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-400 to-gray-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <Counter end={2025} duration={500} />
              <div className="text-xl">Year Founded</div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-center text-center ">
                <Counter end={250} duration={2000} />
                <span className="text-5xl font-bold  mb-2">K+</span>
              </div>
              <div className="text-xl">Happy Customers</div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-center text-center ">
                <Counter end={100} duration={2000} />
                <span className="text-5xl font-bold  mb-2">%</span>
              </div>
              <div className="text-xl">Sustainable Materials</div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-center text-center ">
                <Counter end={15} duration={2000} />
                <span className="text-5xl font-bold  mb-2">+</span>
              </div>
              <div className="text-xl">Countries Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hidden md:block py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl">
            <div className="md:flex">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                alt="something"
                className="w-full md:w-2/5 min-h-64"
              />
              <div className="md:w-3/5 p-12">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Join Our Sustainable Fashion Movement
                </h3>
                <p className="text-gray-300 mb-8">
                  Become part of a community that values style, sustainability,
                  and social responsibility. Sign up for our newsletter to
                  receive exclusive offers and sustainability tips.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="border-white border-l flex-1 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 text-white "
                  />
                  <button
                    className="bg-indigo-600 text-white px-6 py-3 rounded-r-lg font-medium hover:bg-indigo-700 transition-colors"
                    onClick={() => {
                      if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
                        toast.error(
                          "Please enter a valid email address",
                          toastConfig("error-email")
                        );
                      } else {
                        toast.success(
                          "Subscribed successfully",
                          toastConfig("success-subscribe")
                        );
                      }
                    }}
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
