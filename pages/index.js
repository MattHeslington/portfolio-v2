import Container from '../components/container'
import PostList from '../components/post-list'
import Splash from '../components/splash'
import Layout from '../components/layout'
import { getAllPosts } from 'lib/api'
import Head from 'next/head'
import { CMS_NAME } from 'lib/constants'
import { SP } from 'next/dist/next-server/lib/utils'

export default function Index({ allPosts }) {
    const blogPosts = allPosts.slice(0,3)
    const projectPosts = allPosts.slice(3)
    return (
        <>
        <Layout>
            <Head>
                <title>mattt.pw</title>
            </Head>
            <Container>
                <Splash />
                {projectPosts.length > 0 && <PostList posts={projectPosts} title={`Selected Projects`}/>}
                {blogPosts.length > 0 && <PostList posts={projectPosts} title={`Blog Posts`}/>}
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
