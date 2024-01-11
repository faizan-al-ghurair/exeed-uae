import $ from "jquery";

export const SideBar = () =>{
   
 window.onload = function () {
  let sliderOne = document.getElementById("slider-1");
  let sliderTwo = document.getElementById("slider-2");
  let displayValOne = document.getElementById("range1");
  let displayValTwo = document.getElementById("range2");
  let minGap = 1;
  
  function slideOne() {
      console.log("ran");
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
  }

  function slideTwo() {
      console.log("ran 2");
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
  }

  sliderOne.addEventListener('input', slideOne);
  sliderTwo.addEventListener('input', slideTwo);



  let sliderOne1 = document.getElementById("slider-11");
  let sliderTwo1 = document.getElementById("slider-21");
  let displayValOne1 = document.getElementById("range11");
  let displayValTwo1 = document.getElementById("range21");
  let minGap1 = 1;
  
  function slideOne1() {
      console.log("ran");
    if (parseInt(sliderTwo1.value) - parseInt(sliderOne1.value) <= minGap1) {
      sliderOne1.value = parseInt(sliderTwo1.value) - minGap1;
    }
    displayValOne1.textContent = "AED "+sliderOne1.value;
  }

  function slideTwo1() {
      console.log("ran 2");
    if (parseInt(sliderTwo1.value) - parseInt(sliderOne1.value) <= minGap1) {
      sliderTwo1.value = parseInt(sliderOne1.value) + minGap1;
    }
    displayValTwo1.textContent = "AED "+sliderTwo1.value;
  }

  sliderOne.addEventListener('input', slideOne);
  sliderTwo.addEventListener('input', slideTwo);
  sliderOne1.addEventListener('input', slideOne1);
  sliderTwo1.addEventListener('input', slideTwo1);
     
        slideOne();
        slideTwo();
        // slideOne1();
        // slideTwo1();
      };
        

    return(
        <div className="sidebar">
            <a className="clear-link">Clear All</a>
            <span className="line"></span>
            <label className="side-label">Model</label>
            <select className="side-input">
                <option value="All">All</option>
                <option value="XYZ">XYZ</option>
            </select>
            <span className="line"></span>
            <label className="side-label">Year</label>

            <div class="wrapper">
                <div class="values">
                    <span id="range1">2010</span>
                    <span id="range2">2024</span>
                </div>
                <div class="container1">
                    <div class="slider-track"></div>
                    <input type="range" min="2010" max="2024"  defaultValue="2010" id="slider-1" />
                    <input type="range" min="2010" max="2024" defaultValue="2024" id="slider-2" />
                </div>
            </div>

            <span className="line mt-5"></span>
            <label className="side-label">Price</label>

            <div class="wrapper">
                <div class="values">
                    <span id="range11">AED 20000</span>
                    <span id="range21">AED 40000</span>
                </div>
                <div class="container1">
                    <div class="slider-track1"></div>
                    <input type="range" min="20000" max="40000"  defaultValue="20000" id="slider-11" />
                    <input type="range" min="20000" max="40000" defaultValue="40000" id="slider-21" />
                </div>
            </div>

            <span className="line"></span>
            <label className="side-label">Exterior</label>
            <select className="side-input">
                <option value="Color">Color</option>
            </select>
            <span className="line"></span>
            <label className="side-label">Interior</label>
            <select className="side-input">
                <option value="Color">Color</option>
            </select>
            
        </div>
    )
}