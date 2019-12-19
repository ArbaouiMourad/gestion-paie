import React, { Component } from 'react'
import {Link} from "react-router-dom";
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import uniqid  from 'uniqid';
class Form2 extends Component{
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
   render(){
    return (
      <div  id="containerPrint" >
    <section className="my-5 py-5">
    <div className="container">
    <div class="container py-5">
<div class="row">
    <div class="col-md-12">
        <h2 class="text-center mb-5"></h2>
        <div class="row">
            <div class="col-md-6 mx-auto">
                <div class="card border-secondary">
                    <div class="card-header">
                        <h3 class="mb-0 my-2">Employé Employé Employé Employé Employé</h3>
                    </div>
                    <div class="card-body">
                        <form class="form" role="form" autocomplete="off" >
            <div class="form-group ">
             <label class="control-label " for="name-employeur">
             Nom-Employé
             </label>
             <input class="form-control" id="name" name="name-employeur" type="text" />
            </div>
            <div class="form-group ">
             <label class="control-label " for="prénom-employeur">
             Prénom-Employé
             </label>
             <input class="form-control" id="prénom-employeur" name="prénom-employeur" type="text" />
            </div>
           
            <div class="form-group ">
             <label class="control-label " for="category-employeur">
              Categorie-Employé
             </label>
             <input class="form-control" id="category-employeur" name="category-employeur" type="text"/>
            </div>
            <div class="form-group ">
             <label class="control-label " for="cnss-employeur">
            N°CNSS-Employé
             </label>
             <input class="form-control" id="cnss-employeur" name="cnss-employeur" placeholder="........." type="text" />
            </div>
            <div class="form-group">
            <label class="control-label " for="type-contrat">
              Type-Contrat
              </label>
        
             <input class="form-control" id="type-contrat" name="type-contrat" placeholder=".........." type="text" />
             </div>
             <div>
             <button onClick={this.pdfPrint}>
                pdf
                </button>
               <Link to ='/'>
              <button class="btn btn-primary " name="button" type="button" 
            >
               ADD 
              </button>
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

  export default Form2

