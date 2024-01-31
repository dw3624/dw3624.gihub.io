import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getAllPosts = () => {
	const postsDirectory = path.join(process.cwd(), "posts");
	const filenames = fs.readdirSync(postsDirectory);

	let posts = [];
	filenames.map((filename) => {
		const filePath = path.join(postsDirectory, filename);
		const fileContent = fs.readFileSync(filePath, "utf8");
		if (fileContent) {
			const { data } = matter(fileContent);
			const post = { slug: filename.replace(/\.md$/, ""), frontMatter: data };
			post.frontMatter.published && posts.push(post);
		}
	});

	posts = posts.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	return posts;
};

export const getPost = async (slug) => {
	const postsDirectory = path.join(process.cwd(), "posts");
	const filePath = path.join(postsDirectory, `${slug}.md`);
	const fileContent = fs.readFileSync(filePath, "utf8");
	const { content, data } = matter(fileContent);
	const post = {
		slug: slug.replace(/\.md$/, ""),
		frontMatter: data,
		body: content,
	};

	return post;
};