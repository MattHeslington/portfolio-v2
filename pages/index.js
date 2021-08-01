import Container from 'components/container'
import PostList from 'components/post-list'
import Splash from 'components/splash'
import Layout from 'components/layout'
import { getAllPosts } from 'lib/api'
import Head from 'next/head'

export default function Index({ allPosts }) {
    const projectPosts = allPosts.slice(2)
    const blogPosts = allPosts.slice(0,2)
    return (
        <>
        <Layout>
            <Head>
                <title>mattt.pw</title>
            </Head>
            <Container>
                <Splash />
                {projectPosts.length > 0 && <PostList posts={projectPosts} title={`Selected Projects`}/>}
                {blogPosts.length > 0 && <PostList posts={blogPosts} title={`Blog Posts`}/>}
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
        'tech',
    ])

    return {
        props: { allPosts },
    }
}
