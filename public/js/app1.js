"use strict";
class App{
	constructor(){
		this.lipstick = [
			{
				"id": "1",
				"Name": "Kylie Matted Naked Lipstick",
				"Brand": "Kylie Matte Lipstick",
				"Color": "Matted Naked",
				"img": "Kylie1.jpg"
			},
			{
				"id": "2",
				"Name": "Kylie Flutter Kiss Lipstick",
				"Brand": "Kylie Matte Lipstick",
				"Color": "Flutter Kiss",
				"img": "Kylie2.jpg"
			},
			{
				"id": "3",
				"Name": "Kylie Thalia Lipstick",
				"Brand": "Kylie Matte Lipstick",
				"Color": "Thalia",
				"img": "Kylie3.jpg"
			},
			{
				"id": "4",
				"Name": "Kylie Sultry Lipstick",
				"Brand": "Kylie Matte Lipstick",
				"Color": "Sultry",
				"img": "Kylie4.jpg"
			}
		];
	}
	render(html, component){
		component.innerHTML += html;
	}
	reRender(html, component){
		component.innerHTML = html;
	}
	createMovie(){
		let t = document.getElementById('newName');
		let y = document.getElementById('newBrand');
		let d = document.getElementById('newColor');
		let p = document.getElementById('newImg');
		let lipsticks = {"Name":t.value,"Brand":y.value,"Color":d.value,"Img":p.value};
		this.lipsticks.push(lipsticks);
		t.value = y.value = d.value = p.value = a.value = ''; //Clear Fields
		this.movieListInfo();
	}
	deleteMovie(key){		
		let table = document.getElementById('movieListInfo');
		table.deleteRow(key);
		this.movies.splice(key,1);
		// let m = this.movies;
		// let dummy = [];
		// for(let i=0;i<m;i++){
		// 	if(key!=i){
		// 		dummy.push(m[i]);
		// 	}
		// }
		// this.movies = dummy;
		let details = document.getElementById('movieDetails');
		details.innerHTML = "";
		
		this.movieListInfo();	
		this.showMovieList();	
	}
	updateMovie(key){
		let t = document.getElementById('updateName');
		let y = document.getElementById('updateBrand');
		let d = document.getElementById('updateColor');
		let a = document.getElementById('updateImg');
		let m = this.movies[key];
		let movie = {"id":m.id,"Name":t.value,"Brand":y.value,"color":d.value,"Img":p.value};
		this.lipsticks[key] = lipsticks;
		let details = document.getElementById('Lipstick Details');
		details.innerHTML = "";
		
		this.lipstickListInfo();
		this.showlipsctickList();
	}
	showLandingPage(){
		$('#landingpage').show();
		$('#createpage').hide();
		$('#readpage').hide();
		$('#updatedeletepage').hide();
	}	
	showMovieList(){
		$('#landingpage').hide();
		$('#createpage').hide();
		$('#readpage').show();
		$('#updatedeletepage').hide();
	}
	showMovieCreate(){
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
			// console.log(name," vs ",r[i].name," = ",expr);
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
                  <a class="nav-link " href="#" onclick="component.showLipstick()">
					<i class="fa fa-list"></i>
                  	Lipstick </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" onclick="component.showLipstick()">
					<i class="fa fa-film"></i>
                  	Lipstick </a>
                </li>
              </ul>
            </nav>            
            <h3 class="text-muted">
            	<img class="decode-logo" src="img/decode.png"  />
            	Movie App
            </h3>
          </div>
		<div id="landingpage">
          <div class="jumbotron">
            <h1 class="display-3">Lipstick</h1>
            <p class="lead">A simple decode demo app about movie.</p>
            <i class="fa fa-film fa-5x red"></i>
          </div>
          <div class="row marketing">
            <div class="col-lg-6">              
              <h4>
              	<i class="fa fa-gears green"></i>
              	Create Movie</h4>
              <p>Provides an interface to allow adding new movie to the list. </p>
              <h4>
				<i class="fa fa-gears green"></i>
              	Read Movie</h4>
              <p>Provides a list view that supports movie search and show details features.</p>
            </div>
            <div class="col-lg-6">
              <h4>
              	<i class="fa fa-gears green"></i>
              	Update Movie</h4>
              <p>Allows the user to modify the content of a particular movie.</p>
              <h4>
              	<i class="fa fa-gears green"></i>
              	Delete Movie</h4>
              <p>Allows the user to remove a particular movie object from the list.</p>
            </div>
          </div>          
		</div>
				
				<div id="createpage" class="row marketing">
					<div class="col col-sm-12">
						<div id="movieCreate"></div>						
					</div>
				</div>
				<div id="readpage" class="row marketing">
					<div class="col col-sm-12">
						<h1>Movie List</h1>
						<table id="movieList" class="table">
							<thead>
								<tr>
									<th>Name</th>
									<th>Brand</th>
									<th>Color</th>
									<th>Img</th>
								</tr>
							</thead>
							<div class="form-group">
							    <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
							    <div class="input-group">
							      <div class="input-group-addon">
									  <span class="fa fa-search"></span>
									  <!-- checkout other fontawesome icons at http://fontawesome.io/icons/ -->
							      </div>
							      <input oninput="component.movieListInfo(this.value)" type="text" class="form-control" placeholder="Search">
							    </div>
							  </div>
							<tbody id="lipstickListInfo"></tbody>
						</table>
					</div>
				</div>
				<div id="updatedeletepage" class="row marketing">
					<div id="LipstickDetails"></div>
				</div>
				
          <footer class="footer">
            <p>&copy; decode 2016</p>
          </footer>
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
					<td>${m[i].name}</td>
					<td>${m[i].brand}</td>
					<td><button class="btn btn-primary"  onclick="component.lipstickDetails(${i})">Show Details</button></td>
				</tr>
			`;
		}
		this.reRender(html,document.getElementById('lipstickListInfo'));
	}
	lipstickDetails(key){
		this.reRender(
			`
				<h1>Lipstick Details</h1>
				<div class="media">
				    <div class="media-left">
				        <a href="#">
				            <img class="media-object img-thumbnail" src="${this.lipstick[key].Poster}" width="220" />
				        </a>
				    </div>
				    <div class="media-body" id=":LipstickDetailsInfo">
				        <h4 class="media-heading">${this.lipstick[key].Name}</h4>
				        Name: ${this.lipstick[key].name}<br/>
						Brand: ${this.lipstick[key].Brand}<br/>
						Color: ${this.lipstick[key].Color}<br/>
						<button class="btn btn-success" onclick="component.lipstickUpdate(${key})">Update</button>
						<button class="btn btn-danger" onclick="component.deletelipstick(${key})">Delete</button>
						<button class="btn btn-info" onclick="component.showLipstickList()">Back</button>
					</div>	
				</div>			
			`,document.getElementById('LipstickDetails'));
			this.showUpdateDelete();
	}
	lipstickCreate(){
		this.render(
			`
				<h1>Lipstick Create </h1>
				Name: <input class="form-control" id="newName" type="" placeholder="Enter Name" /><br/>
				Brand: <input class="form-control" id="newBrand" type="" placeholder="Enter Brand" /><br/>
				Color: <input class="form-control" id="newColor" type="" placeholder="Enter Color" /><br/>
				: <input class="form-control" id="newPoster" type="" placeholder="Enter Poster" /><br/>
				Actors: <input class="form-control" id="newActors" type="" placeholder="Separate using comma" /><br/>
				<button class="btn btn-primary" onclick="component.createMovie()">Create</button>
			`,document.getElementById('LipstickCreate'));
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
		        	<input class="form-control" id="updateColor" type="text" value="${this.lipstick[key].color}" /><br/>
		        </div>	
		        <br/>
		        <div class="input-group input-group-md">
		        	<span class="input-group-addon">
		        		<span>img</span>
		        	</span>
		        	<input class="form-control" id="updateimg" type="text" value="${this.lipstick[key].img}" /><br/>
		        </div>	
				<br/>
				<button class="btn btn-success btn-block" onclick="component.updateMovie(${key})">Save</button>
			`,document.getElementById('LipstickDetailsInfo'));
	}
	
}
let component = new Component();
component.lipstickList();
component.lipstickCreate();