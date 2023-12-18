import React from 'react'
import { useState } from 'react'

function Neworder() {
const [taxt, settaxt]=useState({
  Patientname:'',
  age  :'',
  six:'',
  Thenumberofteeth:'',
  Toothcolor:'',
  materialtype:'',
note:'',

})
const on =(event)=>{
settaxt (event.target.name)



}
  return (
   <div>
<form action="">


<div className='col-md-6'>
                    <label for="validationDefault01" class="form-label" name='Patientname'>Patient name</label>
                    <input type="text"  class="form-control  "onChange={on} id="validationDefault01" 
                     required />
                </div>

                <div class='col-md-6'>
                    <label for="validationDefault01" class="form-label ">Age</label>
                    <input type="text" name="age" class="form-control " onChange={on} id="validationDefault01" placeholder="age"
                         required />
                </div>
                <div class="mb-3 col-md-6">
            <label for="validationDefault01" class="form-label ">six</label>
            <select class="form-select form-select- mb-3 col-md-6 "onChange={on}name='six'>
                <option selected></option>
                <option value=""></option>
                <option value="man">man</option>
                <option value="wman">wman</option>
            </select>
        </div>
        <div class="mb-3 col-md-6">
            <label for="validationDefault01" class="form-label "> number of teeth</label>
            <input type="text" name="Thenumberofteeth" class="form-control  "  onChange={on}id="Thenumberofteeth"
                placeholder="The number of teeth" />
        </div>
        <div class="mb-3 col-md-6">
            <label for="validationDefault01" class="form-label ">Toothcolor</label>
            <select name="Toothcolor" class="form-select " onChange={on} aria-label="Default select example">
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="A3">A3</option>
                <option value="A3,5">A3,5</option>
                <option value="A4">A4</option>
                <option value="B1">B1</option>
                <option value="B2">B2</option>
                <option value="B3">B3</option>
                <option value="B4">B4</option>
                <option value="C1">C1</option>
                <option value="C1">C1</option>
                <option value="C2">C2</option>
                <option value="C3">C3</option>
                <option value="C4">C4</option>
                <option value="D2">D2</option>
                <option value="D3">D3</option>
                <option value="D4">D4</option>
                <option value="BL1">BL1</option>
                <option value="BL2">BL2</option>
                <option value="BL3">BL3</option>
                <option value="BL4">BL4</option>
            </select>
        </div>
        <div class="mb-3 col-md-6">
            <label for="validationDefault01" class="form-label ">tayp</label>
            <select name="materialtype" class="form-select "onChange={on} aria-label="Default select example">
                <option value="VENEERS">VENEERS</option>
                <option value="ZIRCON">ZIRCON</option>
                <option value="P.F.M">P.F.M</option>
                <option value="IMPLAUT">IMPLAUT</option></select>
        </div>
        <div>
        <label for="validationDefault01" class="form-label ">note</label>
        <textarea class="form-control mt-5 " placeholder="Leave a comment here"onChange={on}id="floatingTextarea" name='note'></textarea>
    </div>   
    <button type="submit" class="btn btn-primary">send</button>
</form>



   </div>
  )
}

export default Neworder