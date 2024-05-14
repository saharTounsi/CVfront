import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../demo/service/token-storage.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService, private router:Router,
        private tokenService:TokenStorageService) { }

    ngOnInit() {
        const manager = localStorage.getItem('manager');
        const employee = localStorage.getItem('employee');

        if (manager && !employee) {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] }
                ]
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Project-Section',
                        icon: 'pi pi-fw pi-briefcase',
                        items: [
                            {
                                label: 'Chart',
                                icon: 'pi pi-fw pi-chart-bar',
                                routerLink: ['project/chart']
                            },
                            {
                                label: 'Projects',
                                icon: 'pi pi-fw pi-list',
                                routerLink: ['project/list']
                            }
                        ]
                    },
                    {
                        label: 'Team-Section',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            {
                                label: 'Chart',
                                icon: 'pi pi-fw pi-chart-bar',
                                routerLink: ['team/chart']
                            },
                            {
                                label: 'Your teams',
                                icon: 'pi pi-fw pi-list',
                                routerLink: ['team/list']
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Work',
                icon: 'pi pi-fw pi-folder',
                items: [
                    {
                        label: 'Task-Section',
                        icon: 'pi pi-fw pi-folder',
                        items: [
                            {
                                label: 'Chart',
                                icon: 'pi pi-fw pi-chart-bar',
                                routerLink: ['task/chart']
                            },
                            {
                                label: 'Your Tasks',
                                icon: 'pi pi-fw pi-list',
                                routerLink: ['task/list']
                            }
                        ]
                    },
                    {
                        label: 'Feedback',
                        icon: 'pi pi-fw pi-exclamation-triangle',
                        items: [
                            { label: 'Complaints', icon: 'pi pi-fw pi-comment', routerLink: ['/feedback/report'] },
                        ]
                    }
                ]
            },
            {
                label: 'Setting',
                items: [
                    { label: 'Account', icon: 'pi pi-fw pi-cog', routerLink: ['/dashboard/setting-account'] }
                ]
            },
        ];
        }
        else if(!manager && employee){
            this.model = [
                {
                    label: 'Home',
                    items: [
                        { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] }
                    ]
                },
                {
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [
                        {
                            label: 'Project-Section',
                            icon: 'pi pi-fw pi-briefcase',
                            items: [
                                {
                                    label: 'Your projects',
                                    icon: 'pi pi-fw pi-list',
                                    routerLink: ['project/list']
                                }
                            ]
                        },
                        {
                            label: 'Team-Section',
                            icon: 'pi pi-fw pi-users',
                            items: [
                                {
                                    label: 'Your teams',
                                    icon: 'pi pi-fw pi-list',
                                    routerLink: ['team/employee-team']
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Work',
                    icon: 'pi pi-fw pi-folder',
                    items: [
                        {
                            label: 'Task-Section',
                            icon: 'pi pi-fw pi-folder',
                            items: [
                                {
                                    label: 'Your Tasks',
                                    icon: 'pi pi-fw pi-list',
                                    routerLink: ['task/list']
                                }
                            ]
                        },
                        {
                            label: 'Feedback',
                            icon: 'pi pi-fw pi-exclamation-triangle',
                            items: [
                                { label: 'Report an Issue', icon: 'pi pi-fw pi-comment', routerLink: ['/feedback/report'] },
                                { label: 'Give Feedback', icon: 'pi pi-fw pi-pencil', routerLink: ['/feedback/give'] }
                            ]
                        }
                    ]
                },
                {
                    label: 'Setting',
                    items: [
                        { label: 'Account', icon: 'pi pi-fw pi-cog', routerLink: ['/dashboard/setting-account'] }
                    ]
                },
            ];
        }
        /*else {
            alert("Hack Attempt")
            this.tokenService.signOut()
            this.router.navigate([""])
        }*/
    }
}
