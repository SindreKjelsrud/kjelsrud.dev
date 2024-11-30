import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'sidski',
    description: 'Recent content on sidski`s blog',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      customData: post.data.customData,
      link: `/blog/${post.slug}/`,
    })),
    source: {
      title: 'sidski',
      url: 'http://kjelsrud.dev/rss.xml',
    },
    enclosure: {
      url: '/public'
    },
  });
}