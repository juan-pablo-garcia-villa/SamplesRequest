import React from 'react'
import './Login.css'
export const Login = () => {
  return (
    /* From Uiverse.io by Yaya12085 */ 
<div class="form-container">
	
	<form class="form">
		<div class="input-group">
			<label for="username">USER</label>
			<input type="text" name="username" id="username" placeholder=""></input>
		</div>
		<div class="input-group">
			<label for="password">PASSWORD</label>
			<input type="password" name="password" id="password" placeholder=""></input>
			
		</div>
        <div className='ButtonJoin'>

		<button class="sign">JOIN</button>
        </div>
	</form>
	
	
</div>
  )
}
