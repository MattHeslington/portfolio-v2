
import Github from 'components/icons/Github'

const GithubLink = ({githublink}) => {
    return (
        <div className="flex flex-row items-center justify-start space-x-4">
            <Github width="8" height="8"/>
            <div>
                <a href={githublink} className="font-bold tracking-tight text-back dark:text-white">View on GitHub</a>
            </div>
        </div>
    )
}

export default GithubLink
