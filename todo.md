# HHY Astro - Todo & Updates

## 2025-11-27: Draft/Approval Workflow Implementation

Implemented a complete draft workflow for blog posts that allows writing drafts that don't get published until approved.

### Changes Made:

**New Files Created:**
- `/src/content/drafts/` - Directory for draft posts (separate from published posts)
- `/src/utils/environment.ts` - Environment detection utility (dev vs production)
- `/src/utils/drafts.ts` - Draft filtering and management logic
- `/src/components/DraftBanner.astro` - Amber warning banner for draft post detail pages

**Files Modified:**
- `/src/content/config.ts` - Added `drafts` collection with same schema as posts
- `/src/components/Post.astro` - Added red "DRAFT" badge to post cards
- `/src/components/PostList.astro` - Updated to handle both posts and drafts collections
- `/src/pages/blog.astro` - Fetches and merges drafts in dev mode
- `/src/pages/blog/[slug].astro` - Includes drafts in static paths during development

### How It Works:

**Development Mode (`npm run dev`):**
- Drafts are visible with "DRAFT" badges/banners
- Full preview capability for reviewing before publishing

**Production Build (`npm run build`):**
- Drafts completely excluded from build
- Zero impact on production site

**Publishing Workflow:**
1. Create draft in `/src/content/drafts/my-post.md`
2. Preview locally to review
3. Move file to `/src/content/posts/` when ready to publish
4. Build and deploy

### Technical Details:
- Uses Astro's `import.meta.env.DEV` for environment detection
- Type-safe with TypeScript union types
- Maintains existing sorting by `sortOrder` field
- Works with static site generation model
