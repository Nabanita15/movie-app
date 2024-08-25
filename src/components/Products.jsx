import axios from "axios";
import React, { useEffect, useState } from "react";
import { HoverEffect } from "./ui/card-hover-effect";

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const handleData = async () => {
      const response = await axios.get(
        "https://api.tvmaze.com/search/shows?q=all"
      );
      console.log(response.data);
      setData(response.data);
    };
    handleData();
  }, []);

  return (
    <div className="bg-gradient-to-bl from-white to-black">
      <div className="text-5xl pt-4 text-transparent uppercase text-center bg-gradient-to-t from-black to-violet-400 bg-clip-text">shows</div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={data} />
      </div>
    </div>
  );
}

export default Products;

// export function CardHoverEffectDemo() {
//   return (

//   );
// }
// export const projects = [
//   {
//     title: "Stripe",
//     description:
//       "A technology company that builds economic infrastructure for the internet.",
//     link: "https://stripe.com",
//   },
//   {
//     title: "Netflix",
//     description:
//       "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
//     link: "https://netflix.com",
//   },
//   {
//     title: "Google",
//     description:
//       "A multinational technology company that specializes in Internet-related services and products.",
//     link: "https://google.com",
//   },
//   {
//     title: "Meta",
//     description:
//       "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
//     link: "https://meta.com",
//   },
//   {
//     title: "Amazon",
//     description:
//       "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//     link: "https://amazon.com",
//   },
//   {
//     title: "Microsoft",
//     description:
//       "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
//     link: "https://microsoft.com",
//   },
// ];
