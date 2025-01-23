// Get current path segments
export function getCurrentPath() {
  if (typeof window === 'undefined') return '';
  
  // Get the base URL from import.meta.env
  const base = import.meta.env.BASE_URL;
  const path = window.location.pathname;
  
  // Remove the base path if it exists at the start of the pathname
  if (base !== '/' && path.startsWith(base)) {
    return path.slice(base.length);
  }
  
  return path;
}

// Check if a link matches the current path or its parent path
export function isActiveLink(href: string): boolean {
  const currentPath = getCurrentPath();
  
  // Normalize paths by removing trailing slashes
  const normalizedHref = href.replace(/\/$/, '');
  const normalizedCurrentPath = currentPath.replace(/\/$/, '');
  
  // Handle blog category pages
  if (normalizedHref.startsWith('/blogs/')) {
    const category = normalizedHref.split('/')[2];
    if (category === 'design' || category === 'ux-ai') {
      // Check if we're on a blog post that belongs to this category
      const blogPostMatch = normalizedCurrentPath.match(/^\/blogs\/(\d+)$/);
      if (blogPostMatch) {
        const blogId = blogPostMatch[1];
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
  if (normalizedCurrentPath === normalizedHref) return true;
  
  // Parent path match (for nested routes)
  if (normalizedHref !== '/' && normalizedCurrentPath.startsWith(normalizedHref)) return true;
  
  return false;
}

// Check if a project is currently active
export function isActiveProject(href: string): boolean {
  const currentPath = getCurrentPath();
  
  // Normalize paths
  const normalizedHref = href.replace(/\/$/, '');
  const normalizedCurrentPath = currentPath.replace(/\/$/, '');
  
  const projectMatch = normalizedHref.match(/^\/projects\/(\d+)$/);
  if (!projectMatch) return false;
  
  // Check for exact match or if we're in a section of this project
  return normalizedCurrentPath === normalizedHref || 
         normalizedCurrentPath.startsWith(`${normalizedHref}/`);
}