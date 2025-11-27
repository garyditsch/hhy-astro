import { isDevelopment } from './environment';
import type { CollectionEntry } from 'astro:content';

export function shouldShowDrafts(): boolean {
    return isDevelopment();
}

export function filterByDraftStatus(
    posts: CollectionEntry<'posts'>[],
    drafts: CollectionEntry<'drafts'>[],
    includeDrafts: boolean
): Array<CollectionEntry<'posts'> | CollectionEntry<'drafts'>> {
    const result: Array<CollectionEntry<'posts'> | CollectionEntry<'drafts'>> = [...posts];
    if (includeDrafts && shouldShowDrafts()) {
        result.push(...drafts);
    }
    return result;
}
