import config from "@config/config.json";
import SeoMeta from "@layouts/partials/SeoMeta";
import Sidebar from "@layouts/partials/Sidebar";
import { getSinglePage } from "@lib/contentParser";
import { getTaxonomy } from "@lib/taxonomyParser";
import { slugify } from "@lib/utils/textConverter";
import Post from "@partials/Post";

const { blog_folder } = config.settings;

export const generateStaticParams = async () => {
  const allCategories = getTaxonomy(`src/content/${blog_folder}`, "categories");
  return allCategories.map((category) => ({
    category: category,
  }));
};

const Category = async ({ params }) => {
  const { category } = await params;
  const posts = getSinglePage(`src/content/${blog_folder}`);
  const filterPosts = posts.filter((post) =>
    post.frontmatter.categories.find((cat) => slugify(cat).includes(category))
  );
  const categories = getTaxonomy(`src/content/${blog_folder}`, "categories");

  const categoriesWithPostsCount = categories.map((cat) => {
    const filteredPosts = posts.filter((post) =>
      post.frontmatter.categories.map((e) => slugify(e)).includes(cat)
    );
    return {
      name: cat,
      posts: filteredPosts.length,
    };
  });

  return (
    <>
      <SeoMeta pathname={`/categories/${category}`} title={category} />
      <div className="section mt-16">
        <div className="container">
          <h1 className="h2 mb-12">
            Showing posts from
            <span className="section-title ml-1 inline-block capitalize">
              {category.replace("-", " ")}
            </span>
          </h1>
          <div className="row">
            <div className="lg:col-8">
              <div className="row rounded border border-border p-4 px-3 dark:border-darkmode-border lg:p-6">
                {filterPosts.map((post, i) => (
                  <div key={`key-${i}`} className="col-12 mb-8 sm:col-6">
                    <Post post={post} />
                  </div>
                ))}
              </div>
            </div>
            <Sidebar posts={posts} categories={categoriesWithPostsCount} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
