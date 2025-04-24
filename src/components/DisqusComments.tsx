// Disqus React integration for blog posts
import React from "react";
import { DiscussionEmbed } from "disqus-react";

interface DisqusCommentsProps {
  postId: string | number;
  postTitle: string;
  postUrl: string;
}

const DisqusComments: React.FC<DisqusCommentsProps> = ({ postId, postTitle, postUrl }) => {
  const disqusShortname = "YOUR_DISQUS_SHORTNAME"; // TODO: Replace with your Disqus shortname
  const disqusConfig = {
    url: postUrl,
    identifier: String(postId),
    title: postTitle,
  };

  return (
    <div className="mt-12">
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

export default DisqusComments;
