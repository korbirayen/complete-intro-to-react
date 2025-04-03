import Head from "next/head";
import Link from "next/link";

import { getLessons } from "../data/lesson";

import getCourseConfig from "../data/course";

export default function Lessons({ sections }) {
  const courseInfo = getCourseConfig();
  return (
    <>
      <Head>
        <title>{courseInfo.title}</title>
        <meta name="description" content={courseInfo.description}></meta>
        <meta name="keywords" content={courseInfo.keywords.join(",")}></meta>
        <meta property="og:description" content={courseInfo.description}></meta>
        <meta property="og:title" content={`${courseInfo.title}`}></meta>
        <meta property="og:image" content={`/images/social-share-cover.jpg`}></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>

      {/* Hero Section */}
      <div>
        <div className="jumbotron">
          <div className="courseInfo">
            <div className="courseInfo-inner">
              <h1>{courseInfo.title}</h1>
              <h2>Complete React Tutorial</h2>
              <p className="hero-text">Learn React step by step with practical examples</p>
              <div className="author-container">
                <div className="author">
                  <div className="image">
                    <img
                      src={`/images/author.jpg`}
                      alt="author image"
                      className="image"
                    />
                  </div>
                  <div className="info">
                    <div className="name">Instructor: {courseInfo.author.name}</div>
                    <div className="company">{courseInfo.author.company}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="courseIcon">
            <img src={`/images/course-icon.png`} alt="profile icon" />
          </div>
        </div>



        {/* Course Lessons */}
        <div className="main-card" id="lessons">
          <h1 className="lesson-title">Course Lessons</h1>
          <div className="lesson-content">
            <ol className="sections-name">
              {sections.map((section) => (
                <li key={section.slug} id={section.slug}>
                  <div className="lesson-details">
                    <div className="lesson-preface">
                      <i className={`fas fa-${section.icon}`}></i>
                    </div>
                    <div className="lesson-text">
                      <h2 className="lesson-section-title">{section.title}</h2>
                      <ol>
                        {section.lessons.map((lesson) => (
                          <li key={lesson.slug}>
                            <Link href={lesson.fullSlug}>{lesson.title}</Link>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        
        {/* Resources */}
        <div className="main-card" id="resources">
          <h1 className="lesson-title">Additional Resources</h1>
          <div className="lesson-content">
            <div className="resources-container">
              <ul className="resource-list">
                <li>
                  <i className="fas fa-book"></i>
                  <a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer">
                    React Official Documentation
                  </a>
                </li>
                <li>
                  <i className="fas fa-code"></i>
                  <a href="https://github.com/facebook/react" target="_blank" rel="noopener noreferrer">
                    React GitHub Repository
                  </a>
                </li>
                <li>
                  <i className="fas fa-graduation-cap"></i>
                  <a href="https://react.dev/community" target="_blank" rel="noopener noreferrer">
                    React Community Resources
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const sections = await getLessons();
  return {
    props: {
      sections,
    },
  };
}
