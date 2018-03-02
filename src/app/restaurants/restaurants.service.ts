import { Restaurant } from "./restaurant/restaurant.model"
import {Http} from '@angular/http'

import { MEAT_API } from '../app.api'
import { Injectable } from "@angular/core"
import { Observable } from "rxjs/Observable"
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {ErrorHandler} from '../app.error-handler'


@Injectable()
export class RestaurantsService {

    constructor(private http: Http) { }

    //consome a API
    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }


    // busca por detalhes de determinado restaurante
    // recebe ID
    // return >> Observable do tipo Restaurant
    restaurantById(id: string): Observable<Restaurant>{
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }


    reviewsOfRestaurant(id: string): Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }


}
