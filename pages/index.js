import Container from '../components/container'
import MoreStories from '../components/more-stories'
import ProjectPosts from '../components/project-posts'
import HeroPost from '../components/hero-post'
import Splash from '../components/splash'
import Layout from '../components/layout'
import { getAllPosts } from 'lib/api'
import Head from 'next/head'
import { CMS_NAME } from 'lib/constants'
import { SP } from 'next/dist/next-server/lib/utils'

export default function Index({ allPosts }) {
    const otherPosts = allPosts[0]
    const projectPosts = allPosts.slice(1)
    return (
        <>
        <Layout>
            <Head>
                <title>mattt.pw</title>
            </Head>
            <Container>
                <Splash />
                {/* {heroPost && (
                    <HeroPost
                    title={heroPost.title}
                    coverImage={heroPost.coverImage}
                    date={heroPost.date}
                    author={heroPost.author}
                    slug={heroPost.slug}
                    excerpt={heroPost.excerpt}
                    />
                )} */}
                {projectPosts.length > 0 && <ProjectPosts posts={projectPosts} />}
            </Container>
        </Layout>
        </>
    )
}

export async function getStaticProps() {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
    ])

    return {
        props: { allPosts },
    }
}
