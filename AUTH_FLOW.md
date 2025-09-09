# Authentication Flow Documentation

This document outlines the complete authentication flow in the Todo App, tracing the path from frontend UI to backend data handling.

## Frontend Implementation

### 1. User Interface Components
Located in `src/routes/landing/home/_components/sign-in/form.tsx`:
- `SignInForm` component manages the login form UI
- Implements form validation using `react-hook-form`
- Handles submission to `/api/v1/auth/sign-in` endpoint

### 2. State Management
Located in `src/stores/auth-store.ts`:
```typescript
export const useAuthStore = create<State & Action>()(
  persist(
    (set) => ({
      token: null, 
      isLoggedIn: false,
      signIn: (token: string) => {
        set({ token, isLoggedIn: true });
      },
      logout: () => {
        set({ token: null, isLoggedIn: false });
      },
    }),
    { name: "session" },
  ),
);
```

### 3. Route Protection
Located in `src/routes/dashboard/root.tsx`:
```typescript
export const DashboardRoot = () => {
  const { isLoggedIn } = useAuthStore();
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  // Protected route logic
}
```

## Backend Implementation

### 1. Route Definition
Located in `flaskr/routes/auth_route.py`:
```python
@bp.route("/auth/sign-in")
class SignIn(MethodView):
    @bp.arguments(SignInSchema)
    @bp.response(200)
    def post(self, data):
        return AuthController.sign_in(data)
```

### 2. Data Validation
Located in `flaskr/schemas/plain_schema.py`:
```python
class PlainSignInSchema(Schema):
    email = fields.Str(required=True)
    password = fields.Str(required=True)
```

### 3. JWT Configuration
Located in `flaskr/extensions.py`:
```python 
from flask_jwt_extended import JWTManager
jwt = JWTManager()
```

### 4. User Model
Located in `flaskr/models/user_model.py`:
```python
class UserModel(db.Model):
    __tablename__ = "users"
    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str] = mapped_column(String(20), nullable=False)
    email: Mapped[str] = mapped_column(String(120), nullable=False)
    password: Mapped[str] = mapped_column(String(300), nullable=False)
```

## Authentication Flow Steps

1. User enters credentials in the frontend login form
2. Frontend validates form data and sends to backend API
3. Backend validates credentials and generates JWT token
4. Frontend stores token in Zustand store
5. Protected routes check authentication state for access control

This implementation creates a secure, stateless authentication system using JWT tokens, with proper separation of concerns between frontend and backend components.
