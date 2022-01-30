import ReactMarkdown from "react-markdown";
import Image from "next/image";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import PostHeader from "./post-header";
import classes from "./post-content.module.css";

function PostContent(props) {
  const { post } = props;
  const imagePath = `/image/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown
        components={{
          img: (image) => {
            return (
              <Image
                src={`/image/posts/${post.slug}/${image.src}`}
                alt={image.alt}
                width={600}
                height={300}
              />
            );
          },

          // code: ({ language, value }) => {
          //   return (
          //     <SyntaxHighlighter
          //       style={docco}
          //       language={language}
          //       children={value}
          //     />
          //   );
          // },
        }}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
