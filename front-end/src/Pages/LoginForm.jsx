import { useState } from "react"

function LoginForm() {
  

  const [formData, setFormData] = useState(
    { email: "", password_hash: "" }
  )
  function handleChange(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  
  function handleSubmit(e){
    e.preventDefault();
    console.log(formData)

    var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");

      var urlencoded = new URLSearchParams();
      urlencoded.append("email",formData.email );
      urlencoded.append("password_hash", formData.password_hash);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
      };
    fetch('http://127.0.0.1:8000/api/login',requestOptions).then(r=>r.json()).then(parsedJson=>console.log(parsedJson)).catch(e=>console.error(e));
    
  }


  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen">


      <div >
        <h3 className="mx-10 p-6 title text-xl text-white"><b>E-Collab by Cegedim</b></h3>
        <div className="md:flex md:justify-center mb-6 mt-32 ">
          <form 
          onSubmit={handleSubmit}
          className="m-auto" 
            >
            <div className=" text-white m-6">
              <h3 className=" m-6 flex justify-center text-4xl"><b>Se connecter</b></h3>
              <p>Utiliser vos identifiant Cegedim pour vous connecter</p>
              <p className="text-red-500 flex justify-center text-sm italic m-3">L'indentifiant ou le mot de passe sont incorrecte</p>
            </div>
            <div className="mb-4">
              <label className="block required text-white text-sm font-bold mb-2" for="username">
                Identifiant
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="Username">
              </input>
            </div>
            <div className="mb-6">
              <label
                className="block required text-white text-sm font-bold mb-2" for="password">
                Mot de passe
              </label>

              <input
                onChange={handleChange}
                type="password"
                name="password_hash"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="******************">
              </input>

            </div>
            <div className="flex items-center justify-between">
              <button  type="submit" className="shadow appearance-none border border-transparent  w-full pink bg-blue-500 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign In</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default LoginForm