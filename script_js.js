function munutUpload(coffeeMenu){
    for(let ele of DATA){
      let container = document.createElement("div");
      container.id = 'container';
      let menu = document.createElement("span");
      let price = document.createElement("div");
      menu.id = 'menu';  
      munu.innerHTML = ele.menu;
      price.id = 'price';
      price.innerHTML = ele.price;      
      container.appendChild(menu);
      container.appendChild(price);  
       
      document.querySelector("#menuList").appendChild(container);
      
    }
  };
  
