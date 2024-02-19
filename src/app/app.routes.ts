import { Routes } from '@angular/router';
import { ProductCreateComponent } from './pages/product-create/product-create.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';

export const routes: Routes = [
    {
        path: '' , redirectTo:'prouct-create', pathMatch:'full'
    },
    {
        path:'create',
        component:ProductCreateComponent
    },
    {
        path:'info',
        component:ProductInfoComponent
    }
];
