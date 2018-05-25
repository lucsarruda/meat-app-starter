import { Restaurant } from "./restaurant/restaurant.model"
import { HttpClientModule, HttpClient, HttpParams } from '@angular/common/http'

import { MEAT_API } from '../app.api'
import { Injectable } from "@angular/core"
import { Observable } from "rxjs/Observable"
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {ErrorHandler} from '../app.error-handler'
import { MenuItem } from "../restaurant-detail/menu-item/menu-item.model";


@Injectable()
export class RestaurantsService {

    constructor(private http: HttpClient) { }

    //consome a API
    // search? -> parâmetro opcional
    // {params: {q: search}} -> busca no serviço (JSON SERVER)
    restaurants(search?: string): Observable<Restaurant[]> {
        let params: HttpParams = undefined
        if(search){
            params = new HttpParams().set('q', search)

            // pode usar .append em vez de .set
        }

        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, {params: params})
    }


    // busca por detalhes de determinado restaurante
    // recebe ID
    // return >> Observable do tipo Restaurant
    restaurantById(id: string): Observable<Restaurant>{
        return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
    }


    reviewsOfRestaurant(id: string): Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    }


    menuOfRestaurant(id: string): Observable<MenuItem[]>{
        return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
    }


}
