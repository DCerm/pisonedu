export async function News() {
  const categoryId = 2;

  const res = await fetch(
    `https://knowledgebase.pisonets.com/wp-json/wp/v2/posts?categories=${categoryId}&_embed`,
    { next: { revalidate: 60 } }
  );

  // Safely handle bad responses
  let posts = [];
  try {
    posts = await res.json();
    if (!Array.isArray(posts)) posts = [];
  } catch {
    posts = [];
  }
    return posts;  
}