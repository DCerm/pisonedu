//import { get } from "http";

/*interface Post {
  id: number;
  link: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };

}*/

export async function getStaticProps() {
  const categoryId = 2; // News category ID
  const res = await fetch(`https://knowledgebase.pisonets.com/wp-json/wp/v2/posts?categories=${categoryId}&_embed`);
  const posts = await res.json();
    console.log("Fetched posts:", posts);
  return {
    props: { posts },
    revalidate: 60,
  };
}

export default async function News() {
    const posts = await getStaticProps().then(res => res.props.posts);
    return (
        <main>
        <h1>News</h1>
        {posts.length === 0 ? <p>No posts found.</p> : (
            posts.map(post => (
            <article key={post.id}>
                <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            </article>
            ))
        )}
        </main>
    );
}