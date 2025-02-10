Easily download form field data into a .csv file.
-----
Under "Prepare Form" add a button to your form using   ![{8C36E841-8D7C-4A95-AB51-767A4E982BD7}](https://github.com/user-attachments/assets/70d6e854-670a-44e5-a5ef-4f5ce18d2157)

![{09B9839F-1F22-4379-84EE-5D4C6D4AD4ED}](https://github.com/user-attachments/assets/9b9b33f8-da6f-43d9-a296-7fffeea3bc6b)

Under button properties click add and Copy and Paste the the javasript into the editor that pops up.

You can edit this later under ![{F0EFAC3B-72DF-4426-A217-C1B024981E12}](https://github.com/user-attachments/assets/eddda5fc-2c3b-407a-879c-7a7018e83fc4)  ![{C47D32E7-004E-4E2D-A969-CD29B0D0969E}](https://github.com/user-attachments/assets/de83fce2-670a-4117-b49e-d5b65516ef4f)


Code:
-----
'''js

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




