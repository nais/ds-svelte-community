# Visual Test Reporter

Automatically collects visual test diff images and posts them to GitHub PR comments.

## How It Works

1. **During Tests**: Visual tests run with `VISUAL_TESTS=true` and generate diff images in `/tmp/ds-svelte-test-*/*/diff.png` when Svelte and React components render differently.

2. **After Tests**: The reporter script:
   - Scans `/tmp` for all `ds-svelte-test-*` directories
   - Finds all `diff.png` files
   - Converts images to base64
   - Posts a comment to the PR with embedded images

## Local Usage

Run visual tests first, then run the reporter:

```bash
# Run tests with visual comparison
VISUAL_TESTS=true bun test

# Generate report (will just log to console locally)
bun run test:visual-report
```

## CI Usage

The reporter automatically runs in GitHub Actions when:

- Tests fail in a pull request
- Uses the default `GITHUB_TOKEN` (no setup required)
- Posts a single comment with all visual diffs

## Environment Variables

- `GITHUB_TOKEN` - GitHub API token (automatically provided in Actions)
- `PR_NUMBER` - Pull request number (automatically provided in Actions)
- `GITHUB_REPOSITORY` - Repository in format `owner/repo` (automatically provided in Actions)

If any of these are missing, the reporter runs in "local mode" and just prints the markdown to console.

## Example Output

When visual tests fail, the PR gets a comment like:

```markdown
## ⚠️ Visual Test Failures

Found 2 visual differences:

### Test Case 123

[Embedded diff image]
Path: `/tmp/ds-svelte-test-abc/123/diff.png`

### Test Case 456

[Embedded diff image]
Path: `/tmp/ds-svelte-test-abc/456/diff.png`
```

Images are embedded inline using base64 data URIs, so they're immediately visible in the PR without downloading artifacts.
