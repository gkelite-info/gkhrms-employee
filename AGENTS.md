# Agent Guidelines & Code Quality Standards

## 1. No Conversational or Redundant AI Comments
- **Never add conversational AI comments** in code files (e.g., `// Auto-focus input when modal opens`, `{/* Trigger Button */}`, `{/* Header */}`, `{/* Form */}`, `{/* Reusable Pagination */}`, etc.).
- Code must be clean, elegant, and self-documenting.
- Comments should only be used when explaining non-obvious business logic, complex algorithms, or external API workarounds.

## 2. Production-Ready Code & Non-Breaking Changes
- Always write robust, scalable, production-ready TypeScript/React code.
- Never break existing functionality, props, or responsive layouts when adding features or refactoring.
- Maintain seamless responsive design across all viewports (mobile, tablet, desktop).

## 3. Clean Component Architecture
- Keep reusable components decoupled, highly customizable, and strictly typed with TypeScript interfaces.
- Avoid duplicate code or ad-hoc styling hacks; use consistent design system tokens and Tailwind CSS utility classes.
