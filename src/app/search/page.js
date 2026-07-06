"use client";

import SeoMeta from "@layouts/partials/SeoMeta";
import { slugify } from "@lib/utils/textConverter";
import Post from "@partials/Post";
import { useSearchParams } from "next/navigation";
import { useSearchContext } from "src/context/state";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const keyword = slugify(searchParams.get("key") || "");
  const { posts } = useSearchContext();

  const searchResults = posts.filter((product) => {
    if (product.frontmatter.draft) {
      return !product.frontmatter.draft;
    }
    if (slugify(product.frontmatter.title).includes(keyword)) {
      return product;
    } else if (
      product.frontmatter.categories.find((category) =>
        slugify(category).includes(keyword)
      )
    ) {
      return product;
    } else if (slugify(product.content).includes(keyword)) {
      return product;
    }
  });

  return (
    <>
      <SeoMeta
        pathname="/search"
        title={`Search results for ${searchParams.get("key")}`}
      />
      <div className="section">
        <div className="container">
          <h1 className="h2 mb-8 text-center">
            Search results for{" "}
            <span className="text-primary">{searchParams.get("key")}</span>
          </h1>
          {searchResults.length > 0 ? (
            <div className="row">
              {searchResults.map((post, i) => (
                <div key={`key-${i}`} className="col-12 mb-8 sm:col-6">
                  <Post post={post} />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center text-h3 shadow">
              No Search Found
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
