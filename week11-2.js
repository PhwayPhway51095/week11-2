var addbtn=document.getElementById('addbtn');
var newtask=document.getElementById('new-task');
var newtaskdate=document.getElementById('new-task-date');
var upcoming=document.getElementById('upcoming-tasks');
var due=document.getElementById('due-tasks');
var priorties=document.getElementById('priorties-tasks');
addbtn.onclick=addtask;
//addbtn.addEventListener('click',addtask);
function addtask()
{
	console.log('click');
	var task=newtask.value;
	if(task.length>0)
	{
		console.log(task);
		var taskdate=newtaskdate.value;
		console.log(taskdate);
		var today=new Date();
		console.log(today);
		var time=today.getTime();
		console.log(time);
		var tasktime=new Date(taskdate);
		console.log(tasktime);
		var milltask=tasktime.getTime();
		console.log(milltask);

		var li=document.createElement('li');
		var checkBox=document.createElement('input');
		checkBox.type="checkbox";
		var label1=document.createElement('label');
		label1.innerHTML=newtask.value;
		var label2=document.createElement('label');
		label2.innerHTML=newtaskdate.value;
		var deletebtn=document.createElement('button');
		deletebtn.innerText="delete";
		deletebtn.onclick=deletefun;
		li.appendChild(checkBox);
		li.appendChild(label1);
		li.appendChild(label2);
		li.appendChild(deletebtn);

		if(time>milltask)
		{
			
			console.log('duedate');
			
			console.log(Math.floor((time-milltask)/(24*60*60*1000)));
			var p=document.createElement('p');
			p.innerHTML="Time is "+Math.floor((time-milltask)/(24*60*60*1000))+" days past.";
			li.appendChild(p);
			due.appendChild(li);

			
		}
		else{
			console.log('upcoming');

			console.log(Math.abs(Math.floor((time-milltask)/(24*60*60*1000))));
			var p=document.createElement('p');
			p.innerHTML="Time to "+Math.abs(Math.floor((time-milltask)/(24*60*60*1000)))+" days";
			li.appendChild(p);
			upcoming.appendChild(li);
			checkBox.onchange=change;
		}
		function change()
		{
			if(this.checked)
			{
				var ul=this.parentNode.parentNode;
				var li=this.parentNode;
				ul.removeChild(li);
				priorties.appendChild(li);
			}
			else{
				var ul=this.parentNode.parentNode;
				var li=this.parentNode;
				ul.removeChild(li);
				upcoming.appendChild(li);
			}
		}
	}
	function deletefun()
	{
		var ul=this.parentNode.parentNode;
		var li=this.parentNode;
		ul.removeChild(li);

	}
	newtask.value="";
	newtaskdate.value="";
	

}