// Utility to manage active states
export function isActiveProject(projectId: string): boolean {
  if (typeof window === 'undefined') return false;
  const currentPath = window.location.pathname;
  
  // Check for exact project page match
  if (currentPath === `/projects/${projectId}`) return true;
  
  // Check if we're in a section of this project
  const projectSectionMatch = currentPath.match(/^\/projects\/(\d+)\/.*$/);
  if (projectSectionMatch) {
    return projectSectionMatch[1] === projectId;
  }
  
  return false;
}

export function isActiveBlogCategory(category: string): boolean {
  if (typeof window === 'undefined') return false;
  const currentPath = window.location.pathname;
  
  // Check for exact category match
  if (currentPath === `/blogs/${category}`) return true;
  
  // Check if current blog post belongs to this category
  const blogPostMatch = currentPath.match(/^\/blogs\/(\d+)$/);
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
  
  return false;
}

// Get the current project ID from the URL
export function getCurrentProjectId(): string | null {
  if (typeof window === 'undefined') return null;
  const match = window.location.pathname.match(/^\/projects\/(\d+)/);
  return match ? match[1] : null;
}

// Get the current blog category from the URL
export function getCurrentBlogCategory(): string | null {
  if (typeof window === 'undefined') return null;
  const path = window.location.pathname;
  
  if (path === '/blogs/design') return 'design';
  if (path === '/blogs/ux-ai') return 'ux-ai';
  
  const blogPostMatch = path.match(/^\/blogs\/(\d+)$/);
  if (blogPostMatch) {
    const blogId = blogPostMatch[1];
    const blogCategories = {
      '1': 'design',
      '2': 'ux-ai',
      '3': 'design',
      '4': 'design'
    };
    return blogCategories[blogId] || null;
  }
  
  return null;
}