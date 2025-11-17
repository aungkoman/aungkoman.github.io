---
layout: post
title: "Project Board at Software 100"
date: 2025-10-08
categories: tutorials
author: MSD
tags: [tutorial] # TAG names should always be lowercase
---

### Welcome to the Team! A Guide to Our Project Board

Hello and welcome! This guide will walk you through how to use our project board. This board is our team's single source of truth for who is working on what, what needs to be done, and what is already complete. Keeping it updated is crucial for us to stay organized and collaborate effectively.

Our board is a **Kanban board**, which is a visual way to manage workflow. Work items (we call them "cards" or "issues") move from left to right through different stages.

---

### Understanding the Columns (Our Workflow)

Here is a breakdown of each column and what you need to do in each stage:

#### 1. ➡️ Backlog
* **What it is:** This is the master list of all tasks, ideas, features, and chores for the project. Items here haven't been fully planned out or approved for work yet.
* **Your role:** You generally won't be adding items here. Your main interaction is to be aware of what's coming up in the future.

#### 2. ✅ Ready
* **What it is:** These are tasks that have been approved, defined, and are ready to be picked up by a developer. They should have a clear description, acceptance criteria, and a priority level.
* **Your role:** **This is your starting point.** When you are free to start a new task, you will come to this column.
    * Always pick the task with the highest priority. In the image, we see priority labels like `P0` (Priority 0 - Highest) and `P1` (Priority 1 - High). You should pick the `P0` task first.
    * Before you start, make sure you read the issue description completely and understand the requirements. If you have questions, ask your team lead *before* moving the card.

#### 3. 👨‍💻 In Progress
* **What it is:** This column holds the task you are **actively working on right now.**
* **Your role:**
    * As soon as you decide to start a task from the "Ready" column, **you must move its card into "In Progress."** This tells the entire team that the task is being worked on and prevents two people from accidentally grabbing the same task.
    * As a best practice, try to have only **one** item in this column at a time. This helps you focus and deliver quality work.

#### 4. 🧐 In Review
* **What it is:** You've finished writing the code for the task, and it's now ready to be reviewed by a senior developer or a peer. This stage usually means you have submitted a **Pull Request (PR)**.
* **Your role:**
    * Once you've completed your coding and testing, push your branch and create a Pull Request on GitHub.
    * Move the corresponding card from "In Progress" to "In Review."
    * **Crucially, link the Pull Request to the issue/card.** This allows reviewers to easily find your code.
    * Now, you wait for feedback. If your reviewer requests changes, you will make those changes on the same branch/PR. The card stays in "In Review" during this feedback loop.

#### 5. 🎉 Done
* **What it is:** The task is officially complete! Your code has been reviewed, approved, and merged into the main codebase.
* **Your role:** Once your Pull Request is approved and merged, move the card from "In Review" to "Done." Congratulations! Now you can go back to the "Ready" column to pick up your next task.

---

### Suggestions for Improving the Board

The current board is a fantastic, simple starting point. As the project grows, we might face more complex situations. Here are a few suggestions for new columns or processes to handle them.

#### 1. Handling Blocked or Stuck Tasks
Sometimes you'll be "In Progress" but can't continue because you're waiting for something (e.g., an API key from another team, a design clarification, etc.).

* **Suggestion:** Instead of a new column, we could use a **"Blocked" or "Needs Attention" label**.
* **How it would work:** If you're blocked, you add the `Blocked` label to your card in the "In Progress" column and leave a comment on the issue explaining *why* you are blocked. This makes the blockage visible to the project manager and the team without cluttering the board with another column.

#### 2. Handling Rejected Reviews
What happens if a task in "In Review" is rejected or requires a major rework?

* **Suggestion:** The card should be **moved back to "In Progress."**
* **How it would work:** This signals that the task is no longer in a "reviewable" state and that development work has resumed. It's a clear visual cue that the task needs more attention from the developer before it can be reviewed again. A "Rejected" column is usually unnecessary.

#### 3. Adding a Testing / QA Column
Right now, work goes from "In Review" directly to "Done." This assumes that once code is reviewed and merged, the feature is perfect. We might need a dedicated testing step.

* **Suggestion:** Add a new column called **"Ready for QA"** or **"Testing"** between "In Review" and "Done."
* **How it would work:**
    1.  A developer moves the card to "In Review" for a code review.
    2.  Once the PR is approved and merged, instead of moving it to "Done," they move it to **"Ready for QA."**
    3.  A dedicated QA person (or another developer) then tests the feature in a staging environment.
    4.  If it passes, they move it to "Done." If they find a bug, they create a new bug ticket or move the card back to "In Progress" with comments.

#### 4. Managing Bugs
Where do bug reports go?

* **Suggestion:** For now, we can use a **"Bug" label** on the existing board.
* **How it would work:** When a bug is found, a new issue is created in the "Backlog" and is given the `Bug` label and a priority (`P0`, `P1`, etc.). It then follows the same workflow as any other feature. This keeps everything in one place.

#### Proposed New Workflow:
A slightly more robust workflow could look like this:

`Backlog` ➡️ `Ready` ➡️ `In Progress` ➡️ `In Review` ➡️ **`Ready for QA`** ➡️ `Done`

And we would use labels for status nuances:
* **`Bug`**: To identify bug-fix tasks.
* **`Blocked`**: To flag items that are stuck.
* **`Urgent`**: For critical, high-priority fixes.