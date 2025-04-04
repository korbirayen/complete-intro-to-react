import { useContext, useEffect } from "react";
import Head from "next/head";
import { getLesson, getLessons } from "../../../data/lesson";
import getCourseConfig from "../../../data/course";
import { Context } from "../../../context/headerContext";

export default function LessonSlug({ post }) {
  const courseInfo = getCourseConfig();
  const [_, setHeader] = useContext(Context);
  useEffect(() => {
    setHeader({
      section: post.section,
      title: post.title,
      icon: post.icon,
    });
    return () => setHeader({});
  }, []);

  const title = post.title
    ? `${post.title} – ${courseInfo.title}`
    : courseInfo.title;
  const description = post.attributes.description
    ? post.attributes.description
    : courseInfo.description;

  const keywords = post.attributes.keywords
    ? post.attributes.keywords
    : courseInfo.keywords;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta name="keywords" content={keywords.join(",")}></meta>
        <meta name="og:description" content={description}></meta>
        <meta name="og:title" content={title}></meta>
        <meta name="og:image" content={`/images/social-share-cover.jpg`}></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <div className="lesson-container">
        <div className="lesson">
          <div
            className="lesson-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <div className="lesson-links">
            {post.prevSlug ? (
              <a href={post.prevSlug} className="prev">
                ← Previous
              </a>
            ) : null}
            {post.nextSlug ? (
              <a href={post.nextSlug} className="next">
                Next →
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = await getLesson(params.section, params.slug);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const sections = await getLessons();
  const lessons = sections.map((section) => section.lessons);
  const slugs = lessons.flat().map((lesson) => lesson.fullSlug);

  return { paths: slugs, fallback: false };
}
