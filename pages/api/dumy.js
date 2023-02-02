// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  res.status(200).json([
    { name: "bilkis", role: "trainer" },
    { name: "ean", role: "trainer" },
    { name: "rachmad", role: "trainer" },
    { name: "eno", role: "lead trainer" },
  ]);
}
