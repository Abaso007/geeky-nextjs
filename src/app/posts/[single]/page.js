import config from "@config/config.json";
import PostSingle from "@layouts/PostSingle";
import { getSinglePage } from "@lib/contentParser";
import { getTaxonomy } from "@lib/taxonomyParser";

const { blog_folder } = config.settings;

export const generateStaticParams = async () => {
  const allSlug = getSinglePage(`src/content/${blog_folder}`);
  return allSlug.map((item) => ({
    single: item.slug,
  }));
};

const Article = async ({ params }) => {
  const { single } = await params;
  const posts = getSinglePage(`src/content/${blog_folder}`);
  const post = posts.find((p) => p.slug == single);

  const relatedPosts = posts.filter((p) =>
    post.frontmatter.categories.some((cate) =>
      p.frontmatter.categories.includes(cate)
    )
  );

  const categories = getTaxonomy(`src/content/${blog_folder}`, "categories");
  const categoriesWithPostsCount = categories.map((category) => {
    const filteredPosts = posts.filter((post) =>
      post.frontmatter.categories.includes(category)
    );
    return {
      name: category,
      posts: filteredPosts.length,
    };
  });

  const { frontmatter, content } = post;

  return (
    <PostSingle
      frontmatter={frontmatter}
      content={content}
      slug={single}
      allCategories={categoriesWithPostsCount}
      relatedPosts={relatedPosts}
      posts={posts}
    />
  );
};

export default Article;
