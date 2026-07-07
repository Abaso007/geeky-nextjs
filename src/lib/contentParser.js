import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const getListPage = (filePath) => {
  const pageData = fs.readFileSync(filePath, "utf-8");
  const { content, data: frontmatter } = matter(pageData);
  return {
    frontmatter,
    content,
  };
};

export const getSinglePage = (folder) => {
  const filesPath = fs.readdirSync(folder);
  const sanitizeFiles = filesPath.filter((file) => file.endsWith(".md"));
  const filterSingleFiles = sanitizeFiles.filter((file) =>
    file.match(/^(?!_)/)
  );
  const singlePages = filterSingleFiles.map((filename) => {
    const slug = filename.replace(".md", "");
    const pageData = fs.readFileSync(path.join(folder, filename), "utf-8");
    const { content, data: frontmatter } = matter(pageData);
    const url = frontmatter.url ? frontmatter.url.replace("/", "") : slug;
    return { frontmatter, slug: url, content };
  });

  const publishedPages = singlePages.filter(
    (page) => !page.frontmatter.draft && page.frontmatter.layout !== "404"
  );
  const filterByDate = publishedPages.filter(
    (page) => new Date(page.frontmatter.date || new Date()) <= new Date()
  );

  return filterByDate;
};

export const getRegularPage = async (slug) => {
  const publishedPages = getSinglePage("src/content");
  const pageData = publishedPages.filter((data) => data.slug === slug);

  if (!pageData[0]) {
    return {
      frontmatter: {},
      content: "",
    };
  }

  return {
    frontmatter: pageData[0].frontmatter,
    content: pageData[0].content,
  };
};
