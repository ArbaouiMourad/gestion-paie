
import React, { Component } from 'react'
import {Link} from "react-router-dom";
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import uniqid  from 'uniqid';

class Form1 extends Component {
  pdfPrint=()=>{
		const input = document.getElementById('containerPrint');
			html2canvas(input)
				.then((canvas) => {
					const imgData = canvas.toDataURL('image/png');
					const pdf = new jsPDF('p', 'px', 'a4');
					var width = pdf.internal.pageSize.getWidth();
					var height = pdf.internal.pageSize.getHeight();
					pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
					pdf.save("test.pdf");
				});
    
        
  }
  render() {
    return (

      <div  id="containerPrint" >
    <section className="my-5 py-5">
    <div className="container1">
    <div class="container py-5">
<div class="row">
    <div class="col-md-12">
        <h2 class="text-center mb-5"></h2>
        <div class="row">
            <div class="col-md-6 mx-auto">
                <div class="card border-secondary">
                    <div class="card-header">
                        <h3 class="mb-0 my-2">Employeur Employeur Employeur Employeur Employeur</h3>
                    </div>
                    <div class="card-body">
                        <form class="form" role="form" autocomplete="off" >
            <div class="form-group ">
             <label class="control-label " for="name">
              Nom-employeur
             </label>
             <input class="form-control" id="name" name="nom-employeur " type="text" />
            </div>
            <div class="form-group ">
             <label class="control-label " for="adreese">
             Adresse-employeur
             </label>
             <input class="form-control" id="subject" name="adresse-employeur" type="text" />
            </div>
           
            <div class="form-group ">
             <label class="control-label " for="numéro-employeur">
             Numéro-employeur
             </label>
             <input class="form-control" id="tel" name="numéro-employeur" type="text"/>
            </div>
            <div class="form-group ">
             <label class="control-label " for="tel-employeur">
             Numéro-télephone
             </label>
             <input class="form-control" id="tel" name="tel-employeur" type="text"/>
            </div>
             <div>
              
              <button class="btn btn-primary " name="button" type="button" 
            >
               ADD 
              </button>
              <button onClick={this.pdfPrint}>
                pdf
                </button>
              <Link to ='/form2'>
              <button>Openning Form Employé</button>
              </Link>
            </div>

            </form>
              
            </div>
            </div>
           </div>
            </div>
                 
      </div>
 
  </div>

</div>

      </div>
      
    </section>
    </div>
    )
  }
}
  export default Form1
