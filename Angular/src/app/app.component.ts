import { Component, Input } from '@angular/core';
import { SPP } from './SPP';
import { HeroService } from './hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartSPP } from './CartSPP';
  


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'web';

  sanpham: SPP[];
  listSearchProduct: SPP[];
  giohang: CartSPP[];

  constructor(private _HeroService: HeroService, private _router: Router, private _routTL: ActivatedRoute, private _rout: ActivatedRoute) { }

  //search
  _search: string;
  get search(): string {
    return this._search;
  }

  set search(value: string) {
    this._search = value;
    this.listSearchProduct = this.search ? this.sanpham.filter(p => p.Bookname.toLowerCase().includes(this.search) == true) : [];
  }


  //ofSeach
  of=true;
  ofSearch(){
    this.of=false
  }
  onSearch(){
    this.of=true
  }

  //Login
  password: '';
  email: '';
  onLogin() {
    if (this._HeroService.checkLogin(this.email, this.password))
      return this._router.navigate(['trangchu']);
    else if (this._HeroService.checkAdmin(this.email, this.password))
      return this._router.navigate(['admin']);
  }


  ngOnInit() {
    this._HeroService.getcustomer().subscribe(p => this.sanpham = p);
  }
}


