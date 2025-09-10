# Changelog

## [2025-09-09]

### Fixed
- Fixed application context issue in `backend/seed.py`:
  - Moved Flask app creation outside of the `seed_tags()` function
  - Added proper application context handling for database operations
  - Fixed indentation issues in the seeding function

## [2025-09-10]

### Added
- Configured Vitest for frontend testing in `frontend/vitest.config.ts`
- Created test file `frontend/src/components/ui/button.test.tsx` for Button component testing

### Refactored
- Modernized Card UI components in `frontend/src/components/ui/card.tsx`:
  - Introduced a generic `createCardComponent` factory function to eliminate repetitive boilerplate code
  - Improved semantic HTML by changing `CardTitle` to use `<h2>` element instead of `<div>`
  - Enhanced type safety with generic types for better TypeScript support
  - Reduced code duplication while maintaining the same API and functionality
