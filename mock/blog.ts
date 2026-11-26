import type { IBlog } from "~/models";
import claudeTeamContent from "./blogs/claude-team";

export const blogs: IBlog[] = [
    {
        id: 'claude-as-a-team',
        title: 'Claude as a team: how I lead an AI engineering crew',
        tags: ['AI', 'Claude Code', 'Workflow'],
        cover: '/image/blog/claude-as-a-team.webp',
        createdAt: new Date('26 November 2026'),
        content: claudeTeamContent
    }
]
