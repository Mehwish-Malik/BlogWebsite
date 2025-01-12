
import React from 'react';
import Hero from './Components/Hero';
import { client } from "@/sanity/lib/client";

const Homepage = async () => {
  
  const query = `*[_type == "blog"] | order(_updatedAt desc){
    Title,
    Paragraph,
    image,
    "slug":slug.current
  }`;

  // Fetching the data from Sanity
  const dataFetch = await client.fetch(query);

  // console.log(dataFetch); // Check if the data is fetched correctly

  return (
    <div className="homepage-container">
      {/* Rendering the Hero component for each blog */}
      {dataFetch && dataFetch.length > 0 ? (
        dataFetch.map((data: Blog) => (
          <Hero data={data} key={data.slug} />
        ))
      ) : (
        <p>No blog posts available.</p> // Fallback message if no data
      )}
    </div>
  );
}

export default Homepage;
