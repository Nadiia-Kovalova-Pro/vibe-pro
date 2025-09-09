# Changelog

## [2025-09-09]

### Fixed
- Fixed application context issue in `backend/seed.py`:
  - Moved Flask app creation outside of the `seed_tags()` function
  - Added proper application context handling for database operations
  - Fixed indentation issues in the seeding function
