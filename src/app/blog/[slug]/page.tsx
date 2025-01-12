import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "next-sanity";
import CommentBox from "@/app/Components/Comments";

export default async function Page({ params: { slug } }: { params: { slug: string } }) {
  // Sanity query to fetch the blog by slug
  const query = `*[_type == "blog" && slug.current == $slug][0]{
    Title,
    Paragraph,
    image,
    block
  }`;

  // Fetch the data
  const data = await client.fetch(query, { slug });

  // Handle case where no data is returned
  if (!data) {
    return (
      <div className="text-center py-24">
        <h1 className="text-3xl font-bold text-red-500">Blog Post Not Found</h1>
        <p className="text-gray-500 mt-4">The blog post you are looking for does not exist.</p>
      </div>
    );
  }

  // Render the page with data
  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
      {/* Blog Title */}
      <h1 className="text-2xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light mb-6 text-center">
        {data.Title}
      </h1>

      {/* Featured Image */}
      <div className="flex justify-center">
        <Image
          src={urlFor(data.image).url()}
          alt={data.Title}
          width={800}
          height={500}
          className="rounded-lg"
        />
      </div>

      {/* Blog Summary */}
      <section>
        <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
          Summary
        </h2>
        <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
          {data.Paragraph}
        </p>
      </section>

      {/* Main Body of Blog */}
      <p className="text-lg leading-normal text-dark/80 dark:text-light/80">
        <PortableText value={data.block} />
        <CommentBox />
      </p>
    </article>
  );
}
