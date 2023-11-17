import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/interfaces';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnDestroy{

  public categories: Array<Category> = [];
  private subscriptions: Array<Subscription> = [];

  constructor(private categoryService: CategoryService){}

  public ngOnInit(): void {
    this.subscriptions.push(
      this.categoryService.getAllCategories().valueChanges().subscribe(
        categories => this.categories = categories
      )
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach( subscription => subscription.unsubscribe());
  }

}
