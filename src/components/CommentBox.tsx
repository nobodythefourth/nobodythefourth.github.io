// CommentBox.io React integration for blog posts
import React, { useEffect } from "react";

interface CommentBoxProps {
  postId: string | number;
}

const CommentBox: React.FC<CommentBoxProps> = ({ postId }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/commentbox.io/dist/commentBox.min.js";
    script.async = true;
    script.setAttribute("id", "commentbox-script");
    document.body.appendChild(script);

    // @ts-ignore
    script.onload = () => window.commentBox && window.commentBox("YOUR_PROJECT_ID", {
      className: "commentbox",
      defaultBoxId: `blog-post-${postId}`,
    });

    return () => {
      // Remove the script and comment box on unmount
      script.remove();
      const el = document.getElementById(`commentbox-blog-post-${postId}`);
      if (el) el.remove();
    };
  }, [postId]);

  return <div className="commentbox" id={`commentbox-blog-post-${postId}`}></div>;
};

export default CommentBox;
