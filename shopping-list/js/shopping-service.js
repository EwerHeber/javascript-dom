class ShoppingService {

    getListName() {
        
    }

    getShoppingList() {
        return [
            {
                id: 1,
                title: '5 lb sack of potatoes',
                quantity: 1,
                isComplete: false
            },
            {
                id: 2,
                title: 'Frozen Pizza',
                quantity: 4,
                isComplete: true
            }
        ];
    }
}