import React from "react";
import { FaCalendarAlt, FaArrowRight, FaBookOpen } from "react-icons/fa";
import img1 from "../assets/img.webp"

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  url: string;
  date: string;
  tags: string[];
}

const posts: BlogPost[] = [
  {
    title: "Mastering React Hooks: A Deep Dive",
    excerpt:
      "Explore the power of React Hooks to manage state and side effects in functional components, with practical examples and best practices.",
    image: img1,
    url: "/blog-detail/react-hooks",
    date: "May 10, 2025",
    tags: ["React", "JavaScript", "Frontend"],
  },
  {
    title: "Scaling Node.js Apps with Docker",
    excerpt:
      "Learn how to containerize Node.js applications using Docker for seamless deployment and scalability in production environments.",
    image: img1,
    url: "/blog-detail/node-docker",
    date: "April 25, 2025",
    tags: ["Node.js", "Docker", "DevOps"],
  },
  {
    title: "Why TailwindCSS Changed My Workflow",
    excerpt:
      "Discover how TailwindCSS streamlines frontend development with utility-first styling, boosting productivity and maintainability.",
    image: img1,
    url: "/blog-detail/tailwind-workflow",
    date: "April 15, 2025",
    tags: ["TailwindCSS", "CSS", "Frontend"],
  },
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-dark border-y border-gray-800 relative">
      {/* Pattern background */}
      <div className="absolute inset-0 bg-square opacity-[.05]"></div>

      <div className="max-w-6xl mx-auto lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-code inline-block relative text-white mb-1">
            My <span className="text-green-400">Blog</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-green-500 opacity-70"></div>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Dive into my thoughts on coding, tech trends, and developer life. Explore my latest posts below.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="flex flex-col gap-12">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-gray-950 rounded-lg border border-gray-800 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 flex flex-col md:flex-row"
            >
              {/* Image */}
              <div className="md:w-1/3">
                <a href={post.url}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                  />
                </a>
              </div>

              {/* Content */}
              <div className="p-6 md:w-2/3 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-code text-white mb-2">
                    <a href={post.url} className="hover:text-green-400 transition-colors">
                      {post.title}
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-700/20 text-gray-300 text-sm rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="text-gray-400 text-sm flex items-center gap-2">
                    <FaCalendarAlt />
                    <span>{post.date}</span>
                  </div>
                  <a
                    href={post.url}
                    className="text-green-400 hover:text-green-600 font-medium flex items-center gap-2"
                  >
                    Read More <FaArrowRight />
                  </a>
                </div>
              </div>
            </article>
          ))}

          {/* View All Button */}
          <div className="text-center">
            <a
              href="/blogs"
              className="py-3 px-6 bg-green-500 text-gray-900 font-bold rounded-lg hover:bg-green-600 transition-colors inline-flex items-center gap-2"
            >
              <FaBookOpen /> View All Posts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
