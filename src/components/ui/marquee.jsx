export async function Enowise() {
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

  return (
    <main>
      <marquee>
        <div className="flex gap-4 lg:gap-8">
          {posts.length === 0 ? (
            <p>No posts found.</p>
          ) : (
            posts.map(post => (
              <article key={post.id}>
                <a href={post.link}>
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: post.title.rendered,
                    }}
                  />
                </a>
              </article>
            ))
          )}
        </div>
      </marquee>
    </main>
  );
}

export async function Pison() {
  const categoryId = 45;

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

  return (
    <main>
      <marquee>
        <div className="flex gap-4 lg:gap-8">
          {posts.length === 0 ? (
            <p>No posts found.</p>
          ) : (
            posts.map(post => (
              <article key={post.id}>
                <a href={post.link}>
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: post.title.rendered,
                    }}
                  />
                </a>
              </article>
            ))
          )}
        </div>
      </marquee>
    </main>
  );
}

export async function Datera() {
  const categoryId = 46;

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

  return (
    <main>
      <marquee>
        <div className="flex gap-4 lg:gap-8">
          {posts.length === 0 ? (
            <p>No posts found.</p>
          ) : (
            posts.map(post => (
              <article key={post.id}>
                <a href={post.link}>
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: post.title.rendered,
                    }}
                  />
                </a>
              </article>
            ))
          )}
        </div>
      </marquee>
    </main>
  );
}
