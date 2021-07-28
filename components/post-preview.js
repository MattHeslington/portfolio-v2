import Avatar from 'components/avatar'
import DateFormatter from 'components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({title, coverImage, date, excerpt, author, slug, tech}) {

    return (
        <div>
            <div className="mb-5">
                <CoverImage
                slug={slug}
                title={title}
                src={coverImage}
                height={339}
                width={556}
                />
            </div>
            <h3 className="mb-3 text-3xl leading-snug">
                <Link as={`/posts/${slug}`} href="/posts/[slug]">
                    <a className="hover:underline">{title}</a>
                </Link>
            </h3>
            <div className="mb-4 text-lg">
                <DateFormatter dateString={date} />
                <p>{tech}</p>
            </div>
            <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
            <Avatar name={author.name} picture={author.picture} />
        </div>
    )
}
