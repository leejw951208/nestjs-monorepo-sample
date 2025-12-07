# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a NestJS monorepo containing two applications (user and admin) with shared libraries. The project uses Prisma ORM with PostgreSQL, JWT authentication with Redis-based token management, Winston logging, and Swagger API documentation.

## Requirements

- Node.js 22.16.0+
- PostgreSQL 15.0+
- Redis (for token management)

## Common Commands

### Development

```bash
# Install dependencies
yarn install

# Run user application (NODE_ENV=local)
yarn start:local:user

# Run admin application (NODE_ENV=local)
yarn start:local:admin

# Run in debug mode
yarn start:debug
```

### Database Operations

```bash
# Generate Prisma client (includes TypedSQL generation)
yarn db:generate

# Run migrations
yarn db:migrate

# Create new migration
yarn db:migrate:create

# Reset database
yarn db:reset

# Create new seed file
yarn db:seed:create

# Run seed files
yarn db:seed:run
```

### Code Quality

```bash
# Format code
yarn format

# Lint and fix
yarn lint
```

### Testing

```bash
# Run all tests
yarn test

# Run user app tests
yarn test:user

# Run admin app tests
yarn test:admin

# Watch mode
yarn test:watch

# Coverage report
yarn test:cov

# E2E tests
yarn test:e2e

# Debug tests
yarn test:debug
```

### Docker

```bash
# Start all services
docker compose up -d --build

# Start specific app (api or admin)
docker compose up -d {APP} --build
```

## Architecture

### Monorepo Structure

The project uses NestJS CLI monorepo mode with two applications and three shared libraries:

**Applications:**

- `apps/user/` - User-facing API (port 3000)
- `apps/admin/` - Admin API (port 3001 in Docker)

**Shared Libraries:**

- `libs/common/` - Common utilities, guards, decorators, middleware, exceptions
- `libs/models/` - Domain models (user, token, permission, base entities)
- `libs/prisma/` - Prisma client and database management

### Path Aliases

Import shared libraries using these path aliases (defined in tsconfig.json):

```typescript
import { ... } from '@libs/common/*'
import { ... } from '@libs/models/*'
import { ... } from '@libs/prisma/*'
```

### Prisma Schema Organization

Prisma schema is split across multiple files in `libs/prisma/config/`:

- `schema.prisma` - Main config with datasource and generator
- `models/*.prisma` - Individual model files (user, token, admin, system, enum)

The project uses Prisma's TypedSQL preview feature for type-safe SQL queries.

### Authentication Architecture

**JWT Token Strategy:**

- Access tokens (type: 'ac') - Short-lived, for API requests
- Refresh tokens (type: 'rf') - Long-lived, stored in Redis and HTTP-only cookies

**Token Storage:**

- Web: Refresh tokens stored in HTTP-only cookies
- Mobile: Refresh tokens sent via Authorization header

**Guards:**

- `JwtAccessGuard` - Global guard protecting all routes by default
- `JwtRefreshGuard` - For token refresh endpoint
- `@Public()` decorator - Skip authentication for specific endpoints

**Strategies:**

- `jwt-access.strategy.ts` - Validates access tokens
- `jwt-refresh.strategy.ts` - Validates refresh tokens

### Global Configuration

Both applications share common bootstrap configuration:

1. **Logger**: Winston with daily rotate file
2. **Exception Handler**: Global exception filter
3. **Validation**: ValidationPipe with transform, whitelist, forbidNonWhitelisted, forbidUnknownValues
4. **Serialization**: ClassSerializerInterceptor for response transformation
5. **API Versioning**: URI-based (default: v1)
6. **Swagger**: Auto-generated at `/api/v1/user/docs` and `/api/v1/admin/docs`
7. **Interceptors**: SuccessStatusInterceptor for standardized response formatting

### Environment Files

Environment files are located in `envs/` directory:

- `.env.local` - Local development
- `.env.prod` - Production

Each app can also have app-specific environment files in `apps/{app-name}/envs/`.

### Middleware Stack

1. **LoggerMiddleware** - Request/response logging
2. **CustomClsMiddleware** - Continuation-local storage for request context
3. **cookieParser** - Parse cookies (both apps)

### Common Library Components

**Guards:**

- `JwtAccessGuard` - Access token verification
- `JwtRefreshGuard` - Refresh token verification
- `PermissionGuard` - Role-based access control

**Decorators:**

- `@Public()` - Bypass JWT authentication
- `@Permissions()` - Require specific permissions
- `@JwtPayload()` - Extract JWT payload from request
- `@ApiPageOkResponse()` - Swagger pagination response

**Utilities:**

- `bcrypt.util.ts` - Password hashing
- `jwt.util.ts` - JWT token operations
- `async.util.ts` - Async helpers

**DTOs:**

- `PageReqDto` - Pagination request
- `PageResDto` - Pagination response

### Database Schema Patterns

The project uses multi-schema PostgreSQL setup:

- `public` schema - Application tables
- `base` schema - Base/shared tables

Common patterns in models:

- Soft deletes with `deletedAt` field
- Timestamp tracking with `createdAt`, `updatedAt`
- Base model pattern for common fields

## Development Notes

### Running Specific Apps

Since this is a monorepo with multiple apps, you need to specify which app to start:

- **User App**: `yarn start:local:user` (default port: 3000)
- **Admin App**: `yarn start:local:admin` (default port: 3000, configurable via environment)

Both apps use the `NODE_ENV=local` environment and load configuration from `envs/.env.local` and app-specific environment files.

### Database Scripts

All database management scripts are TypeScript files using `tsx` for execution, located in `libs/prisma/config/scripts/`. These scripts handle migrations, seeding, and schema generation.

### Redis Integration

The project uses `@keyv/redis` with `@nestjs/cache-manager` for token management. Redis connection is configured via `REDIS_URL` environment variable.

### API Documentation

Both apps have Swagger UI enabled:

- **User API Swagger**: `http://localhost:3000/api/v1/user/docs`
- **Admin API Swagger**: `http://localhost:3000/api/v1/admin/docs`

API endpoints follow the pattern:

- User API: `http://localhost:3000/api/v1/*`
- Admin API: `http://localhost:3000/api/v1/*` (configurable prefix)

### Testing Structure

Jest is configured with module name mapping for path aliases. Test files use `*.spec.ts` naming convention. E2E tests are located in `apps/*/test/` directories.
