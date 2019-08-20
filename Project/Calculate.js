
let G = 0 , LastG , S; /// ответ


function showresult(choise)
{
	let C = choise;
	
	if(C == 1) // %
	{
		LastG = G;
		G 	  = 0;
		S 	  = '%';
	}
	else if(C == 2) // CE
	{
		G = 0;
	}
	else if(C == 3) // C
	{
		G = LastG = S = 0;
	}
	else if(C == 4) // del
	{
		G -= G % 10;
		G /= 10;
	}
	else if(C == 5) // /
	{
		LastG = G;
		G	  = 0;
		S 	  = '/';
	}
	else if(C == 6) // V
	{
		G = Math.sqrt(G);
	}
	else if(C == 7) // 7
	{
		G *= 10;
		G += 7;
	}
	else if(C == 8) // 8
	{
		G *= 10;
		G += 8;
	}
	else if(C == 9) // 9
	{
		G *= 10;
		G += 9;
	}
	else if(C == 10) // *
	{
		LastG = G;
		G = 0;
		S = '*';
	}
	else if(C == 11) // ^2
	{
		G *= G;
	}
	else if(C == 12) // 4
	{
		G *= 10;
		G += 4;
	}
	else if(C == 13) // 5
	{
		G *= 10;
		G += 5;
	}
	else if(C == 14) // 6
	{
		G *= 10;
		G += 6;
	}
	else if(C == 15) // -
	{
		LastG = G;
		G = 0;
		S = '-';
	}
	else if(C == 16) //^3
	{
		G *= G * G;
	}
	else if(C == 17) // 1
	{
		G *= 10;
		G += 1;
	}
	else if(C == 18) // 2
	{
		G *= 10;
		G += 2;
	}
	else if(C == 19) // 3
	{
		G *= 10;
		G += 3;
	}
	else if(C == 20) // +
	{
		LastG = G;
		G = 0;
		S = '+';
	}
	else if(C == 21) // 1 / x
	{
		G = 1 / G;
	}
	else if(C == 22) // +-
	{
		G *= -1;
	}
	else if(C == 23) // 0
	{
		G *= 10;
	}
	else if(C == 25) // =
	{
		if(S == '+')
		{
			G = LastG + G;
			LastG = 0;
		}
		else if(S == '-')
		{
			G = LastG - G;
			LastG = 0;
		}
		else if(S == '*')
		{
			G = LastG * G;
			LastG = 0;
		}
		else if(S == '%')
		{
			G = LastG % G;
			LastG = 0;
		}
		else if(S == '/')
		{
			G = LastG / G;
			LastG = 0;
		}
		S = 0;
	}
	
	document.getElementById('result').value = G;

}
