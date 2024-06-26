//Controller/issueController.js


import asyncHandler from 'express-async-handler';
import { getIssuesByYear } from '../Services/issueServices.js'; // Correct import

export const getIssuesComparison = asyncHandler(async (req, res) => {
    try {
        const issuesByYear = await getIssuesByYear(); // Call the function to get issues by year
        res.json(issuesByYear); // Send the formatted response
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



    