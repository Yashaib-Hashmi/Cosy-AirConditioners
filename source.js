var product = [
    [1,"Solar Hybrid AC Solar Hybrid-1/AC","Images/Haier1p.jpeg",'UVC Sterilization WiFi Control WiFi Control Smart Clean Smart Clean',120000,"Haier"],
    [2,"Thunder Inverter HSU-12HPM/012SDC(W)-T3","Images/Haier2p.jpeg",'Power Input (W)510 -3500 Running Current (A)2.4 -15.5 Refrigerant R32 Air Circulation (m3/h)1510',140000,"Haier"],
    [3,"Pearl Inverter HSU-24HFP/WUSDC (G)","Images/Haier3p.jpeg",'UVC Sterilization WiFi Control WiFi Control Smart Clean Smart Clean',180000,"Haier"],
    [4,"Split Air Conditioners","Images/Dawlance1.jpeg",'AC Inverter Mono Split Cooling Capacity (Btu/h) 12500 BTU/h Function Reversible Self Cleaning Yes',120000,"Dawlance"],
    [5,"UV Inverter Air Conditioners","Images/Dawlance2.jpeg",'AC Inverter Mono Split Cooling Capacity (Btu/h) 12500 BTU/h Function Reversible Self Cleaning Yes',140000,"Dawlance"],
    [6,"Standing Air Conditioners","Images/Dawlance3.jpeg",'Gold Fin Yes Self Cleaning Yes',180000,"Dawlance"],
    [7,"1 Ton Ultron DIVINE...","Images/Orient1.jpeg",'T3 tropicalized inverter Japanese PCB Kit Auto Pilot Optimized compressor drive Low voltage operation 70V',120000,"Orient"],
    [8,"1 Ton Ultron MEGA e...","Images/Orient2.jpeg",'T3 tropicalized inverter Japanese PCB Kit Auto Pilot Optimized compressor drive Low voltage operation 70V 100% pure copper',140000,"Orient"],
    [9,"2 Ton ULTIMATE Silk...","Images/Orient3.jpeg",'on-inverter technology Energy efficient technology R410 Eco friendly refrigerant Heat & Cool 4D air flow',180000,"Orient"],
    [10,"PEL InverterOn Turbo DC Ultimate T3 (H&amp;C) Air Conditioner","Images/Pel1p.jpeg",'(H&C) Air Conditioner (1 Ton & 2 Ton Wifi Available',120000,"Pel"],
    [11,"PEL Regal 4Ton floor standby auto temp adjust Air Conditioner","Images/Pel2p.jpeg",'12K Turbo DC Ultimate T3 Range Capacity Cooling 1004(100~1182)W Range Current Cooling 4.5(1.1~5.4) ARated Current 9.0 ARange Capacity Heating 925(240~1083) W',140000,"Pel"],
    [12,"PEL InverterOn Sublime T3 auto switch (H&amp;C) Air Conditioner","Images/Pel3p.jpeg",'Regal (Heat & Cool) 2.0 Ton Rated Capacity Cooling 7100 Rated Running Current Cooling 14.5 W Maximum Current 19 A Rated Power Cooling 2500 W Maximum Power 4000 W',180000,"Pel"],
    [13,"Gree 1Ton inverter Air conditoner","Images/Gree1p.jpeg",'Auto Clean Dehumidification I-Feel functionality Self-diagnosis Multiple fan speeds Automatic voltage adaptation Low voltage start-up Swing louver control',120000,"Gree"],
    [14,"Gree 2Ton Inverter Air conditioner","Images/Gree2p.jpeg",'Auto Clean Dehumidification I-Feel functionality Self-diagnosis Multiple fan speeds Automatic voltage adaptation Low voltage start-up Swing louver control',140000,"Gree"],
    [15,"Gree 1.5Ton commercial Air conditioners","Images/Gree3p.jpeg",'4-Way discharge air Multiple fan speeds Swing louver control Automatic voltage adaption',180000,"Gree"]
]

var  Haier = "";
var Dawlance = "";
var Orient = "";
var Pel = "";
var Gree = "";

