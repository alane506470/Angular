import { Component } from '@angular/core';
import { SidenavService } from './sidenav/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularLayout';
  constructor(private sidenavService: SidenavService) {
     this.sidenavService.addItems([
        {
        name: 'APPS',
        position: 5,
        type: 'subheading',
        customClass: 'first-subheading'
      },
      {
        name: 'Dashboard',
        routeOrFunction: '/',
        icon: 'dashboard',
        position: 10,
        pathMatchExact: true
      },
      {
        name: 'All-In-One Table',
        routeOrFunction: '/tables/all-in-one-table',
        icon: 'assignment',
        badge: '22',
        badgeColor: '#2196F3',
        position: 15,
      },
      {
        name: 'Calendar',
        routeOrFunction: '/apps/calendar',
        icon: 'date_range',
        position: 20
      },
      {
        name: 'Inbox',
        routeOrFunction: '/apps/inbox',
        icon: 'inbox',
        position: 25
      },
      {
        name: 'Chat',
        routeOrFunction: '/apps/chat',
        icon: 'chat',
        position: 30,
        badge: '14',
        badgeColor: '#009688'
      },
      {
        name: 'USER INTERFACE',
        type: 'subheading',
        position: 35
      },
      {
        name: 'Components',
        routeOrFunction: '/components',
        icon: 'layers',
        position: 40
      },
      {
        name: 'Forms',
        icon: 'description',
        position: 45,
        subItems: [
          {
            name: 'Form Elements',
            routeOrFunction: '/forms/form-elements',
            position: 10
          },
          {
            name: 'Form Wizard',
            routeOrFunction: '/forms/form-wizard',
            position: 15
          }
        ]
      },
      {
        name: 'Drag & Drop',
        routeOrFunction: '/drag-and-drop',
        icon: 'mouse',
        position: 55
      },
      {
        name: 'WYSIWYG Editor',
        routeOrFunction: '/editor',
        icon: 'format_shapes',
        position: 60
      },
      {
        name: 'PAGES',
        type: 'subheading',
        position: 65
      },
      {
        name: 'Authentication',
        icon: 'lock',
        position: 66,
        subItems: [
          {
            name: 'Login Page',
            routeOrFunction: '/login',
            position: 5
          },
          {
            name: 'Register Page',
            routeOrFunction: '/register',
            position: 10
          },
          {
            name: 'Forgot Password',
            routeOrFunction: '/forgot-password',
            position: 15
          }
        ]
      },
      {
        name: 'Page Layouts',
        icon: 'view_compact',
        position: 67,
        subItems: [
          {
            name: 'Simple',
            routeOrFunction: '/page-layouts/simple',
            position: 5
          },
          {
            name: 'Simple Tabbed',
            routeOrFunction: '/page-layouts/simple-tabbed',
            position: 5
          },
          {
            name: 'Card',
            routeOrFunction: '/page-layouts/card',
            position: 10
          },
          {
            name: 'Card Tabbed',
            routeOrFunction: '/page-layouts/card-tabbed',
            position: 15
          },
        ]
      },
      {
        name: 'Coming Soon',
        routeOrFunction: '/coming-soon',
        icon: 'watch_later',
        position: 68
      },
      {
        name: 'Blank',
        routeOrFunction: '/blank',
        icon: 'picture_in_picture',
        position: 69
      },
      {
        name: 'Maps',
        icon: 'map',
        position: 70,
        subItems: [
          {
            name: 'Google Maps',
            routeOrFunction: '/maps/google-maps',
            position: 0
          }
        ],
        badge: '3',
        badgeColor: '#4CAF50'
      },
      {
        name: 'Material Icons',
        routeOrFunction: '/icons',
        icon: 'grade',
        position: 75
      },
      {
        name: 'Multi-Level Menu',
        icon: 'menu',
        position: 85,
        subItems: [
          {
            name: 'Level 1',
            subItems: [
              {
                name: 'Level 2',
                subItems: [
                  {
                    name: 'Level 3',
                    subItems: [
                      {
                        name: 'Level 4',
                        subItems: [
                          {
                            name: 'Level 5',
                            routeOrFunction: '/level1/level2/level3/level4/level5'
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]);
  }
}
