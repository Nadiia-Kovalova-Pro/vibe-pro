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
