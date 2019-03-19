import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { City } from '../cities/city';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit {
  city : City;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    fetch("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query="+id)
				.then(response => response.json())
				.then(json => {
          this.city = json[0];
          console.log(json)
				})
  }

  goBack(): void {
    this.location.back();
  }

}
