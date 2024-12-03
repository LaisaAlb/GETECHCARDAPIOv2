import { NgModule } from "@angular/core";

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
    declarations: [], 
    imports: [
        MatButtonModule, 
        MatListModule,
        MatDividerModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatSelectModule,
        MatTableModule,
        MatToolbarModule,
        SlickCarouselModule
    ],
    exports: [
        MatButtonModule,
        MatListModule,
        MatDividerModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatSelectModule,
        MatTableModule,
        MatToolbarModule,
    ],
    providers: [
        provideNativeDateAdapter()
    ]
})
export class AngularMaterialModule {}