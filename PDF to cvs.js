//-------------------------------------------------------------
//-----------------Do not edit the XML tags--------------------
//-------------------------------------------------------------

//<AcroForm>
//<ACRO_source>Extract:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Extract:Annot1:MouseUp:Action1 ***********/

var fileName = "PDF Out"; //or something like: this.getField("lastname").value;
fileName += ".csv"

var num = this.numFields - 1;

var strOut = "";

for (var i = 0; i < num; i++)
{  
  strOut += this.getNthFieldName(i);
  if (i != num){ 
     strOut += ","; 
  }       
}

strOut += "\n";

for (var i = 0; i < num; i++)
{ 
  if (this.getField(this.getNthFieldName(i)).value.length > 0){
    strOut += this.getField(this.getNthFieldName(i)).value;
  }else{
    strOut += "Null"
  }
  if (i != num){
    strOut += ",";
  }        
}

this.createDataObject(fileName, strOut);
this.exportDataObject({cName: fileName, nLaunch: 1});
this.removeDataObject(fileName);

//</ACRO_script>
//</AcroForm>
