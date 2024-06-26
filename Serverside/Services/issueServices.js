//Services/issueServices.js
import Issue from '../Models/Issue.js';

export const getIssuesByYear = async () => {
    try {
        const issues = await Issue.aggregate([
            {
                $group: {
                    _id: { year: { $year: "$createdAt" }, type: "$type" },
                    count: { $sum: 1 }
                }
            },
            {
                $group: {
                    _id: "$_id.year",
                    data: { 
                        $push: { type: "$_id.type", count: "$count" }
                    }
                }
            }
        ]);

        return issues.map(issue => ({
            year: issue._id,
            ...issue.data.reduce((acc, curr) => {
                acc[curr.type] = curr.count;
                return acc;
            }, { accidents: 0, malfunctions: 0 })
        }));
    } catch (err) {
        throw new Error(`Failed to fetch issue counts by year: ${err.message}`);
    }
};