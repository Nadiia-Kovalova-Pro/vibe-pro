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

## [2025-09-11]

### Improved
- Enhanced documentation in `frontend/src/components/ui/card.tsx`:
  - Added comprehensive JSDoc comments to the `createCardComponent` factory function explaining its purpose, parameters, and return type
  - Included inline comments within the function to clarify ref forwarding, semantic element usage, and class merging
  - Added block comments for each exported card component (Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter) describing their purpose, styling, and semantic HTML usage
  - Improved overall code readability and maintainability for future developers