var category = []
for (var iterator of product) {
    if(category.includes(iterator[5])){

    }else{
        category.push(iterator[5])
        
    }
    if(iterator[5] == "Haier"){
        Haier += `<div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-3 mb-3 d-flex justify-content-center">
        <div class="card" style="width: 18rem; justify-content-center d-flex">
        <img src="${iterator[2]}" class="card-img-top" alt="..." >
        <div class="card-body">
          <h5 class="card-title">${iterator[1]}</h5>
          <p class="card-text">${iterator[4]}</p>
          <a href="detail.html?desc=${iterator[3]}&Product_ID=${iterator[0]}&Product_Name=${iterator[1]}&Product_Img=${iterator[2]}&Product_Price=${iterator[4]}" class="btn btn-dark justify-content-center d-flex rounded-pill">See Detail</a>
        </div>
      </div>
      </div>`
    }
    if(iterator[5] == "Dawlance"){
        Dawlance += `<div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-3 mb-3 d-flex justify-content-center">
        <div class="card" style="width: 18rem;">
        <img src="${iterator[2]}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${iterator[1]}</h5>
          <p class="card-text">${iterator[4]}</p>
          <a href="detail.html?desc=${iterator[3]}&Product_ID=${iterator[0]}&Product_Name=${iterator[1]}&Product_Img=${iterator[2]}&Product_Price=${iterator[4]}"  class="btn btn-dark justify-content-center d-flex rounded-pill">See Detail</a>
        </div>
      </div>
      </div>`
    }
    if(iterator[5] == "Orient"){
        Orient += `<div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-3 mb-3 d-flex justify-content-center">
        <div class="card" style="width: 18rem;">
        <img src="${iterator[2]}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${iterator[1]}</h5>
          <p class="card-text">${iterator[4]}</p>
          <a href="detail.html?desc=${iterator[3]}&Product_ID=${iterator[0]}&Product_Name=${iterator[1]}&Product_Img=${iterator[2]}&Product_Price=${iterator[4]}"  class="btn btn-dark justify-content-center d-flex rounded-pill">See Detail</a>
        </div>
      </div>
      </div>`
    }
    if(iterator[5] == "Pel"){
        Pel += `<div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-3 mb-3 d-flex justify-content-center">
        <div class="card" style="width: 18rem;">
        <img src="${iterator[2]}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${iterator[1]}</h5>
          <p class="card-text">${iterator[4]}</p>
          <a href="detail.html?desc=${iterator[3]}&Product_ID=${iterator[0]}&Product_Name=${iterator[1]}&Product_Img=${iterator[2]}&Product_Price=${iterator[4]}" class="btn btn-dark justify-content-center d-flex rounded-pill">See Detail</a>
        </div>
      </div>
      </div>`
    }
    if(iterator[5] == "Gree"){
        Gree += `<div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-3 mb-3 d-flex justify-content-center">
        <div class="card" style="width: 18rem;">
        <img src="${iterator[2]}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${iterator[1]}</h5>
          <p class="card-text">${iterator[4]}</p>
          <a href="detail.html?desc=${iterator[3]}&Product_ID=${iterator[0]}&Product_Name=${iterator[1]}&Product_Img=${iterator[2]}&Product_Price=${iterator[4]}" class="btn btn-dark justify-content-center d-flex rounded-pill">See Detail</a>
        </div>
      </div>
      </div>`
    }

    
}
document.getElementById("productListing_h").innerHTML = Haier
document.getElementById("productListing_d").innerHTML = Dawlance
document.getElementById("productListing_o").innerHTML = Orient
document.getElementById("productListing_p").innerHTML = Pel
document.getElementById("productListing_g").innerHTML = Gree
var  brandlist= "";
for ( list of category) {
    brandlist += ` <li><a class="dropdown-item rounded-pill" href="category.html?brand=${list}" id="li_btn" style="background: linear gradient(to right, grey, black, black, grey);" >${list}</a></li>`
    
}
document.getElementById("list").innerHTML = brandlist;


$(document).ready(function(){
  $("#search_input").keyup(function(){
      var searchProduct = "";
      var search  = $("#search_input").val()
      for (const iterator of product) {
           if(search.includes(iterator[1])){
          searchProduct +=`
          <div id="productcards" class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-3 d-flex justify-content-center">
              <div class="card" style="width: 16rem;">
                  <img src="${iterator[2]}" class="card-img-top" alt="..." style="hight:200px;">
                      <div class="card-body">
                      <h6 class="card-title">${iterator[1]}</h6>
                        <p class="card-text fw-bold">Rs.${iterator[4]}</p>
                      <a href="detail.html?desc=${iterator[3]}&Product_ID=${iterator[0]}&Product_Name=${iterator[1]}&Product_Img=${iterator[2]}&Product_Price=${iterator[4]}" id="hover" class="btn btn-primary rounded-pill">See Detail</a>
                      </div>
                  </div>
              </div>
          `
          }else{

          }
      }

      if(searchProduct == ""){
          for (const iterator of products) {
             searchProduct +=`
             <div id="productcards" class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-3 d-flex justify-content-center">
                 <div class="card" style="width: 16rem;">
                     <img src="${iterator[2]}" class="card-img-top" alt="..." style="hight:200px;">
                         <div class="card-body">
                         <h6 class="card-title">${iterator[1]}</h6>
                           <p class="card-text fw-bold">Rs.${iterator[4]}</p>
                         <a href="detail.html?desc=${iterator[3]}&Product_ID=${iterator[0]}&Product_Name=${iterator[1]}&Product_Img=${iterator[2]}&Product_Price=${iterator[4]}" id="hover" class="btn btn-primary rounded-pill">See Detail</a>
                         </div>
                     </div>
                 </div>
             `
          }
          $("#productListing_h").html(searchProduct)
      }else{
          $("#productListing_h").html(searchProduct)
      }

  })
})




