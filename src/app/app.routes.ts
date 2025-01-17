import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { ContentComponent } from './pages/content/content.component';
import { CommentsComponent } from './pages/comments/comments.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'analytics',
        component: AnalyticsComponent
    },
    {
        path: 'content',
        component: ContentComponent
    },
    {
        path: 'comments',
        component: CommentsComponent
    },
    {
        path: '**',
        redirectTo: 'dashboard',
    }
];
