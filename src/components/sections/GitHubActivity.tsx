import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchGitHubActivity } from '../../utils/github';
import { fadeInUpVariants, staggerContainerVariants } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface GitHubActivity {
  id: string;
  type: string;
  repo: {
    name: string;
    url: string;
  };
  payload: {
    commits?: Array<{
      message: string;
      sha: string;
    }>;
  };
  created_at: string;
}

const GitHubActivity = () => {
  const [activities, setActivities] = useState<GitHubActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const { ref, controls } = useScrollAnimation();

  useEffect(() => {
    const loadActivities = async () => {
      try {
        const data = await fetchGitHubActivity('yourusername'); // Replace with actual username
        setActivities(data.slice(0, 5)); // Limit to 5 most recent
      } catch (error) {
        console.error('Failed to load GitHub activity:', error);
      } finally {
        setLoading(false);
      }
    };

    loadActivities();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days} days ago`;
    return date.toLocaleDateString();
  };

  const getActivityDescription = (activity: GitHubActivity) => {
    switch (activity.type) {
      case 'PushEvent':
        const commitCount = activity.payload.commits?.length || 0;
        const firstCommit = activity.payload.commits?.[0]?.message || 'No message';
        return `Pushed ${commitCount} commit${commitCount > 1 ? 's' : ''}: ${firstCommit}`;
      case 'CreateEvent':
        return 'Created a new repository';
      case 'ForkEvent':
        return 'Forked a repository';
      case 'WatchEvent':
        return 'Starred a repository';
      case 'IssuesEvent':
        return 'Opened an issue';
      case 'PullRequestEvent':
        return 'Created a pull request';
      default:
        return 'Activity on repository';
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
            Recent <span className="text-green-400">GitHub Activity</span>
          </h2>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-800/50 rounded-lg p-6 animate-pulse">
                <div className="h-4 bg-gray-700 rounded w-3/4 mb-3"></div>
                <div className="h-3 bg-gray-700 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (activities.length === 0) {
    return (
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
            Recent <span className="text-green-400">GitHub Activity</span>
          </h2>
          <p className="text-gray-400 text-center">No recent activity available</p>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      ref={ref}
      initial="initial"
      animate={controls}
      variants={staggerContainerVariants}
      className="py-20 bg-gray-900/30"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.h2 
          className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center"
          variants={fadeInUpVariants}
        >
          Recent <span className="text-green-400">GitHub Activity</span>
        </motion.h2>

        <motion.div className="space-y-4" variants={staggerContainerVariants}>
          {activities.map((activity) => (
            <motion.a
              key={activity.id}
              href={`https://github.com/${activity.repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUpVariants}
              whileHover={{ scale: 1.02, x: 10 }}
              className="block bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {activity.repo.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {getActivityDescription(activity)}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {formatDate(activity.created_at)}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-500 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GitHubActivity;
