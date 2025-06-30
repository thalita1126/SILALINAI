function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ZOzpPaqdMK":
        Script1();
        break;
      case "5yTM47C6GaZ":
        Script2();
        break;
      case "5gZb869Vd8G":
        Script3();
        break;
      case "5rpHHQOdCh2":
        Script4();
        break;
      case "6plJLV3StYw":
        Script5();
        break;
      case "5qPoX7zC3Yb":
        Script6();
        break;
  }
}

function Script1()
{
  if(void 0===window.stencilsetanswers){GetPlayer();let e="https://cluelabs.com/ai/display/answers-init-sl";xhttp=new XMLHttpRequest,xhttp.onreadystatechange=function(){if(4==this.readyState&&200==this.status&&""!=this.responseText){let e=this.responseText,t=document.getElementsByTagName("head")[0],s=document.createElement("script");t.appendChild(s),s.appendChild(document.createTextNode(e)),window.stencilsetanswers=!0}},xhttp.open("GET",e,!0),xhttp.send()}
}

function Script2()
{
  clabsAnswersGetAnswer();
}

function Script3()
{
  clabsAnswersRecord();
}

function Script4()
{
  clabsAnswersSendRecording(false);
}

function Script5()
{
  clabsAnswersSendRecording(true);
}

function Script6()
{
  clabsAnswersSendRecording(false);
}

