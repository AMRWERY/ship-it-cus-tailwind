export const config = {
  runtime: "edge",
  regions: ["iad1"],
};

export default function handler(request, response) {
  return response.status(200).json({ text: "I am an Edge Function!" });
}
