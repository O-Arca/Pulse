Roll_dices = {
	roll_d6: function()
	{
		//Базовый JS без дополнительных библиотек не обладает широким набором математических функций,
		//поэтому рандомайз в интервале приходится делать своими силами.
		//Math.random() возвращает случайное число от 0.0 до 1.0,
		//Поэтому домножаем на 5, чтобы получить значение от 0 до 6 
		//и прибавляем 1 для справедливого увеличения интервала 1 до 7.
		var random=Math.random()*6+1;
		//Возвращаем результат, округленный вниз.
		return Math.floor(random);
	},
	roll_dice_of_type: function(type) //изменим функцию так, чтобы бросать кость с произвольным чслом граней
	{
		//наша функция принимает значение type в качестве произвольного входного параметра
		var random=Math.random()*type+1; //теперь при вызове функции нам просто стоит указать число граней
		return Math.floor(random);
	},
	roll_d100_like_other: function(type)
	{
		var result = Math.ceil(100*Math.random());
		if (result>type) return Roll_dices.roll_d100_like_other(type);
		else return result;
	},
	roll_n_times: function(func,n,argument) //Функциональная мощь.
	{
		var result=0;
		for (var i=0; i<n; i++)
		{
			result+=func(argument); //Да-да, это она.
		}
		console.log(result/n);
		return (result/n);
	}
}
