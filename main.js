const loadFile1=function(event)
{
	const image=document.getElementById('output1');
	image.src=URL.createObjectURL(event.target.files[0]);
};

const loadFile2=function(event)
{
	const image=document.getElementById('output2');
	image.src=URL.createObjectURL(event.target.files[0]);
};

const loadFile3=function(event)
{
	const image=document.getElementById('output3');
	image.src=URL.createObjectURL(event.target.files[0]);
};