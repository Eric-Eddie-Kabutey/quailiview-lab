'use client';

/**
 * =====================================================================================
 * Framer Motion Client Boundary Wrapper
 * =====================================================================================
 *
 * @purpose
 * This file serves as a dedicated "client boundary" for the `framer-motion` library.
 * It resolves a specific build error in Next.js (App Router) related to how
 * libraries use exports.
 *
 * @problem
 * The Next.js App Router's build process is very strict about the code that can be
 * included in Client Components (files with the 'use client' directive). It needs to
 * statically analyze which parts of a library are being used to optimize the code
 * sent to the browser.
 *
 * The `framer-motion` library, in its main entry point, uses a syntax called
 * a "re-export" (e.g., `export * from './some-module'`). This is a valid JavaScript
 * feature, but the Next.js bundler currently sees it as too ambiguous to analyze
 * for client-side code, resulting in a build error:
 *
 * "Error: It's currently unsupported to use "export *" in a client boundary.
 * Please use named exports instead."
 *
 * @solution
 * We solve this by creating this wrapper file, which acts as a "middleman".
 *
 * 1.  **Establish a Client Boundary:** By placing `'use client'` at the top, we
 *     tell Next.js that this entire module is intended for the client.
 *
 * 2.  **Use Named Imports:** We import only the specific, named components and hooks
 *     that we need throughout our application (e.g., `motion`, `AnimatePresence`).
 *     This is explicit and easy for the Next.js bundler to understand.
 *
 * 3.  **Use Named Exports:** We then re-export these same modules using the named
 *     export syntax (`export { motion, AnimatePresence }`). This creates a "safe"
 *     entry point that satisfies the Next.js build requirement.
 *
 * @usage
 * Instead of importing directly from 'framer-motion' in your other client components,
 * you should now import from this file.
 *
 *   // BEFORE:
 *   import { motion } from 'framer-motion';
 *
 *   // AFTER:
 *   import { motion } from './FramerMotionClient'; // Adjust path as needed
 *
 * This ensures that the problematic `export *` is never directly imported into your
 * application's client components, resolving the build error.
 *
 * @dependencies
 * - framer-motion
 * - next (App Router)
 *
 * =====================================================================================
 */


// Import the specific, named exports you need from framer-motion
import { motion, AnimatePresence, Variants, useScroll, useMotionValueEvent } from 'framer-motion';

// 2. Re-export them as named exports from this client component file
export { motion, AnimatePresence, useScroll, useMotionValueEvent };
export type { Variants };