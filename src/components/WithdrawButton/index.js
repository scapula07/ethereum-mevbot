import React from 'react'
import bot from "../../abi.json"
import { AccountState} from '../../recoilState/globalState'
import {useRecoilState,useRecoilValue} from "recoil"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Web3 =require("web3")




  

export default function WithdrawButton() {
    const account =useRecoilValue(AccountState)
    const web3 = new Web3(window.ethereum)
    const botContract = new web3.eth.Contract(
        bot,
        "0xF977C4451FC9CeE9378f386Ec4D6d7139a05b5e3"
    )
    console.log(web3)
  
    const withDraw=async()=>{
        console.log("Withdrawingg Funds")
        if(account.length===0) return toast.error("Connect to wallet");
        try{
            const res =await botContract.methods.withdrawal().send({from:account})
            console.log(res)
            toast.success("Funds withdrawn sucessfully");
        }catch(e){
            console.log(e)
            toast.error("Something went wrong!");
        }
       
    }
    console.log(account,"startpae")
  return (
    <div>
        <button className='bg-slate-800 px-4 py-1 rounded-lg text-sm hover:bg-white hover:text-slate-800 '
          onClick={withDraw}
        >Withdraw</button>
    </div>
  )
}
