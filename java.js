var libro=document.getElementById('libro');
var imglibro=document.getElementById('imglibro');
var bienvenida=document.getElementById('bienvenida');
var flecha=document.getElementById('imgflecha');
var pag1=document.getElementById('pag1');
var pag2=document.getElementById('pag2');
var pag3=document.getElementById('pag3');
var pag4=document.getElementById('pag4');
var pag5=document.getElementById('pag5');
var pag6=document.getElementById('pag6');
var pag7=document.getElementById('pag7');
var imglibroabierto=document.getElementById('imglibroabierto');
var narrador=document.getElementById('narrador');
var audmariquita=document.getElementById('amariquita');
var audgri=document.getElementById('agrillo');
var audma=document.getElementById('amama');
var audmarip=document.getElementById('amariposa');
var audmosqui=document.getElementById('amosquito');
var aunoo=document.getElementById('auno');
var ados=document.getElementById('ados');
var atres=document.getElementById('atres');
var acuatro=document.getElementById('acuatro');
var bienvenida=function () {
	libro.className="libro";
		pag1.className="bloqueado";
		pag2.className="bloqueado";
		pag3.className="bloqueado";
	pag4.className="bloqueado";
	pag5.className="bloqueado";
	pag6.className="bloqueado";
	pag7.className="bloqueado";
}
var pagina1=function () {
	libro.className="bloqueado";
		pag1.className="pag1";
				pag2.className="bloqueado";
			pag3.className="bloqueado";
		pag4.className="bloqueado";
		pag5.className="bloqueado";
	pag6.className="bloqueado";
	pag7.className="bloqueado";
}
var pagina2=function () {
	libro.className="bloqueado";
		pag1.className="bloqueado";
		pag2.className="pag1";
			pag3.className="bloqueado";
		pag4.className="bloqueado";
		pag5.className="bloqueado";
	pag6.className="bloqueado";
	pag7.className="bloqueado";
}
var pagina3=function () {
	libro.className="bloqueado";
		pag1.className="bloqueado";
		pag2.className="bloqueado";
			pag3.className="pag1";
	pag4.className="bloqueado";
	pag5.className="bloqueado";
	pag6.className="bloqueado";
	pag7.className="bloqueado";
}
var pagina4=function () {
	libro.className="bloqueado";
	pag1.className="bloqueado";
	pag2.className="bloqueado";
	pag3.className="bloqueado";
	pag4.className="pag1";
	pag5.className="bloqueado";
	pag6.className="bloqueado";
	pag7.className="bloqueado";
}
var pagina5=function () {
	libro.className="bloqueado";
	pag1.className="bloqueado";
	pag2.className="bloqueado";
	pag3.className="bloqueado";
	pag4.className="bloqueado";
	pag5.className="pag1";
	pag6.className="bloqueado";
	pag7.className="bloqueado";
}
var pagina6=function () {
	libro.className="bloqueado";
	pag1.className="bloqueado";
	pag2.className="bloqueado";
	pag3.className="bloqueado";
	pag4.className="bloqueado";
	pag5.className="bloqueado";
	pag6.className="pag1";
	pag7.className="bloqueado";
}
var pagina7=function () {
	libro.className="bloqueado";
	pag1.className="bloqueado";
	pag2.className="bloqueado";
	pag3.className="bloqueado";
	pag4.className="bloqueado";
	pag5.className="bloqueado";
	pag6.className="bloqueado";
	pag7.className="pag1";
}
var audmari=function(){
		audmariquita.play();
}

var audgrillo=function(){
		audgri.play();
}
var audmama=function(){
		audma.play();
}
var audmariposa=function(){
		audmarip.play();
}

var audmosquito=function(){
		audmosqui.play();
}
var audpuno=function(){
		aunoo.play();
}
var audpdos=function(){
		ados.play();
}
var audptres=function(){
		atres.play();
}
var audpcuatro=function(){
		acuatro.play();
}