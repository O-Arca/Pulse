Char = function(name,free_points){
	this.name = name;
	this.appearance = "";
	this.free_points = free_points;
	this.parameters = new Parameters(this);
	this.effects = new Effects(this);
	this.feats = new Feats(this);
	this.skills = new Skills(this);
	this.dr = new DR(this);
	this.bodyparts = new Bodyparts(this);
}

Parameters = function(parameters){
	this.strength = {
		type: "base",
		total_points_cost: function(){
			var total = 0;
			for(var i=0; i<=this.base_value; i++){
				total+= this.base_cost*i;
			}
			return total;
		},
		base_cost: 10,
		modificator: 0,
		bonus: 0,
		base_value: 0,
		value: function(){return this.base_value+this.modificator+this.bonus}
	};
	this.dextrity = {
		type : "base",
		base_cost: 10,
		total_points_cost: function(){
			var total = 0;
			for(var i=0; i<=this.base_value; i++){
				total+= this.base_cost*i;
			}
			return total;
		},
		modificator: 0,
		bonus: 0,
		base_value: 0,
		value: function(){return this.base_value+this.modificator+this.bonus}
	};
	this.constitution = {
		type: "base",
		base_cost: 10,
		total_points_cost: function(){
			var total = 0;
			for(var i=0; i<=this.base_value; i++){
				total+= this.base_cost*i;
			}
			return total;
		},
		modificator: 0,
		bonus: 0,
		base_value: 0,
		value: function(){return this.base_value+this.modificator+this.bonus}
	};
	this.mind = {
		type: "base",
		base_cost: 10,
		total_points_cost: function(){
			var total = 0;
			for(var i=0; i<=this.base_value; i++){
				total+= this.base_cost*i;
			}
			return total;
		},
		modificator: 0,
		bonus: 0,
		base_value: 0,
		value: function(){return this.base_value+this.modificator+this.bonus}
	};
	this.charisma = {
		type: "base",
		base_cost: 10,
		total_points_cost: function(){
			var total = 0;
			for(var i=0; i<=this.base_value; i++){
				total+= this.base_cost*i;
			}
			return total;
		},
		modificator: 0,
		bonus: 0,
		base_value: 0,
		value: function(){return this.base_value+this.modificator+this.bonus}
	};
	this.atack = {
		type: "secondary",
		base_cost: 5,
		total_points_cost: function(){
			var total = 0;
			for(var i=0; i<=this.base_value; i++){
				total+= this.base_cost*i;
			}
			return total;
		},
		modificator: 0,
		bonus: 0,
		base_value: 0,
		value: function(){return this.base_value+this.modificator+this.bonus}
	};
	this.defence = {
		type: "secondary",
		base_cost: 5,
		total_points_cost: function(){
			var total = 0;
			for(var i=0; i<=this.base_value; i++){
				total+= this.base_cost*i;
			}
			return total;
		},
		modificator: 0,
		bonus: 0,
		base_value: 0,
		value: function(){return this.base_value+this.modificator+this.bonus}
	};
	this.base_hp = {
		type: "secondary",
		base_cost: 3,
		total_points_cost: function(){
			var total = 0;
			for(var i=0; i<=this.base_value; i++){
				total+= this.base_cost*i;
			}
			return total;
		},
		modificator: 0,
		bonus: 0,
		base_value: 0,
		value: function(){return 5+parameters.constitution.value()+this.base_value+this.modificator+this.bonus}
	};
	this.will = {
		type: "secondary",
		base_cost: 2,
		total_points_cost: function(){
			var total = 0;
			for(var i=0; i<=this.base_value; i++){
				total+= this.base_cost*i;
			}
			return total;
		},
		modificator: 0,
		bonus: 0,
		base_value: 0,
		value: function(){return parameters.charisma.value()+this.base_value+this.modificator+this.bonus}
	};
	this.regeneration = {
		type: "secondary",
		base_cost:5,
		total_points_cost: function(){
			var total = 0;
			for(var i=0; i<=this.base_value; i++){
				total+= this.base_cost*i;
			}
			return total;
		},
		modificator: 0,
		bonus: 0,
		base_value: 0,
		value: function(){return parameters.constitution.value()+this.base_value+this.modificator+this.bonus}
	};
	this.perception = {
		type: "secondary",
		base_cost: 5,
		total_points_cost:function(){
			var total = 0;
			for(var i=0; i<=this.base_value; i++){
				total+= this.base_cost*i;
			}
			return total;
		},
		bonus: 0,
		base_value: 0,
		value: function(){return parameters.mind.value()+this.base_value+this.modificator+this.bonus}
	};
	this.stamina = {
		type: "secondary",
		base_cost: 2,
		total_points_cost: function(){
			var total = 0;
			for(var i=0; i<=this.base_value; i++){
				total+= this.base_cost*i;
			}
			return total;
		},
		modificator: 0,
		bonus: 0,
		base_value: 0,
		value: function(){return parameters.constitution.value()+this.base_value+this.modificator+this.bonus}
	};
	this.visible_distance = {
		type: "helper",
		base_cost: 2,
//		total_points_cost: function(){
//			var total = 0;
//			for(var i=0; i<=this.base_value; i++){
//				total+= this.base_cost*i;
//			}
//			return total;
//		},
		total_points_cost: function(){return 0}, //should not be available to buy
		modificator: 0,
		bonus: 0,
		base_value: 0,
		value: function(){return parameters.perception.value()+this.base_value+this.modificator+this.bonus}
	};
	this.atack_distance = {
		type: "helper",
		base_cost: 2,
//		total_points_cost: function(){
//			var total = 0;
//			for(var i=0; i<=this.base_value; i++){
//				total+= this.base_cost*i;
//			}
//			return total;
//		},
		total_points_cost: function(){return 0}, //should not be available to buy
		modificator: 0,
		bonus: 0,
		base_value: 0,
		value: function(){return this.base_value+this.modificator+this.bonus}
	};
	this.max_weight = {
		type: "helper",
		base_cost: 2,
//		total_points_cost: function(){
//			var total = 0;
//			for(var i=0; i<=this.base_value; i++){
//				total+= this.base_cost*i;
//			}
//			return total;
//		},
		total_points_cost: function(){return 0}, //should not be available to buy
		modificator: 0,
		bonus: 0,
		base_value: 0,
		value: function(){return 30+this.base_value+this.modificator+this.bonus+parameters.strenght.value()}
	};
}

