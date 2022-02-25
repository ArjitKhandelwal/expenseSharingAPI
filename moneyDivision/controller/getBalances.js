module.exports.getBalances = async (req,res) =>{

	let groupData = [{
		"userId":"01",
		"name":"Arjit Khandelwal",
		"balance":{}
	},
	{
		"userId":"02",
		"name":"Prawal Pathak",
		"balance":{}
	},
	{
		"userId":"03",
		"name":"Shashank Rao",
		"balance":{}
	},{
		"userId":"04",
		"name":"Srishti Khanna",
		"balance":{}
	}]

let tempdata = groupData
let input = req.body.data

input.forEach(element => {
	if(element.method == "equal") equalDiv(element)
	else if(element.method == "exact") exactDiv(element)
	else if(element.method == "percent") percentDiv(element)	
})

function equalDiv(inputValue){
	let div = inputValue.expense/groupData.length
	tempdata.forEach(x=>{
		if(x.userId != inputValue.userId){
			x['balance'][inputValue.userId] = (x['balance'][inputValue.userId]) ?x['balance'][inputValue.userId] + div : x['balance'][inputValue.userId]

		}
	})
}

function percentDiv(inputValue){
	
	tempdata.forEach(x=>{
		if(x.userId != inputValue.userId){
			inputValue.splitDetails.forEach(y=>{
				div = (y.value/100)*(x.expense)
				if(x.userId==y.userId){
					x['balance'][inputValue.userId] = (x['balance'][inputValue.userId]) ?x['balance'][inputValue.userId] + div : x['balance'][inputValue.userId]
			
				}
			})
		}
	})
}

function exactDiv(inputValue){
	
	tempdata.forEach(x=>{
		if(x.userId != inputValue.userId){
			inputValue.splitDetails.forEach(y=>{
				div = y.value
				if(x.userId==y.userId){
					x['balance'][inputValue.userId] = (x['balance'][inputValue.userId]) ?x['balance'][inputValue.userId] + div : x['balance'][inputValue.userId]
			
				}
			})
		}
	})
}

res.send(tempdata)

}