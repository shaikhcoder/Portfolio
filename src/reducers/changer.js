const Changer = (state = {} ,action)=>{

if(action.type === "profile")
return {'profile' : true, 'contact' : false, 'project' : false, }
else if(action.type === "contact")
return {'profile' : false, 'contact' : true, 'project' : false, }
else if(action.type === "project")
return {'profile' : false, 'contact' : false, 'project' : true, }

return {'profile' : true, 'contact' : false, 'project' : false, }

}

export default Changer

