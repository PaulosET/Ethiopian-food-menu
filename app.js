const menu = [
  {
    id: 1,
    title: "ዱለት",
    category: "ቁርስ",
    price: 50,
    img: "./image-2/dulet.jpg",
    desc: `Dulet. For the uninitiated, this dish of mixed meats might be more enjoyable if not translated and explained. It's made with minced tripe (an animal's stomach lining), along with liver and lean beef fried in butter, onions, chilli, cardamom and pepper. `,
  },
  {
    id: 2,
    title: "ሽክላ ጥብስ",
    category: "ምሳ",
    price: 100,
    img: "./image-2/shekla.jpg",
    desc: `Sliced meat served in a clay dish. Jean Rebiffé Sliced beef or lamb, pan-fried in butter, garlic and onion, tibs is one of the most popular dishes among Ethiopians.`,
  },
  {
    id: 3,
    title: "በያይነት",
    category: "ምሳ",
    price: 40,
    img: "./image-2/Alicha_1.jpg",
    desc: `This is a bayonet, injera with several different vegetarian wats (sauces) including misir alecha (lentils without berbere), tagabino (lentils with berbere), shiro (ground lentils with berbere) rafuu (cabbage), dinicha (potatoes), qaraa (spicy green peppers) and beets ( i forgot how to say it in Afan Oromo and I am too lazy to pick up my dictionary)`,
  },
  {
    id: 3,
    title: "ስፕሪስ ጁስ",
    category: "ጁስ",
    price: 40,
    img: "./image-2/juice.jpg",
    desc: ` a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice.`,
  },
  {
    id: 4,
    title: "ገንፎ",
    category: "ቁርስ",
    price: 60,
    img: "./image-2/genfo.jpg",
    desc: `Genfo is made with barley or wheat flour and to cook it the flour and water are combined and stirred continuously with a wooden spoon. Genfo is presented in a large mound with a hole in the center, filled with a mixture of niter kibbeh and berbere. The porridge may be eaten with the hands or with a utensil.fiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "እንቁላል",
    category: "ምሳ",
    price: 45,
    img: "./image-2/egg.jpg",
    desc: `a traditional dish from Ethiopia and a type of wat (Ethiopian stew). In order to prepare it, onions are sautéed in niter kibbeh clarified butter, followed by ginger, garlic, cardamom, berbere spices, and beef broth. `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "ጁስ",
    price: 70,
    img: "./image-2/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "አገልግል",
    category: "እራት",
    price: 155,
    img: "./image-2/agelgel.jpg",
    desc: `Woven grass with a leather outer covering. These baskets were commonly used in Ethiopia by the Oromo and amhara and other people as a kind of "lunch/hot box".`,
  },
  {
    id: 8,
    title: "ክትፎ",
    category: "ምሳ",
    price: 129,
    img: "./image-2/kitfo.jpg",
    desc: `A diet high in fat and low in carbohydrates (sugars) that causes the body to break down fat into molecules called ketones`,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "ጁስ",
    price: 80,
    img: "./image-2/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "ፓስታ",
    category: "እራት",
    price: 40,
    img: "./image-2/pasta.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id:11,
    title: "ጨጨብሳ",
    category: "ቁርስ",
    price: 80,
    img: "./image-2/chechebsa.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter=document.querySelector('.section-center');

const container=document.querySelector('.btn-container');
//load items
window.addEventListener("DOMContentLoaded", function (){
 displaymenuItems(menu);

const categories=menu.reduce((value,item)=>{
  if(!value.includes(item.category)){
     value.push(item.category);
  }
  return value

},["ሁሉም"])

const catagorybtn=categories.map(function(item){
  return `<button type="button" 
  class="filter-btn" 
  data-id=${item}>${item}</button>`
})
const btns=catagorybtn.join(" ");
container.innerHTML=btns;

 const filterBtns=document.querySelectorAll(".filter-btn");
 
  // filter itemss
  filterBtns.forEach(function (btn){
    btn.addEventListener("click", function(e){
      const category=e.currentTarget.dataset.id;
      const menuCategory=menu.filter(function (menuItem){
       if(menuItem.category===category){
        
        return menuItem;
  
       }

      })
      if(category==="ሁሉም"){
        displaymenuItems(menu)
      }
      else{
        displaymenuItems(menuCategory);
      }
    })
  })

})


function displaymenuItems(MenuItem){
let displayMenu=MenuItem.map(function(item){
  
    return `<article class="menu-item">
       <img src=${item.img} alt=${item.title} class="photo">
       <div class="item-info">
        <header>
        <h4>${item.title}</h4>
        <h4 class="price">${item.price} birr</h4>
        </header>
        <p class="item-text">
         ${item.desc}
        </p>
       </div>
</article>`
  })
 displayMenu=displayMenu.join(" ");
sectionCenter.innerHTML=displayMenu;
}
