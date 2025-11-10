interface Post {
  id: number;
  link: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
}

export async function getStaticProps() {
  const categoryId = 5; // News category ID
  const res = await fetch(`https://yourwordpresssite.com/wp-json/wp/v2/posts?categories=${categoryId}&_embed`);
  const posts = await res.json();

  return {
    props: { posts },
    revalidate: 60,
  };
}