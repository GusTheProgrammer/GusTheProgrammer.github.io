import { useMDXComponent } from 'next-contentlayer2/hooks';
import { allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';

const components = {
    h1: ({ ...props }) => (
        <h1
            className={'mt-2 text-4xl font-bold tracking-tight text-red-300'}
            {...props}
        />
    ),
    h2: ({ ...props }) => (
        <h2
            className={'mt-10 pb-1 text-3xl font-semibold tracking-tight'}
            {...props}
        />
    ),
    p: ({ ...props }) => <p className='mt-8 text-base leading-7' {...props} />,
};
interface MdxProps {
    code: string;
}
function Mdx({ code }: MdxProps) {
    const Component = useMDXComponent(code);
    return (
        <div>
            <Component components={components} />
        </div>
    );
}



interface PostPageProps {
    params: {
        slug: string;
    };
}
export default function PostPage({ params }: PostPageProps) {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
    if (!post?.body.code) {
        return <div>Post not found</div>;
    }
    return (
        <article className='py-8 mx-auto max-w-xl'>
            <div className='mb-8 text-center'>
                <time dateTime={post.date}>
                    {format(parseISO(post.date), 'LLLL d, yyyy')}
                </time>
                <h1>{post.title}</h1>
            </div>
            <Mdx code={post.body.code} />
        </article>
    );
}