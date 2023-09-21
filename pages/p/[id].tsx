import React from "react"
import { GetServerSideProps } from "next"
import ReactMarkdown from "react-markdown"
import Layout from "../../components/Layout"
import { PostProps } from "../../components/Post"

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = {
    id: "1",
    title: "Simple NextJS blog Title",
    content: "Just a sample content from get static prop",
    published: false,
    author: {
      name: "Ankith G",
      email: "ankithg03@gmail.com",
    },
  }
  return {
    props: post,
  }
}

const Post: React.FC<PostProps> = (props) => {
  let title = props.title
  if (!props.published) {
    title = `${title} (Draft)`
  }

  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <p>By {props?.author?.name || "Unknown author"}</p>
        <ReactMarkdown children={props.content} />
      </div>
    </Layout>
  )
}

export default Post
