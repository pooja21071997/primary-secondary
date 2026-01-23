import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import { Academics } from './pages/academics/academics';
import { Achievements } from './pages/achievements/achievements';
import { ContactUs } from './pages/contact-us/contact-us';
import { Facilities } from './pages/facilities/facilities';
import { EducationalFacilities } from './pages/facilities/educational-facilities/educational-facilities';
import { CounsellingCenter } from './pages/facilities/counselling-center/counselling-center';
import { SportsFacilities } from './pages/facilities/sports-facilities/sports-facilities';
import { MultipurposeHall } from './pages/facilities/multipurpose-hall/multipurpose-hall';

export const routes: Routes = [
    { path: '', component: Home },

  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'academics', component: Academics },
  { path: 'achievements', component: Achievements },
  { path: 'contact-us', component: ContactUs },

  {
    path: 'facilities',
    component: Facilities,
    children: [
      { path: 'educational-facilities', component: EducationalFacilities},
      { path: 'counselling-center', component: CounsellingCenter },
      { path: 'sports-facilities', component: SportsFacilities },
      { path: 'multipurpose-hall', component: MultipurposeHall },
      { path: '', redirectTo: 'educational-facilities', pathMatch: 'full' }
    ]
  },

  { path: '**', redirectTo: '' }
];
