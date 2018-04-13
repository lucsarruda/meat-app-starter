import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";
import { Injectable } from "@angular/core";
import { NotificationService } from "../../shared/messages/notification.service";

// todo serviço que irá receber algo, 
// precisa ser marcado com @Injectable()
@Injectable()
export class ShoppingCartService{

    items: CartItem[] = []

    constructor(private notificationService: NotificationService){}

    clear(){
        this.items = []
    }

    // adiciona item no carrinho
    addItem(item: MenuItem){
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)

        // verifica se já existe no carrinho
        // incrementa quantidade ou adiciona o primeiro
        if(foundItem){
            this.increaseQty(foundItem)
            // foundItem.quantity = foundItem.quantity + 1
        } else {
            this.items.push(new CartItem(item))
        }

        // notifica alteração no carrinho
        this.notificationService.notify(`Você adicionou o item ${item.name}`)
    }

    increaseQty(item: CartItem){
        item.quantity = item.quantity + 1
    }

    decreaseQty(item: CartItem){
        item.quantity = item.quantity - 1
        
        if(item.quantity === 0){
            this.removeItem(item)
        }
    }

    removeItem(item: CartItem){
        // remove a partir do item que estou
        // neste caso um item (, 1)
        this.items.splice(this.items.indexOf(item), 1)

        // notifica alteração no carrinho
        this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`)
    }

    // soma
    total(): number{

        // 1 - faz um map (troca de item para um valor) ==> quant * preço unitário
        // 2 - reduce() ==> soma dois valores, item anterior e o atual (valor inicial = 0 [, 0])
        return this.items
                .map(item => item.value())
                .reduce((prev, value) => prev + value, 0)
    }

}