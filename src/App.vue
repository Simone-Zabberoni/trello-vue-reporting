<template>
  <div id="app">
    <div class="header">
        <div class="header">
            <h1> <img src="./assets/logo.png" style="width: 20px"> Trello reporting tool v0.0.4</h1>
            <p>VueJS Version - Simone Zabberoni </p>
        </div>

      
    </div>
    
    <div>
        <div>
            <Login />        
        </div>
        <button v-on:click="createPDF">Export to PDF</button>  
        <Boards />
      
    </div>

  </div>
</template>

<script>

import Login from './components/Login.vue'
import Boards from './components/Boards.vue'
import jsPDF from 'jspdf'

import html2canvas from 'html2canvas';


export default {
  name: 'app',
  components: {
    Login,
    Boards
  }, 
  
  methods: {
    createPDF () {

//window.html2canvas = html2canvas;

/*  // funziona single page
html2canvas(document.body).then(function(canvas) {
    var imgData = canvas.toDataURL(
                    'image/png');              
                var doc = new jsPDF('p', 'mm');
                doc.addImage(imgData, 'PNG', 10, 10);
                doc.save('sample-file.pdf');
});
*/

// provamo
var somename = this.$store.state.member.fullName;

html2canvas(document.getElementById("boardContainer"))
.then(function(canvas) {
    var imgWidth = 210; 
    var pageHeight = 295;  
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;
    var doc = new jsPDF('p', 'mm');
    var position = 0;

    var imgData = canvas.toDataURL('image/png');

    doc.text(somename);
    doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
    }
    doc.save( 'file.pdf');


});




    } //createPDF
}


}

</script>



<style>
#app {
  font-family: Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

p {
    padding-right: 4px;
    padding-left: 4px;
    padding-top: 2px;
    padding-bottom: 2px;
    margin: 2px; 
}

div  {
    clear: both; 
    float: none;
}

h1 {
    padding-right: 4px;
    padding-left: 4px;
    padding-top: 2px;
    padding-bottom: 2px;
    margin: 2px; 
}

h2 {
    text-align: left;
    text-decoration: underline;
    font-style: italic;

    padding-right: 4px;
    padding-left: 4px;
    padding-top: 2px;
    padding-bottom: 2px;
    margin: 2px; 
}

h3 {
    padding-right: 4px;
    padding-left: 4px;
    padding-top: 2px;
    padding-bottom: 2px;
    margin: 2px; 
}

.board {
   /* border-color: red; 
    border-style: solid;  */
    clear: both; 
    float: none;
    
}

.list {
    /*border-color: green; 
    border-style: solid;*/
}

.card {
    /*border-color: purple; 
    border-style: solid; */
    background-color: WhiteSmoke;
    margin: 5px;
    padding: 2px;
}

.card-header {
    float: left;
}

.card-name {
    float: left;
    text-align: left; 
}

.card-labels {
    float: left;
    clear: none;

}

.card-label-object {
    color: white;
    font-variant: small-caps;
    font-style: italic;
    font-size: small;

    padding-right: 4px;
    padding-left: 4px;
    padding-top: 2px;
    padding-bottom: 2px;
    margin: 2px; 
    border-radius: 5px;
    float: left;
    clear: none;
}

.card-body {
    text-align: left; 
    clear: both; 
    float: none;
    
    padding-right: 4px;
    padding-left: 4px;
    padding-top: 2px;
    padding-bottom: 2px;
    margin: 2px; 
}


.card-comment-box {
    background-color: White;  
    padding-right: 4px;
    padding-left: 4px;
    padding-top: 2px;
    padding-bottom: 2px;
    margin: 2px; 
    /*border-color: red; 
    border-style: solid; */
}

.card-comment {
  /*  font-variant: small-caps; */
    font-style: italic;
    font-size: small;
    padding-left: 4px;
}

.header {
    float: left;
    clear: none;
}

.loginHeader {
    padding-top: 10px;
    text-align: left;
}

.loginHeader p {
    font-style: italic;
    font-size: small;
}

.board-selector {
    padding-top: 10px;
    text-align: left;
}


.board-selector p {
    font-style: italic;
    font-size: small;
}

</style>
