// Utility to manage active states
export function isActiveProject(projectId: string): boolean {
  if (typeof window === 'undefined') return false;
  
  // Get the current path using the base URL from import.meta.env
  const base = import.meta.env.BASE_URL;
  let currentPath = window.location.pathname;
  
  // Remove the base path if it exists
  if (base !== '/' && currentPath.startsWith(base)) {
    currentPath = currentPath.slice(base.length);
  }
  
  // Remove trailing slashes
  currentPath = currentPath.replace(/\/$/, '');
  
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
  
  // Get the current path using the base URL from import.meta.env
  const base = import.meta.env.BASE_URL;
  let currentPath = window.location.pathname;
  
  // Remove the base path if it exists
  if (base !== '/' && currentPath.startsWith(base)) {
    currentPath = currentPath.slice(base.length);
  }
  
  // Remove trailing slashes
  currentPath = currentPath.replace(/\/$/, '');
  
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
  
  // Get the current path using the base URL from import.meta.env
  const base = import.meta.env.BASE_URL;
  let currentPath = window.location.pathname;
  
  // Remove the base path if it exists
  if (base !== '/' && currentPath.startsWith(base)) {
    currentPath = currentPath.slice(base.length);
  }
  
  const match = currentPath.match(/^\/projects\/(\d+)/);
  return match ? match[1] : null;
}

// Get the current blog category from the URL
export function getCurrentBlogCategory(): string | null {
  if (typeof window === 'undefined') return null;
  
  // Get the current path using the base URL from import.meta.env
  const base = import.meta.env.BASE_URL;
  let currentPath = window.location.pathname;
  
  // Remove the base path if it exists
  if (base !== '/' && currentPath.startsWith(base)) {
    currentPath = currentPath.slice(base.length);
  }
  
  if (currentPath === '/blogs/design') return 'design';
  if (currentPath === '/blogs/ux-ai') return 'ux-ai';
  
  const blogPostMatch = currentPath.match(/^\/blogs\/(\d+)$/);
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