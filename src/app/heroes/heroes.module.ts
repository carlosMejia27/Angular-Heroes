import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { HeroePagesComponent } from './pages/heroe-pages/heroe-pages.component';
import { ListPagesComponent } from './pages/list-pages/list-pages.component';
import { SearchPagesComponent } from './pages/search-pages/search-pages.component';
import { NewPagesComponent } from './pages/new-pages/new-pages.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    LayoutPagesComponent,
    HeroePagesComponent,
    ListPagesComponent,
    SearchPagesComponent,
    NewPagesComponent,
  ],
  imports: [CommonModule, HeroesRoutingModule, MaterialModule],
})
export class HeroesModule {}
