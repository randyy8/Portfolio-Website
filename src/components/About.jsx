import { motion } from "framer-motion";


const activityPhotos = [
  {
    image: "/image/activities/blu.jpeg",
    title: "BLU Company Visit",
  },
  {
    image: "/image/activities/blu2.jpeg",
    title: "BLU Company Visit Team",
  },
  {
    image: "/image/activities/fl.jfif",
    title: "Freshmen Leader Program",
  },
  {
    image: "/image/activities/fl2.jpeg",
    title: "Freshmen Leader Team",
  },
  {
    image: "/image/activities/floq.jfif",
    title: "Floq Connect Workshop",
  },
  {
    image: "/image/activities/fp.jpeg",
    title: "Freshmen Partner Program",
  },
  {
    image: "/image/activities/garena.jfif",
    title: "Garena Company Visit",
  },
];


export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 min-h-screen w-full bg-[#f3f1e8] px-6 py-24 text-[#1c2a22] sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-black/10" />

          <p className="font-[NeueBit] text-xl uppercase tracking-[0.2em] text-[#315c3a]">
            01 About Me
          </p>

          <div className="h-px flex-1 bg-black/10" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-20 text-center"
        >
          <h2 className="font-[Mondwest] text-5xl font-normal leading-tight tracking-tight sm:text-6xl md:text-7xl">
            The person <br />
            <span className="text-[#4f8a57]">behind the interface.</span>
          </h2>
        </motion.div>

        {/* Row 1: Photo + About Text */}
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.35 }}
            className="overflow-hidden rounded-md border border-black/10"
          >
            <motion.img
              src="/image/profile.jpg"
              alt="Randy profile portrait"
              width="700"
              height="900"
              loading="lazy"
              className="h-[460px] w-full object-cover object-center"
              initial={{ scale: 1.12 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true, amount: 0.35 }}
            className="pt-2"
          >
            <h3 className="mb-8 font-[Mondwest] text-4xl font-normal leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Building interfaces <br />
              with clarity and purpose. <br />
            </h3>

            <div className="max-w-2xl space-y-6 font-sans text-base leading-8 text-black/70 sm:text-lg">
              <p>
                Hi! I'm Randy Salim, a Computer Science student interested in building modern web
                interfaces, AI-related products, Web3 and Crypto and digital experiences
                that feel simple, useful, and enjoyable to use.
              </p>

              <p>
                I enjoy combining visual design, frontend development, and thoughtful interaction
                to turn complex ideas into digital experiences that feel clear, accessible, and meaningful.
              </p>
            </div>
          </motion.div>
        </div>

        
      {/* Row 2: Automatic Activity Carousel */}
      <div className="mt-20 border-t border-black/10 pt-10">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 font-[NeueBit] text-xl uppercase tracking-[0.2em] text-black/40">
            Beyond The Code
          </p>

          <h3 className="font-[Mondwest] text-4xl text-[#173f2a] sm:text-5xl">
            Life, Moments & Experiences.
          </h3>
        </motion.div>

        {/* Automatic Photo Slider */}
        <div className="activity-slider mt-10 overflow-hidden">
          <div className="activity-track flex w-max">

            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex shrink-0 gap-4 pr-4"
                aria-hidden={copy === 1}
              >
                {activityPhotos.map((photo) => (
                  <div
                    key={`${copy}-${photo.image}`}
                    className="w-[260px] shrink-0 sm:w-[350px]"
                  >
                    {/* Photo */}
                    <div className="aspect-[4/3] overflow-hidden rounded-md border border-black/10">
                      <img
                        src={photo.image}
                        alt={copy === 0 ? photo.title : ""}
                        loading="lazy"
                        className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                      />
                    </div>

                    {/* Photo Title */}
                    <h4 className="mt-3 text-center font-[NeueBit] text-2xl text-[#173f2a]">
                      {photo.title}
                    </h4>
                  </div>
                ))}
              </div>
            ))}

          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
