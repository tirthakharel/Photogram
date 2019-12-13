# CIS557 Project Feedback

### The Best Team

### Graded by: Carin (yezhuan@wharton.upenn.edu) & Dennis (dgann@seas.upenn.edu)

---

| Description                                                                | Points allocated | Points given | Comment                                                                                            |
| -------------------------------------------------------------------------- | ---------------- | ------------ | -------------------------------------------------------------------------------------------------- |
| Feature implementation (level completeness) - refer `project-levels.md`    | 50               | 45.5         | See overall comment below.                                                                         |
|                                                                            |                  |              |
| TESTING                                                                    | (25)             |              |
| Unit tests (e.g. using Jest or Python's unittest) - `= coverage * 15/0.75` | 15               | 15           | Great tests!                                                                                       |
| Functional & integration tests (e.g. using Selenium)                       | 5                | 2.5          | When running locally, 3 failed, 3 passed.                                                          |
| Continuous Integration (CI) - Uses Travis                                  | 5                | 5            |
|                                                                            |                  |              |
| DEPLOYMENT on Heroku                                                       | 5                | 5            |
|                                                                            |                  |              |
| PROJECT MANAGEMENT                                                         | (10)             |              |
| Issues/User story tracking (GitHub Projects)                               | 5                | 5            |
| Branching strategy (use of branching in dev. workflow)                     | 2.5              | 2.5          |
| Use of Pull Requests (PRs)                                                 | 2.5              | 1.5          | No comments/review activity.                                                                       |
|                                                                            |                  |              |
| DOCUMENTATION - Wiki page (list & describe US, explain design decisions)   | 5                | 5            |
|                                                                            |                  |              |
| STYLE (linting: error/warning free)                                        | 5                | 3            | Client: 5 problems (5 errors, 0 warnings). API good. Extensive use of // eslint-disable-next-line. |
|                                                                            |                  |              |
| Total                                                                      | 100              | 90           |

Overal comment:

- FEATURE Implementation: image type/size error on profile page & create post, lack of file validation, really good UI, good swagger docs.
- Great work! Good unit tests. Try and avoid using `// eslint-disable-next-line`. Make sure to actually review PRs. API seemed to be down/broken when we reviewed (but no marks deducted).
