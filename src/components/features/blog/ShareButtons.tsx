import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

interface ShareButtonsProps {
  url: string;
  title: string;
}

export const ShareButtons = ({ url, title }: ShareButtonsProps) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-gray-400 text-sm font-medium">Share:</span>
      
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-500 text-gray-400 hover:text-white transition-colors"
        aria-label="Share on Twitter"
      >
        <FaTwitter size={18} />
      </a>
      
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white transition-colors"
        aria-label="Share on LinkedIn"
      >
        <FaLinkedin size={18} />
      </a>
      
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-700 text-gray-400 hover:text-white transition-colors"
        aria-label="Share on Facebook"
      >
        <FaFacebook size={18} />
      </a>
    </div>
  );
};
