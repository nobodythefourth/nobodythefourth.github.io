// Social sharing buttons for blog posts
import React from "react";

interface ShareButtonsProps {
  postUrl: string;
  postTitle: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ postUrl, postTitle }) => {
  const encodedUrl = encodeURIComponent(postUrl);
  const encodedTitle = encodeURIComponent(postTitle);

  return (
    <div className="flex gap-3 mt-4">
      {/* Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Twitter"
        className="hover:text-blue-400"
      >
        <svg height="24" width="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 5.924c-.793.352-1.645.59-2.538.697a4.48 4.48 0 0 0 1.963-2.48 8.958 8.958 0 0 1-2.828 1.08 4.468 4.468 0 0 0-7.613 4.07A12.683 12.683 0 0 1 3.112 4.88a4.466 4.466 0 0 0 1.382 5.96 4.444 4.444 0 0 1-2.025-.56v.057a4.471 4.471 0 0 0 3.58 4.377 4.47 4.47 0 0 1-2.02.076 4.471 4.471 0 0 0 4.171 3.104A8.963 8.963 0 0 1 2 19.54a12.66 12.66 0 0 0 6.86 2.01c8.23 0 12.74-6.82 12.74-12.74 0-.195-.004-.39-.013-.584A9.14 9.14 0 0 0 24 4.59a8.873 8.873 0 0 1-2.54.7z"/></svg>
      </a>
      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/shareArticle?url=${encodedUrl}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="hover:text-blue-700"
      >
        <svg height="24" width="24" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.85-3.037-1.853 0-2.135 1.445-2.135 2.939v5.667H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.848 3.37-1.848 3.601 0 4.267 2.37 4.267 5.455v6.284zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z"/></svg>
      </a>
      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className="hover:text-blue-600"
      >
        <svg height="24" width="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.676 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.676 0"/></svg>
      </a>
      {/* Reddit */}
      <a
        href={`https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Reddit"
        className="hover:text-orange-500"
      >
        <svg height="24" width="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12zM8.443 17.742c.084-.084.084-.22 0-.304-.084-.084-.22-.084-.304 0-.437.437-1.146.437-1.583 0-.084-.084-.22-.084-.304 0-.084.084-.084.22 0 .304.646.646 1.545.646 2.191 0zm7.001 0c.646.646 1.545.646 2.191 0 .084-.084.084-.22 0-.304-.084-.084-.22-.084-.304 0-.437.437-1.146.437-1.583 0-.084-.084-.22-.084-.304 0-.084.084-.084.22 0 .304zM12 19.5c-1.104 0-2-.896-2-2h4c0 1.104-.896 2-2 2zm7.5-7.5c0 2.485-2.239 4.5-5 4.5-.063 0-.125-.01-.188-.012-.063.002-.125.012-.188.012-2.761 0-5-2.015-5-4.5 0-.085.068-.153.153-.153.085 0 .153.068.153.153 0 2.21 2.015 4 4.5 4s4.5-1.79 4.5-4c0-.085.068-.153.153-.153.085 0 .153.068.153.153zM6.5 11c-.828 0-1.5-.672-1.5-1.5S5.672 8 6.5 8 8 8.672 8 9.5 7.328 11 6.5 11zm11 0c-.828 0-1.5-.672-1.5-1.5S16.672 8 17.5 8 19 8.672 19 9.5 18.328 11 17.5 11zm-5.5-5.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"/></svg>
      </a>
      {/* Copy Link */}
      <button
        onClick={() => {
          navigator.clipboard.writeText(postUrl);
          alert("Link copied!");
        }}
        aria-label="Copy link"
        className="hover:text-green-500"
      >
        <svg height="24" width="24" fill="currentColor" viewBox="0 0 24 24"><path d="M3.9 12c0-1.16.94-2.1 2.1-2.1h7.5v-1.5H6c-2.01 0-3.6 1.59-3.6 3.6s1.59 3.6 3.6 3.6h7.5v-1.5H6c-1.16 0-2.1-.94-2.1-2.1zm4.5.75h7.5v-1.5H8.4v1.5zm9.6-6.75h-7.5v1.5h7.5c2.01 0 3.6 1.59 3.6 3.6s-1.59 3.6-3.6 3.6h-7.5v1.5h7.5c3.04 0 5.5-2.46 5.5-5.5s-2.46-5.5-5.5-5.5z"/></svg>
      </button>
    </div>
  );
};

export default ShareButtons;
