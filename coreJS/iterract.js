Atack = function(character, target){}
Atack.prototype = function(character,target){
	this.hit = function(){
		if ((character.parameters.atack.value()>=target.parameters.defence.value)&&(target.skills.avoid_atack()==false))
		{target.add_damage(character.damage_dealing)}
		else
		{console.log("miss")}
	}
}

//this shoul be function, that calculate damage in logic:
//At first we damage equipments hp (whith dr), then damage bodypart hp.
Add_damage = function(){
	this.add_damage_to_bodypart = function(character,bodypart,damage_value){
		var result = 0;
		if (character.bodyparts[bodypart].equipment.hp()<0){
			character.bodyparts[bodypart].equipment.remove_equipment();
		}
		if (character.bodyparts[bodypart].equipment.hp()>0){
			for(type in damage){
				var difference = damage.type-character.bodyparts[bodypart].equipment.dr.type;
				if(difference >= 0){
					result+= difference;
					character.bodyparts[bodypart].equipment.damage+= result;
				}
			}
		}
		else{
			for(type in damage){
				var difference = damage.type-character.bodyparts[bodypart].equipment.dr.type;
				if(difference >= 0){
					result+= difference;
					character.bodyparts[bodypart].damage+= result;
				}
			}
		}
	};
	this.randomly_add_damage = function(character,damage_value){
		var helper_damage = damage_value;
		var damage_part = 0;
		for (bodypart in character.bodyparts){
			for (type in damage_value){
				damage_part = Math.round(helper_damage.type*Math.random());
				helper_damage.type-= damage_part;
				character.bodyparts.bodypart.damage+= damage_part-character.bodyparts.bodypart.dr;
			}
		}
	};
}
