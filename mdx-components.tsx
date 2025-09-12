import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // --- THIS IS THE KEY ---
    // Map the standard HTML `img` tag to our custom `MdxImage` component.    
    // Allows customizing built-in components, e.g. h1.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    ...components,
  };
}