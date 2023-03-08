import React from 'react'

const itemCount = () => {
    //hook conformado por 2 partes
    const [nombre, setNombre] = useState("Hook")
    //opcion 1 y creamos la function en el boton directamente.
    const [contador, setContador] = useState(0)
  
  
    //opcion 2 creando la function
  
    const sumar = () => {
      if (contador === 10) {
         alert("ah llegado al maximo stock") 
      } else {
      
       setContador(contador + 1)
      }
    }
    
    //valido restar para que no sea negativo
    const restar = () => {
      
      if (contador < 1) {
        alert("no se puede ingresar cantidades negativas")
      } else {
        setContador(contador -1)
      }
    }
    const reset = () => {
      setContador(0)
    }
  
    const onAdd = () => {
      console.log("agregar ala carrito")
    }
  
    return (
      <>
        <h3>{ nombre }</h3>
        <button onClick={() => setNombre("Hook 2") }>cambiar nombre</button>
        <h5>{ contador }</h5>
        <button onClick={() => setContador(contador + 1)}>Sumar</button>
        <button onClick={ restar }>Restar</button>
        <button onClick={ sumar }>Sumar</button>
        <button onClick={ reset } >Reset</button>
        <button onClick={onAdd} >Agregar al Carrito</button>
      </>
    )
}

export default itemCount

