export function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '_') // Replace spaces with underscores
        .replace(/-+/g, '_'); // Replace multiple hyphens with single underscore
}

export function getUrlFromTitle(title: string): string {
    return slugify(title);
}

export function getTitleFromUrl(url: string): string {
    return url
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}