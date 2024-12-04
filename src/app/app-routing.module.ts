import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './components/cards/card-list/card-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CardListPromotionComponent } from './components/cards/card-list-promotion/card-list-promotion.component';
import { PageProductFilteredComponent } from './components/page-product-filtered/page-product-filtered.component';
import { FilterListCategoryComponent } from './components/buttons/filter-list-category/filter-list-category.component';
import { resolverService } from './resolver/resolver.service';

const routes: Routes = [
  { 
    path: '', 
    component: HomePageComponent, 
    resolve: { data: resolverService }, // Usa o resolver para carregar dados
    runGuardsAndResolvers: 'always' 
  }, 
  { path: 'list', component: CardListComponent, runGuardsAndResolvers: 'always' }, 
  { path: 'listPromotion', component: CardListPromotionComponent, runGuardsAndResolvers: 'always' },
  { path: 'produtos/:categoriaId', component: PageProductFilteredComponent, runGuardsAndResolvers: 'always' },
  { path: 'categoryListFilterButtons', component: FilterListCategoryComponent, runGuardsAndResolvers: 'always' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { 
      scrollPositionRestoration: 'top',
      onSameUrlNavigation: 'reload' 
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}