Char.prototype = {
	toString: function(){
		return this.name+" "+this.appearance.toString();
	},
	
	change_base_value: function(parameter,additional_value){
		this.parameters[parameter].base_value+= additional_value;
		console.log(parameter+" changed by "+additional_value+". New value is "+this.parameters[parameter].base_value);
	},
	add_bonus: function(parameter,additional_value){
		this.parameters[parameter].bonus+= additional_value;
		console.log(parameter+" changed by "+additional_value+". New value is "+this.parameters[parameter].bonus);
	},
	add_modificator: function(parameter,additional_value){
		this.parameters[parameter].modificator+= additional_value;
		console.log(parameter+" changed by "+additional_value+". New value is "+this.parameters[parameter].modificator);
	},
	add_modula_parameter: function(parameter_name){
		this.parameters[parameter_name] = {
			type: "modula",
			base_cost: 5,
			total_points_cost: function(){
				var total = 0;
				for(var i=0; i<=this.base_value; i++){
					total+= this.base_cost*i;
				}
				return total;
			},
			modificator: 0,
			bonus: 0,
			base_value: 0,
			value: function(){return this.base_value+this.modificator+this.bonus}
		}
	},
	remove_modula_parameter: function(parameter_name){
		if(this.parameters[parameter_name].type === "modula"){
			delete this.parameters[parameter_name];
			console.log(this.name+"`s parameter "+parameter_name+" deleted")
		}
		else {
			console.log("that is not modula parameter");
		}
	},
	add_bodypart: function(part_name){
		this.bodyparts.bodypart[part_name] = new Bodypart(this);
		console.log(this.name+" get "+this.bodypart[part_name]);
	},
	remove_bodypart: function(part_name){
		delete this.bodypart[part_name];
		console.log(this.name+" lost "+this.bodypart[part_name]);
	},
	damage_bodypart_hp: function(part_name,value){
		if (this.bodypart[part_name]){
			this.bodypart[part_name].damage+= value;
			console.log(this.name+"`s "+part_name+" damaged by "+value);
		}
		else {
			console.log("no such part of body");
		}
	},
	add_skill: function(skill_name){}
}

Bodypart = function(character){
	this.appearance = {};
	this.base_hp = character.parameters.base_hp;
	this.damage = 0;
	this.bonus = 0;
	this.hp = function(){return this.base_hp+this.damage+this.bonus;}
	this.armor = 0;
	this.equipment = {};
	this.effects = {};
	this.weight = 5;
	this.equipment = new Equipment; //shoul be in another file.
	this.dr = 0;
}

Feats = function(character){}
Skills = function(character){}
Effects = function(character){}
Bodyparts = function(character){}
DR = function(character){
	this.piercing = 0;
	this.slashing = 0;
	this.electro = 0;
	this.fire = 0;
	this.cold = 0;
	this.corrupt = 0;
	this.poison = 0;
}

// describe damage by type, must be additional tageted by skills, feats, effects, equipment and so on. 
Damage_dealing = function(character){
	this.piercing = 0;
	this.slashing = 0;
	this.electro = 0;
	this.fire = 0;
	this.cold = 0;
	this.corrupt = 0;
	this.poison = 0;
}



P1 = new Char("P1","nice",70);
P1.change_base_value("strength",1);
P1.add_modula_parameter("coolnes");
console.log(P1);
//console.log(P1.parameters.strength.total_points_cost());
//console.log(P1.parameters.strength.value);

