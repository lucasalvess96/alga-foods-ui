import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { authInterceptor, provideAuthConfig } from 'security-auth-ui';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideClientHydration(),
    provideAuthConfig({
      apiBaseUrl: '/backend',
      sessionPath: '/api/session',
      csrfPath: '/api/csrf',
      authorizationPath: '/oauth2/authorization/google',
      logoutPath: '/logout',
      loginRoute: '/login',
      defaultAfterLoginRoute: '/foods',
    }),
    provideHttpClient(withInterceptors([authInterceptor]), withFetch()),
    provideAnimationsAsync(),
  ],
};
