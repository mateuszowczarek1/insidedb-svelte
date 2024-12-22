// src/types/auth.d.ts
import '@auth/core';

declare module '@auth/core/types' {
  interface User {
    userRole?: string; // Add custom property to User
  }

  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      userRole?: string; // Add custom property to Session
    };
  }
}