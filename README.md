# TeamDesk — DevOps Foundations repair lab

One practical question covering Modules 1 and 2. Three tasks, 30 marks. Submit one PDF as described in your assessment.

This is a small Node.js task-count utility, not a website. No server, database, deployment, npm install, secrets, or paid services are needed. Use Node.js 22, npm, Git, an editor, and a public GitHub fork with Actions access.

## Start with your own fork

Fork this repository into your own account. Enable Actions on the fork if prompted. Clone **your fork**, not the source:

```bash
git clone https://github.com/<your-username>/teamdesk-devops-workflow-repair.git
cd teamdesk-devops-workflow-repair
git checkout -b fix/teamdesk-repair
```

## Task 1: integrate both team policies

Two teammates changed adjacent settings from a common base. Your branch already contains the review policy. Fetch the other teammate's branch explicitly from the instructor repository; do not assume your fork copied all branches:

```bash
git remote add starter https://github.com/kalviumcommunity/teamdesk-devops-workflow-repair.git
git fetch starter team-policy
git merge --no-ff --no-commit starter/team-policy
```

A real Git merge conflict in `config/team.json` is expected. Capture the conflict and `git status` before resolving it. The final JSON must retain `teamName` as `TeamDesk`, enable `reviewRequired`, and enable `runTestsBeforeMerge`. Preserve both teammates' requirements, not only one side. Remove conflict markers, run `npm run check:settings`, stage the resolved file, and complete the merge commit:

```bash
npm run check:settings
git add config/team.json
git commit -m "merge: preserve review and test policies"
git status
git log --oneline --graph -4
```

If `starter` already exists, inspect its URL rather than adding it again. Do not repeat the merge after completing it. Do not reset or force-push history.

## Task 2: repair the task counter

Run `npm test` and capture the failing assertion. `getTaskCount(tasks)` in `src/tasks.js` must return the array length: 0 for empty, 1 for one item, 3 for three items. Fix the function, not the tests. Rerun `npm test` and commit your repair. No external packages are required.

## Task 3: repair CI from runner evidence

Push your branch after completing Tasks 1 and 2:

```bash
git push -u origin fix/teamdesk-repair
```

Open your fork's Actions tab. Forks do not inherit run history; this push contains your new commits and generates your own failed run. The configuration step should pass, but **Run unit tests** calls a nonexistent npm script. Capture that runner error. Compare `.github/workflows/ci.yml` with `package.json`, correct only the test-step command, commit, and push again. Both required steps must pass in a real Actions run.

Do not open a pull request against the instructor repository. No PR submission, approval, or merge is required. Your own fork's successful Actions run is the final workflow evidence.

## Evidence and rules

Capture real output, not README text. Submit one PDF with three sections labelled Task 1–3: (1) resolved settings, passing checker, and completed merge graph; (2) corrected function and all three tests passing; (3) corrected workflow command and actual successful Actions steps. Use one readable screenshot per task, with real source/output side by side where needed. No collage, written explanation, video, ZIP, or PR is required. Include your fork URL and successful run URL as text.

Do not edit acceptance tests, checker, or package scripts; delete validation steps; skip tests; suppress errors; or replace checks with success echoes. Only `config/team.json`, `src/tasks.js`, and the workflow test command need repairs.

If Actions access or GitHub is unavailable, tell your instructor. Infrastructure blockers are not application faults.
