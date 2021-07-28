import DateFormatter from 'components/date-formatter'
import CoverImage from 'components/cover-image'
import PostTitle from 'components/post-title'
import GithubLink from 'components/github-link'
import WebLink from 'components/web-link'

export default function PostHeader({ title, coverImage, date, githublink, externalurl }) {
    return (
        <>
        <PostTitle>{title}</PostTitle>
        <div className="hidden md:block md:mb-12">
            <div className="flex flex-row items-center justify-start space-x-10">
                {githublink && <GithubLink githublink={githublink}/>}
                {externalurl && <WebLink externalurl={externalurl}/>}
            </div>
        </div>
        <div className="mb-8 md:mb-16 sm:mx-0">
            <CoverImage title={title} src={coverImage} height={756} width={1240} />
        </div>
        <div className="max-w-2xl mx-auto">
            <div className="block mb-6 md:hidden">
                {githublink && <GithubLink githublink={githublink}/>}
            </div>
            <div className="mb-6 text-lg">
                <DateFormatter dateString={date} />
            </div>
        </div>
        </>
    )
}
