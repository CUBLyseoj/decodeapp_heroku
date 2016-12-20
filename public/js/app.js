"use strict";
class App{
	constructor(){
		this.lipstick = [
			{
				"id": "1",
				"Name": "Kylie Matted Naked Lipstick",
				"Brand": "Kylie Matte Lipstick",
				"Color": "Matted Naked",
				"Img": "img/Kylie1.jpg"
			},
			{
				"id": "2",
				"Name": "Kylie Flutter Kiss Lipstick",
				"Brand": "Kylie Matte Lipstick",
				"Color": "Flutter Kiss",
				"Img": "img/Kylie2.jpg"
			},
			{
				"id": "3",
				"Name": "Kylie Thalia Lipstick",
				"Brand": "Kylie Matte Lipstick",
				"Color": "Thalia",
				"Img": "img/Kylie3.jpg"
			},
			{
				"id": "4",
				"Name": "Kylie Sultry Lipstick",
				"Brand": "Kylie Matte Lipstick",
				"Color": "Sultry",
				"Img": "img/Kylie4.jpg"
			}
		];
	}
	render(html,component){
		component.innerHTML += html;
	}
	reRender(html,component){
		component.innerHTML = html;
	}
	createLipstick(){
		let t = document.getElementById('newName');
		let y = document.getElementById('newBrand');
		let d = document.getElementById('newColor');
		let p = document.getElementById('newImg');
		let lipstick = {"Name":t.value,"Brand":y.value,"Color":d.value,"Img":p.value};
		this.lipstick.push(lipstick);
		t.value = y.value = d.value = p.value = '';
		this.lipstickListInfo();
	}
	deleteLipstick(key){		
		let table = document.getElementById('lipstickListInfo');
		table.deleteRow(key);
		this.lipstick.splice(key,1);
		let details = document.getElementById('lipstickDetails');
		details.innerHTML = "";
		
		this.lipstickListInfo();	
		this.showLipstickList();	
	}
	updateLipstick(key){
		let t = document.getElementById('updateName');
		let y = document.getElementById('updateBrand');
		let d = document.getElementById('updateColor');
		let m = this.lipstick[key];
		let lipstick = {"id":m.id,"Name":t.value,"Brand":y.value,"Color":d.value};
		this.lipstick[key] = lipstick;
		let details = document.getElementById('lipstickDetails');
		details.innerHTML = "";
		
		this.lipstickListInfo();
		this.showLipstickList();
	}
	showLandingPage(){
		$('#landingpage').show();
		$('#createpage').hide();
		$('#readpage').hide();
		$('#updatedeletepage').hide();
	}	
	showLipstickList(){
		$('#landingpage').hide();
		$('#createpage').hide();
		$('#readpage').show();
		$('#updatedeletepage').hide();
	}
	showLipstickCreate(){
		$('#landingpage').hide();
		$('#createpage').show();		
		$('#readpage').hide();
		$('#updatedeletepage').hide();
	}
	showUpdateDelete(){
		$('#landingpage').hide();
		$('#createpage').hide();		
		$('#readpage').hide();
		$('#updatedeletepage').show();
	}	
	searchLipstick(value=""){
		let objects = [];
		let r = this.lipstick;
		for(let i=0;i<r.length;i++){
			// console.log("r:",r[i].Title.toUpperCase().indexOf(title.toUpperCase()));
			let expr1 = (r[i].Name.toUpperCase().indexOf(value.toUpperCase()) > -1);
			if(expr1){
				objects.push(r[i]);
			}
		}
		return objects;		
	}
}
class Component extends App{
	constructor(){
		super();
	}
	lipstickList(){
		this.render(
			`	      
		<div class="header clearfix">
            <nav>
              <ul class="nav nav-pills float-xs-right">
                <li class="nav-item">
                  <a class="nav-link" href="#" onclick="component.showLandingPage()">
					<i class="fa fa-home"></i>
                  	Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#" onclick="component.showLipstickList()">
					<i class="fa fa-list"></i>
                  	Lipstick List</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" onclick="component.showLipstickCreate()">
					<i class="fa fa-film"></i>
                  	Add Lipstick</a>
                </li>
              </ul>
            </nav>            
          </div>
		<div id="landingpage">
          </div>          
		</div>
				
				<div id="createpage" class="row marketing">
					<div class="col col-sm-12">
						<div id="lipstickCreate"></div>						
					</div>
				</div>
				<div id="readpage" class="row marketing">
					<div class="col col-sm-12">
						<h1>Lipstick List</h1>
						<table id="lipstickList" class="table">
							<thead>
								<tr>
									<th>Lipstick</th>
									<th>Brand</th>
									<th>Action</th>
								</tr>
							</thead>
							<div class="form-group">
							    <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
							    <div class="input-group">
							      <div class="input-group-addon">
									  <span class="fa fa-search"></span>
									  <!-- checkout other fontawesome icons at http://fontawesome.io/icons/ -->
							      </div>
							      <input oninput="component.lipstickListInfo(this.value)" type="text" class="form-control" placeholder="Search">
							    </div>
							  </div>
							<tbody id="lipstickListInfo"></tbody>
						</table>
					</div>
				</div>
				<div id="updatedeletepage" class="row marketing">
					<div id="lipstickDetails"></div>
				</div>
				
        	`
			,document.getElementById('app'));
		this.lipstickListInfo();
		$('#landingpage').show();
		$('#createpage').hide();		
		$('#readpage').hide();
	}
	lipstickListInfo(filter){
		// console.log(filter);
		let html = "";
		// let m = this.movies;
		let m = this.searchLipstick(filter);
		for(let i=0;i<m.length;i++){	
			html += `
				<tr>
					<td>${m[i].Name}</td>
					<td>${m[i].Brand}</td>
					<td><button class="btn btn-primary"  onclick="component.lipstickDetails(${i})">Show Details</button></td>
				</tr>
			`;
		}
		this.reRender(html,document.getElementById('lipstickListInfo'));
	}
	lipstickDetails(key){
		this.reRender(
			`
				<h1>Movie Details</h1>
				<div class="media">
				    <div class="media-left">
				        <a href="#">
				            <img class="media-object img-thumbnail" src="${this.lipstick[key].Img}" width="220" />
				        </a>
				    </div>
				    <div class="media-body" id="lipstickDetailsInfo">
				        <h4 class="media-heading">${this.lipstick[key].Name}</h4>
				        Brand: ${this.lipstick[key].Brand}<br/>
						Color: ${this.lipstick[key].Color}<br/>
						<button class="btn btn-success" onclick="component.lipstickUpdate(${key})">Update</button>
						<button class="btn btn-danger" onclick="component.deleteLipstick(${key})">Delete</button>
						<button class="btn btn-info" onclick="component.showLipstickList()">Back</button>
					</div>	
				</div>			
			`,document.getElementById('lipstickDetails'));
			this.showUpdateDelete();
	}
	lipstickCreate(){
		this.render(
			`
				<h1>Lipstick Create</h1>
				Name: <input class="form-control" id="newName" type="" placeholder="Enter Name" /><br/>
				Brand: <input class="form-control" id="newBrand" type="" placeholder="Enter Brand" /><br/>
				Color: <input class="form-control" id="newColor" type="" placeholder="Enter Color" /><br/>
				Image: <input class="form-control" id="newImg" type="" placeholder="Enter Img" /><br/>
				<button class="btn btn-primary" onclick="component.createLipstick()">Create</button>
			`,document.getElementById('lipstickCreate'));
	}
	lipstickUpdate(key){
		this.reRender(
			`
				<div class="input-group input-group-md">
		        	<span class="input-group-addon">
		        		<span>ID</span>
		        	</span>
		        	<input readonly class="form-control" type="text" value="${this.lipstick[key].id}" /><br/>
		        </div>
		        <br/>
		        <div class="input-group input-group-md">
		        	<span class="input-group-addon">
		        		<span>Name</span>
		        	</span>
		        	<input class="form-control" id="updateName" type="text" value="${this.lipstick[key].Name}" /><br/>
		        </div>
		        <br/>
		        <div class="input-group input-group-md">
		        	<span class="input-group-addon">
		        		<span>Brand</span>
		        	</span>
		        	<input class="form-control" id="updateBrand" type="text" value="${this.lipstick[key].Brand}" /><br/>
		        </div>
		        <br/>
		        <div class="input-group input-group-md">
		        	<span class="input-group-addon">
		        		<span>Color</span>
		        	</span>
		        	<input class="form-control" id="updateColor" type="text" value="${this.lipstick[key].Color}" /><br/>
		        </div>	
		        <br/>
					<br/>
				<button class="btn btn-success btn-block" onclick="component.updateLipstick(${key})">Save</button>
			`,document.getElementById('lipstickDetailsInfo'));
	}
	
}
let component = new Component();
component.lipstickList();
component.lipstickCreate();
