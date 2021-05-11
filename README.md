# Test Dino Forum #

---

### Description ###
The JSON format is used to save post data.
Time in milliseconds is used as id.
Example:
```json
[
	{
		"id":1289981520000,
		"name":"Tom York",
		"date":"Nov 17, 2010, 08:12",
		"text":"Choose a job you love, and you will never have to work a day in your life.",
		"comments":[
			{
				"name":"Stive Melony",
				"text":"World belongs to the patient.."
			},
			{
				"name":"Jane Washington",
				"text":"Every solution breeds new problems."
			}
		]
	}
]
```
For using the application, a user needs to enter his name in a dialog window.
After entering a name, the user can create a new post (button on ToolBar with icon pen), edit all posts, and write comments under a post.
If the user does not enter a name, he will be denied access to these three types of functions. He can only read posts and comments.

---

### Material Angular: ###
* [MatDialogModule](https://material.angular.io/components/dialog/overview)
* [MatButtonModule](https://material.angular.io/components/button/overview)
* [MatFormFieldModule](https://material.angular.io/components/form-field/overview)
* [MatIconModule](https://material.angular.io/components/icon/overview)
* [MatInputModule](https://material.angular.io/components/input/overview)
* [MatToolbarModule](https://material.angular.io/components/toolbar/overview)
* [MatCardModule](https://material.angular.io/components/card/overview)
* [MatTooltipModule](https://material.angular.io/components/tooltip/overview)
* [MatDividerModule](https://material.angular.io/components/divider/overview)
* [MatSnackBarModule](https://material.angular.io/components/snack-bar/overview)

---

### npm: ###
* [jodit-angular](https://www.npmjs.com/package/jodit-angular)

---

### Problems that arose while writing the program: ###
1. Reading a file data.json from a folder assets. Solution: put the file json-typings.d.ts with the code in the root of the project.
2. There were problems during the build of the program due to jodit-angular. Solution: using several links in a file index.html, and for runing application need use the next command: ```npm start```
3. A deprecated function was used to store the username. Solution: instead of ```Subject``` need to use ```BehaviorSubject``` from "rxjs".

---

### Time taken to write a project ###
1. Friday (evening) - preparation for the project 45-90 minutes;
2. Saturday (full work day) - development, problem solving;
3. Sunday (full work day) - development, problem solving;
4. Monday (full work day) - development, problem solving;
5. Tuesday (morning) - checking the program, cleaning the code, preparing for publication 2 hours +/- 30 minutes;

### Information sources ###
1. [Angular instraction](https://angular.io/cli)
2. [Material Angular](https://material.angular.io/)
3. [Stackoverflow](https://stackoverflow.com/)
4. Queries in Google and YouTube

