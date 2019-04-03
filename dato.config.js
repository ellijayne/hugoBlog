
module.exports = (dato, root, i18n) => {

    root.createPost("content/post/my-post.md", "toml", {
        frontmatter: {
            title: "First article",
            type: "post",
            categories: ["random"],
            weight: 4,
            date: "2012-04-06",
        },
        content: "Lorem **ipsum dolor sit amet**, consectetur adipiscing elit."
    });


    root.directory("content/post", dir => {
        for (let i = 0; i < 10; i++) {
            dir.createPost(`post-${i}.md`, "toml", {
                frontmatter: {
                    title: `Article ${i}`,
                    type: "post",
                    categories: ["random"],
                    weight: 4,
                    date: "2012-04-06",
                },
                content: "Lorem **ipsum dolor sit amet**, consectetur adipiscing elit."
            });
        }
    

        // ...iterate over the "Blog post" records...
        dato.posts.forEach(post => {

            // ...and create a markdown file for each article!
            dir.createPost(`${post.slug()}.md`, "toml", {
                frontmatter: {
                    title: post.title,
                    type: "post",
                    categories: post.categories.map(cat => cat.slug),
                    date: post.publishedAt,
                },

                content: post.content
            });
        })
    });
}