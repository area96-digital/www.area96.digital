import NavBar from "@/components/NavBar";

const talent = [
  {
    name: "YayJayBae",
    image: "/talent/yayjaybae.png",
    socials: [
      {
        href: "https://www.twitch.tv/yayjaybae",
        icon: "https://cdn.simpleicons.org/twitch",
        title: "Twitch",
      },
      {
        href: "https://www.youtube.com/@yayjaybae",
        icon: "https://cdn.simpleicons.org/youtube",
        title: "YouTube",
      },
      {
        href: "https://twitter.com/yayjaybae",
        icon: "https://cdn.simpleicons.org/x/fff",
        title: "X/Twitter",
      },
      {
        href: "https://yayjaybae.carrd.co",
        icon: "https://cdn.simpleicons.org/carrd",
        title: "Carrd",
      },
    ],
  },
];

// for (let index = 0; index < 5; index++) {
//   talent.push({
//     name: "Open Slot",
//     image: "https://placehold.co/500x500.png",
//     socials: [
//       {
//         href: "#",
//         icon: "https://cdn.simpleicons.org/twitch",
//         title: "Twitch",
//       },
//       {
//         href: "#",
//         icon: "https://cdn.simpleicons.org/youtube",
//         title: "YouTube",
//       },
//       {
//         href: "#",
//         icon: "https://cdn.simpleicons.org/x/fff",
//         title: "X/Twitter",
//       },
//     ],
//   });
// }

export default () => {
  return (
    <>
      <NavBar />
      <main className="space-y-8 text-justify p-8">
        <div className="space-y-4 max-w-prose mx-auto">
          <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500 text-center">
            Talent
          </h1>
          <p>
            Area96 Digital is nothing without our amazing roster of talented
            content creators. We are proud to work with some of the best
            artists, influencers, and creators in the industry.
          </p>
          <p>
            We are always looking for new talent to join our team. If you are
            passionate about open-source management services and want to help us
            shape the future of digital presence, we would love to hear from
            you.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {talent.map((talent) => (
            <div
              key={talent.name}
              className="flex flex-col items-center space-y-4 p-4 bg-black"
            >
              <img src={talent.image} alt={talent.name} />
              <h2 className="text-4xl font-bold">{talent.name}</h2>
              <div className="flex flex-row space-x-4">
                {talent.socials.map((social) => (
                  <a href={social.href} key={social.href}>
                    <img
                      src={`${social.icon}`}
                      className="h-8"
                      title={social.title}
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};
