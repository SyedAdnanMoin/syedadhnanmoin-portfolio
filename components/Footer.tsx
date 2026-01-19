import { GENERAL_INFO } from '@/lib/data';
import { GitFork, Star } from 'lucide-react';

interface RepoStats {
    stargazers_count: number;
    forks_count: number;
}

const Footer = async () => {
    const repo = GENERAL_INFO.githubRepo;

    let repoStats: RepoStats | null = null;

    if (repo) {
        try {
            const res = await fetch(`https://api.github.com/repos/${repo}`, {
                next: { revalidate: 60 * 60 }, // 1 hour
            });

            if (res.ok) {
                repoStats = (await res.json()) as RepoStats;
            }
        } catch {
            repoStats = null;
        }
    }

    return (
        <footer className="py-10 border-t border-border">
            <div className="container flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
                <div>
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Syed Adhnan Moin
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Built with Next.js, Tailwind CSS
                    </p>
                </div>

                {repoStats ? (
                    <div className="flex items-center gap-5 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                            <Star size={14} /> {repoStats.stargazers_count}
                        </span>
                        <span className="flex items-center gap-2">
                            <GitFork size={14} /> {repoStats.forks_count}
                        </span>
                    </div>
                ) : null}
            </div>
        </footer>
    );
};

export default Footer;
