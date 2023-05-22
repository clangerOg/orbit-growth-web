import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | number) {
  return new Date(date).toLocaleDateString('de-DE', {
    // day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function formatTags(tags: string[]): string {
  return tags.join(', ');
}
