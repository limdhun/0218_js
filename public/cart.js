
export default function cart(){

    let items = [] //장바구니 상품들

    function add({mno, mname, price}){
        //items에 추가
        //const {mno, mname, price} = menu 이거 귀찮으니, 그냥 add안에 쪼개놓자.
        //원래는 add(menu)로 구현햇엇음. 차라리 메뉴 객체를 파라미터로 받아서 처리하자


        // 만일 기존에 해당 mno에 해당하는 것이 있다면 수량만 변경
        // 없다면 새로 추가
        const old = items.filter(item => item.mno === mno)

        if(old.length > 0){
            old[0].qty += 1
        }else{
            const cartItem = {mno:mno, mname:mname, price:price, qty:1}

            items.push(cartItem)
        }




        return [...items]
    }

    function getItems(){
        return [...items]
    }
    return {getItems, add}


}

//export default cart

