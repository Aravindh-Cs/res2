const bar = document.querySelector('.bar')
const barList = document.querySelector('.navbar')
   bar.addEventListener('click',() =>
   barList.classList.toggle('show'))
   function myFunction(x)
{
    x.classList.toggle('change');
}

const cake = document.querySelector('.cake')
const cakeList = document.querySelector('.cak')

cake.addEventListener('click',()=>
       cakeList.classList.add('cakes'))

const place = document.querySelector('.place-order')
const placeList = document.querySelector('.place')

place.addEventListener('click',()=>
{
       placeList.classList.add('place-show')
})

const btncart = document.querySelector('.ord');
const cart = document.querySelector('.cart');
const close =document.querySelector('.close');

btncart.addEventListener('click',()=>
{
       cart.classList.add('cart-active')
})

close.addEventListener('click',()=>
{
       cart.classList.remove('cart-active')
});

//code for cart items to remove
document.addEventListener('DOMContentLoaded',loadFood)
function loadFood()
{
       loadcontent();
}
function loadcontent()
{
       let btnRemove = document.querySelectorAll('.remove');
       btnRemove.forEach((btnremove) =>
       {
       btnremove.addEventListener('click',removeItem)
       })

       let qtyElements = document.querySelectorAll('.qty');
       qtyElements.forEach((input) =>
       {
       input.addEventListener('change',changeqty)
       })

       let order = document.querySelectorAll('.order');
       order.forEach((orde)=>
       {
       orde.addEventListener('click',addcart)
       })
       updateTotal();
}
function removeItem() 
{
    if(confirm('Are You Sure To Remove This Item From Cart'))
    {
    let title = this.parentElement.querySelector('.food-name').innerHTML;
    itemList = itemList.filter((el)=>el.title!=title);
    this.parentElement.remove();
    loadcontent();
    }
}

//code for change qty of food

function changeqty()
{
       if(isNaN(this.value) || this.value<1)
       {
       this.value=1;
       }
       loadcontent();
}

let itemList=[];
//code for add items to cart
function addcart()
{
  let food = this.parentElement;
  let title = food.querySelector('.name').innerHTML;
  let price = food.querySelector('.price').innerHTML;
  let imgSrc = food.querySelector('.img').src;
  
  let newp = {title,price,imgSrc}
   
  if(itemList.find((el)=>el.title==newp.title))
{
       alert("product already added to the cart")
       return;
}
else
{
       itemList.push(newp);
}
  let newProduct = createCartProduct(title,price,imgSrc);
  let element = document.createElement('div');
  element.innerHTML=newProduct;
  let cartBasket = document.querySelector('.cart-content')
  cartBasket.append(element);
  loadcontent();
}
function createCartProduct(title,price,imgSrc)
{
  return`

  <div class="cart-box">
              <img src="${imgSrc}" class="image" alt="">
            <div class="detail-box">
              <div class="food-name">${title}</div>
              <div class="cart-price">
              <div class="food-price">${price}</div>
              <div class="food-amt">${price}</div>
            </div>
            <input type="number" value="1" class="qty">
       </div>
       <div class="remove">&target;</div>
       </div>
       `;
}

function updateTotal()
{
    const cartItems = document.querySelectorAll('.cart-box')
    const totalValue = document.querySelector('.total-price')

    let total=0;
    cartItems.forEach(product=>
        {
            let priceElement = product.querySelector('.food-price')
            let price = parseFloat(priceElement.innerHTML.replace("Rs.",""))
            let qtyprice = product.querySelector('.qty').value;
            total+=(price*qtyprice);
            product.querySelector('.food-amt').innerHTML="Rs."+(price*qtyprice);
        });
        totalValue.innerHTML="Rs."+total;

 
        const cartCount = document.querySelector('.no');
        let count = itemList.length;
        cartCount.innerHTML=count;
}