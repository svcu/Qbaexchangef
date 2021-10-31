import React, {useState} from 'react'
import "./Form.css"

function Form() {

    const [amount, setAmount] = useState("");
    const [card, setCard] = useState("")
    const [fee, setFee] = useState("");

    const submitForm = async() => {
        let res = await fetch("http://localhost:3000/order", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "crypto" : "USDT",
                "amount" : amount,
                "transaction_id" : card
            })
        })

        res = await res.json();

        if(res=="OK"){
            alert("Estamos validando su transaccion, sus USDT deberan llegar pronto")
        }else{
            alert("Se ha producido un error, reintente")
        }
    }


    return (
        <div>
            <div>

                <h1 class="logo">QbaExchange</h1>

                <input type="number" placeholder="Cantidad (USDT)" onChange={(event) => {
                setAmount(event.target.value)
                setFee((parseFloat(event.target.value, 10) * 5) / 100)
                }}></input>

                <input type="number" placeholder="Numero de tarjeta" onChange={(event) => {
                setCard(event.target.value)
                }}></input>

                <h3 class="mg">{"Transferir a 9225:XXXX:XXXX:XXXX : "+(parseFloat(fee, 10)+parseFloat(amount, 10))}</h3>

            </div>

            <div>
                <button class="mg" onClick={submitForm}>Transaccion echa</button>
            </div>

            <div>
                <p>Transfiera la cantidad expuesta en el texto encima del boton a la tarjeta con el numero expuesto encima del boton, cuando haya echo la tranferencia presione el boton y nosotros validaremos la transaccion</p>
            </div>
    
        </div>
    )
}

export  {Form}
