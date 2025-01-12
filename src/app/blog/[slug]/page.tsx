import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "next-sanity";
import CommentBox from "@/app/Components/Comments";

export default async function page({ params: { slug } }: { params: { slug: string } }) {
  const query = `*[_type == 'blog' && slug.current == "${slug}"]{
    Title , Paragraph , image , block 
  }[0]`;

  const data = await client.fetch(query, { slug });

  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8 bg-lightGray dark:bg-darkGray rounded-lg shadow-md">
      {/* Blog Title */}
      <h1 className="text-2xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light mb-6 text-center">
        {data.Title}
      </h1>

      {/* Featured Image */}
      <div className="flex justify-center gap-6 mx-auto mb-8">
        <Image
          src={urlFor(data.image).url()}
          alt="blog"
          width={1200}
          height={600}
          className="rounded-lg shadow-xl"
        />
      </div>

      {/* Blog Summary Section */}
      <section className="mt-8 bg-lightBlue dark:bg-darkBlue rounded-lg p-6">
        <h2 className="text-2xl xs:text-3xl font-semibold text-accentDarkPrimary mb-4 text-center">
          Summary
        </h2>
        <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
          {data.Paragraph}
        </p>
      </section>

      {/* Main Body of Blog */}
      <section className="mt-12">
        <h2 className="text-2xl xs:text-3xl font-semibold text-accentDarkPrimary mb-4">
          Read the Full Article
        </h2>
        <p className="text-lg leading-relaxed text-dark/80 dark:text-light/80">
          <PortableText value={data.block} />
        </p>
      </section>

      {/* Comments Section */}
      <section className="mt-12 bg-lightPink dark:bg-darkPink rounded-lg p-6">
        <h3 className="text-xl font-semibold text-accentDarkPrimary mb-4">Leave a Comment</h3>
        <CommentBox />
      </section>
    </article>
  );
}
