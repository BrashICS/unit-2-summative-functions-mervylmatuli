/**
 * Unit 2 Summative Task - Geometry Helper
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/
document.getElementById("rect_prism_volume").addEventListener("click", rect_prism_volume);
document.getElementById("rect_prism_area").addEventListener("click", rect_prism_area);
document.getElementById("sphere_volume").addEventListener("click", sphere_volume);
document.getElementById("sphere_area").addEventListener("click", sphere_area);
document.getElementById("line_length").addEventListener("click", line_length);
document.getElementById("line_slope").addEventListener("click", line_slope);
document.getElementById("mid_point1").addEventListener("click", mid_point1);
document.getElementById("mid_point2").addEventListener("click", mid_point2);

document.getElementById("vertex").addEventListener("click", vertex);

/*** Functions ***/

// Round to the nearest `decimals` number of decimals
function round(value, decimals) {
    return Math.round(value * 10**decimals) / 10**decimals;
}

// Round to the user's number of decimals
function round_user(value) {
    // Get the number of decimals from the "rounding" box
    let d = Number(document.getElementById("rounding").value)
}

// java script function
function delta(a, b) {
    return a-b;
}

// slope function
function slope (x1, y1, x2, y2) {
    
}

// average of 2 numbers function

function average(n1, n2) {
    return 
}




// rectangular prism volume function 
function rect_prism_volume() {
    let l = Number(document.getElementById("length").value)
    let w = Number(document.getElementById("width").value)
    let h = Number(document.getElementById("height").value)
    let r_volume = l*w*h
    document.getElementById("r_volume").textContent = l*w*h
    
}

function rect_prism_area() {
    let l = Number(document.getElementById("length").value)
    let w = Number(document.getElementById("width").value)
    let h = Number(document.getElementById("height").value)
    let r_area = 2*(w*l+l*h+h*w)
    console.log(r_area);
    document.getElementById("r_area").textContent = r_area
}

  
function sphere_volume() {
    let r = Number(document.getElementById("radius").value)
    let s_volume = 4/3*(Math.PI*r**3)
    console.log(s_volume);
    document.getElementById("s_volume").textContent = s_volume

}

function sphere_area() {
    let r = Number(document.getElementById("radius").value)
    let s_area = 4*(Math.PI*r**2)
    console.log(s_area);
    document.getElementById("s_area").textContent = s_area

}

function line_length(x1, y1, x2, y2) {
    let x01 = Number(document.getElementById("x1").value)
    let x02 = Number(document.getElementById("x2").value)
    let y01 = Number(document.getElementById("y1").value)
    let y02 = Number(document.getElementById("y2").value)
    let l_length = Math.sqrt((x02 - x01)**2) + ((y02 - y01)**2)
    console.log(l_length)
    document.getElementById("l_length").textContent = l_length
}

function line_slope(x1, y1, x2, y2) {
    let x01 = Number(document.getElementById("x1").value)
    let x02 = Number(document.getElementById("x2").value)
    let y01 = Number(document.getElementById("y1").value)
    let y02 = Number(document.getElementById("y2").value)
    let l_slope = (y02 - y01/x02 - x01)
    console.log(l_slope)
    document.getElementById("l_slope").textContent = l_slope
}
    function mid_point1(x1, y1, x2, y2) {
        let x01 = Number(document.getElementById("x1").value)
        let x02 = Number(document.getElementById("x2").value)
        let m_point1 = ((x01 + x02) / 2)
        console.log(m_point1)
        document.getElementById("m_point1").textContent = m_point1
}
function mid_point2(x1, y1, x2, y2) {
    let y01 = Number(document.getElementById("y1").value)
    let y02 = Number(document.getElementById("y2").value)
    let m_point2 = ((y01 + y02) / 2)
    console.log(m_point2)
    document.getElementById("m_point2").textContent = m_point2
}

// ids

// Calculate the y-value of a parabola from standand form
function y_quad(a, b, c, x) {

}

// Determine the zeros of a quadratic using user-inputs for a, b, and c
function zeros() {
}

// Determine the vertex of a quadratic using user-inputs for a, b, and c
function vertex() {
}
