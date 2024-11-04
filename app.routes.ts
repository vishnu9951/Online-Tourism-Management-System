import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { PackagesComponent } from './packages/packages.component';
import { SigninComponent } from './signin/signin.component';
import { ProfileComponent } from './profile/profile.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
     {path:"home", component:HomeComponent},
    {path:"packages", component:PackagesComponent},
    {path:"services", component:ServicesComponent},
    {path:"about", component:AboutComponent},
    {path:"login", component:LoginComponent},
    {path:"profile", component:ProfileComponent},
    {path:"bookings", component:MyBookingComponent},
    {path:"gallery", component:GalleryComponent},
    {path:"signin", component:SigninComponent}
];
