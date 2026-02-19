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

interface CachedData {
  activities: GitHubActivity[];
  timestamp: number;
}

const CACHE_KEY = 'github_activities';
const CACHE_DURATION = 1000 * 60 * 30; // 30 minutes

export const fetchGitHubActivity = async (username: string): Promise<GitHubActivity[]> => {
  try {
    // Check cache first
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { activities, timestamp }: CachedData = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_DURATION) {
        return activities;
      }
    }

    // Fetch from GitHub API
    const response = await fetch(`https://api.github.com/users/${username}/events/public`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub activity');
    }

    const data: GitHubActivity[] = await response.json();
    
    // Cache the result
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      activities: data,
      timestamp: Date.now()
    }));

    return data;
  } catch (error) {
    console.error('Error fetching GitHub activity:', error);
    
    // Return cached data if available, even if expired
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { activities }: CachedData = JSON.parse(cached);
      return activities;
    }

    // Return empty array as fallback
    return [];
  }
};
