// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule, withFetch } from '@angular/common/http';
import { provideHttpClient } from "@angular/common/http";

bootstrapApplication(AppComponent, {
  providers: [
    HttpClientModule,
    provideHttpClient(withFetch())
  ]
}).catch(err => console.error(err));
