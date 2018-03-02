import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCartService{

    items: CartItem[] = []

    clear(){
        this.items = []
    }

    // adiciona item no carrinho
    addItem(item: MenuItem){
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)

        // verifica se já existe no carrinho
        // incrementa quantidade ou adiciona o primeiro
        if(foundItem){
            foundItem.quantity = foundItem.quantity + 1
        } else {
            this.items.push(new CartItem(item))
        }
    }

    removeItem(item: CartItem){
        // remove a partir do item que estou
        // neste caso um item (, 1)
        this.items.splice(this.items.indexOf(item), 1)
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