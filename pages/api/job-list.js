// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  res.status(200).json([
    {
      image: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 50
      )}.jpg`,
      name: "bilkis ismail",
      slug: "bilkis-ismail",
      job: "Web developer",
      location: "Tangerang",
      slills: ["PHP", "Jquery", "Javascript", "Ruby", "C++", "C#"],
    },
    {
      image: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 50
      )}.jpg`,
      name: "Ean",
      slug: "ean",
      job: "Web developer",
      location: "Tangerang",
      slills: ["PHP", "Jquery", "Javascript"],
    },
    {
      image: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 50
      )}.jpg`,
      name: "Rachmad",
      slug: "rachmad",
      job: "Web developer",
      location: "Tangerang",
      slills: ["PHP", "Jquery", "Javascript", "Ruby"],
    },
    {
      image: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 50
      )}.jpg`,
      name: "Alam",
      slug: "Alam",
      job: "Web developer",
      location: "Tangerang",
      slills: ["PHP", "Jquery", "Javascript", "Ruby"],
    },
    {
      image: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 50
      )}.jpg`,
      name: "Eno",
      slug: "eno",
      job: "Web developer",
      location: "Tangerang",
      slills: ["PHP", "Jquery", "Javascript", "Ruby"],
    },
  ]);
}
