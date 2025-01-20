// Get current path segments
export function getCurrentPath() {
  if (typeof window === 'undefined') return '';
  return window.location.pathname;
}

// Check if a link matches the current path or its parent path
export function isActiveLink(href: string): boolean {
  const currentPath = getCurrentPath();
  
  // Handle blog category pages
  if (href.startsWith('/blogs/')) {
    const category = href.split('/')[2];
    if (category === 'design' || category === 'ux-ai') {
      // Check if we're on a blog post that belongs to this category
      const blogPostMatch = currentPath.match(/^\/blogs\/(\d+)$/);
      if (blogPostMatch) {
        const blogId = blogPostMatch[1];
        // This would be replaced with actual blog data lookup
        const blogCategories = {
          '1': 'design',
          '2': 'ux-ai',
          '3': 'design',
          '4': 'design'
        };
        return blogCategories[blogId] === category;
      }
    }
  }

  // Exact match
  if (currentPath === href) return true;
  
  // Parent path match (for nested routes)
  if (href !== '/' && currentPath.startsWith(href)) return true;
  
  return false;
}

// Check if a project is currently active
export function isActiveProject(href: string): boolean {
  const currentPath = getCurrentPath();
  const projectMatch = href.match(/^\/projects\/(\d+)$/);
  if (!projectMatch) return false;
  
  return currentPath === href;
}