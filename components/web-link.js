import ExternalLink from 'components/icons/ExternalLink'

const WebLink = ({externalurl}) => {
    return (
        <div className="flex flex-row items-center justify-start space-x-4">
            <ExternalLink width="8" height="8"/>
            <div>
                <a href={externalurl} className="font-bold tracking-tight text-back dark:text-white">View website</a>
            </div>
        </div>
    )
}

export default WebLink
